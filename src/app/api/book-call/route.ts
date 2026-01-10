import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function generateICS(name: string, email: string, date: string, time: string, meetingType: string, message: string) {
  // Parse the date string more reliably
  const startDate = new Date(date)
  
  // Check if date is valid
  if (isNaN(startDate.getTime())) {
    throw new Error(`Invalid date: ${date}`)
  }
  
  // Parse time
  const [timeStr, period] = time.split(' ')
  const [hours, minutes] = timeStr.split(':')
  let hour = parseInt(hours)
  
  if (period === 'PM' && hour !== 12) hour += 12
  if (period === 'AM' && hour === 12) hour = 0
  
  // Set the time on the date
  startDate.setHours(hour, parseInt(minutes || '0'), 0, 0)
  
  // Verify the date is still valid after setting hours
  if (isNaN(startDate.getTime())) {
    throw new Error(`Invalid date/time combination: ${date} ${time}`)
  }
  
  // Duration based on meeting type
  const duration = meetingType.includes('15 min') ? 15 : meetingType.includes('30 min') ? 30 : 60
  const endDate = new Date(startDate.getTime() + duration * 60000)
  
  const formatDate = (d: Date) => {
    if (isNaN(d.getTime())) {
      throw new Error('Invalid date object')
    }
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }
  
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Portfolio//Book Call//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
DTSTAMP:${formatDate(new Date())}
ORGANIZER;CN=Abdul Moiz:mailto:moiz20920@gmail.com
ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}
SUMMARY:${meetingType} - Portfolio Call
DESCRIPTION:Meeting Type: ${meetingType}\\n\\nClient: ${name}\\nEmail: ${email}\\n\\nMessage: ${message || 'No message provided'}\\n\\nThis is a scheduled call booking from your portfolio website.
LOCATION:Video Call (Link will be shared)
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${meetingType} in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`
  
  return ics
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, date, dateFormatted, time, meetingType } = body

    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS

    if (!DISCORD_WEBHOOK_URL) {
      console.error('Discord webhook URL not configured')
      return NextResponse.json(
        { success: false, error: 'Webhook not configured' },
        { status: 500 }
      )
    }

    // Validate required fields
    if (!name || !email || !date || !time || !meetingType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Use dateFormatted for display, date (ISO) for calendar
    const displayDate = dateFormatted || date

    // Generate ICS file
    const icsContent = generateICS(name, email, date, time, meetingType, message)

    // Create Discord embed message
    const discordPayload = {
      embeds: [
        {
          title: '📅 New Call Booking',
          color: 0x22c55e, // Green color
          fields: [
            {
              name: '👤 Name',
              value: name,
              inline: true,
            },
            {
              name: '📧 Email',
              value: email,
              inline: true,
            },
            {
              name: '🎯 Meeting Type',
              value: meetingType,
              inline: true,
            },
            {
              name: '📅 Date',
              value: displayDate,
              inline: true,
            },
            {
              name: '🕐 Time',
              value: time,
              inline: true,
            },
            {
              name: '💬 Message',
              value: message || 'No message provided',
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Portfolio Call Booking System',
          },
        },
      ],
    }

    // Send to Discord
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    })

    if (!discordResponse.ok) {
      throw new Error('Failed to send Discord notification')
    }

    // Send calendar invites via email if configured
    if (EMAIL_USER && EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        })

        // Send to admin (you)
        await transporter.sendMail({
          from: `"Abdul Moiz " <${EMAIL_USER}>`,
          to: 'moiz20920@gmail.com',
          subject: `New Meeting Request: ${meetingType} - ${name} (${displayDate})`,
          html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
                <tr><td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color:#fff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <tr><td style="background:linear-gradient(135deg,#22c55e 0%,#16a34a 100%);padding:40px 30px;text-align:center;">
                      <h1 style="margin:0;color:#fff;font-size:28px;font-weight:600;">New Meeting Request</h1>
                      <p style="margin:10px 0 0;color:#fff;opacity:0.95;font-size:14px;">New booking from your portfolio</p>
                    </td></tr>
                    <tr><td style="padding:35px 30px;">
                      <h2 style="margin:0 0 20px;color:#18181b;font-size:18px;font-weight:600;">Client Information</h2>
                      <table width="100%"><tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
                        <span style="color:#71717a;font-size:13px;display:block;margin-bottom:4px;">Client Name</span>
                        <span style="color:#18181b;font-size:15px;font-weight:500;">${name}</span>
                      </td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
                        <span style="color:#71717a;font-size:13px;display:block;margin-bottom:4px;">Email Address</span>
                        <a href="mailto:${email}" style="color:#22c55e;font-size:15px;font-weight:500;text-decoration:none;">${email}</a>
                      </td></tr></table>
                    </td></tr>
                    <tr><td style="padding:0 30px 35px;">
                      <h2 style="margin:0 0 20px;color:#18181b;font-size:18px;font-weight:600;">Meeting Details</h2>
                      <table width="100%" style="background-color:#f9fafb;border-radius:8px;padding:20px;">
                        <tr><td style="padding:8px 0;"><span style="color:#71717a;font-size:13px;display:block;margin-bottom:6px;">Meeting Type</span>
                        <span style="color:#18181b;font-size:15px;font-weight:500;">${meetingType}</span></td></tr>
                        <tr><td style="padding:8px 0;"><span style="color:#71717a;font-size:13px;display:block;margin-bottom:6px;">Date</span>
                        <span style="color:#18181b;font-size:15px;font-weight:500;">${displayDate}</span></td></tr>
                        <tr><td style="padding:8px 0;"><span style="color:#71717a;font-size:13px;display:block;margin-bottom:6px;">Time</span>
                        <span style="color:#18181b;font-size:15px;font-weight:500;">${time}</span></td></tr>
                      </table>
                    </td></tr>
                    ${message ? `<tr><td style="padding:0 30px 35px;"><h2 style="margin:0 0 12px;color:#18181b;font-size:18px;font-weight:600;">Client Message</h2>
                    <div style="background-color:#fafafa;border-left:4px solid #22c55e;padding:16px 20px;border-radius:4px;">
                    <p style="margin:0;color:#3f3f46;font-size:14px;line-height:1.6;">${message}</p></div></td></tr>` : ''}
                    <tr><td style="padding:0 30px 35px;"><div style="background-color:#eff6ff;border:1px solid #bfdbfe;padding:16px;border-radius:8px;text-align:center;">
                    <p style="margin:0;color:#1e40af;font-size:14px;">📎 <strong>Calendar invite attached</strong><br>
                    <span style="font-size:13px;color:#3b82f6;">Add to your calendar and send meeting link to ${email}</span></p></div></td></tr>
                    <tr><td style="background-color:#fafafa;padding:25px 30px;border-top:1px solid #e4e4e7;">
                    <p style="margin:0;color:#71717a;font-size:12px;text-align:center;">Portfolio Booking System<br>
                    <span style="color:#a1a1aa;">© ${new Date().getFullYear()} Abdul Moiz</span></p></td></tr>
                  </table>
                </td></tr>
              </table>
            </body>
            </html>
          `,
          attachments: [
            {
              filename: 'meeting.ics',
              content: icsContent,
              contentType: 'text/calendar',
            },
          ],
        })

        // Send to user
        await transporter.sendMail({
          from: `"Abdul Moiz" <${EMAIL_USER}>`,
          to: email,
          subject: `Meeting Confirmed: ${meetingType} - ${displayDate} at ${time}`,
          html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
                <tr><td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color:#fff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <tr><td style="background:linear-gradient(135deg,#22c55e 0%,#16a34a 100%);padding:40px 30px;text-align:center;">
                      <div style="width:60px;height:60px;background-color:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;line-height:60px;font-size:32px;">✓</div>
                      <h1 style="margin:0;color:#fff;font-size:28px;font-weight:600;">Meeting Confirmed!</h1>
                      <p style="margin:10px 0 0;color:#fff;opacity:0.95;font-size:14px;">Your call has been successfully scheduled</p>
                    </td></tr>
                    <tr><td style="padding:35px 30px 25px;">
                      <p style="margin:0;color:#18181b;font-size:16px;">Hello <strong>${name}</strong>,</p>
                      <p style="margin:16px 0 0;color:#3f3f46;font-size:15px;line-height:1.6;">Thank you for scheduling a call with me. I'm excited to connect and discuss your project. This email confirms your booking with all the meeting details.</p>
                    </td></tr>
                    <tr><td style="padding:0 30px 35px;">
                      <div style="background:linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%);border:2px solid #22c55e;border-radius:12px;padding:24px;">
                        <h2 style="margin:0 0 20px;color:#166534;font-size:18px;font-weight:600;text-align:center;">Your Meeting Details</h2>
                        <table width="100%">
                          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(34,197,94,0.2);">
                            <span style="color:#166534;font-size:13px;font-weight:500;display:block;margin-bottom:6px;">📋 Meeting Type</span>
                            <span style="color:#15803d;font-size:16px;font-weight:600;">${meetingType}</span>
                          </td></tr>
                          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(34,197,94,0.2);">
                            <span style="color:#166534;font-size:13px;font-weight:500;display:block;margin-bottom:6px;">📅 Date</span>
                            <span style="color:#15803d;font-size:16px;font-weight:600;">${displayDate}</span>
                          </td></tr>
                          <tr><td style="padding:12px 0;">
                            <span style="color:#166534;font-size:13px;font-weight:500;display:block;margin-bottom:6px;">🕐 Time</span>
                            <span style="color:#15803d;font-size:16px;font-weight:600;">${time}</span>
                            <span style="display:block;color:#16a34a;font-size:12px;margin-top:4px;">(PK local time)</span>
                          </td></tr>
                        </table>
                      </div>
                    </td></tr>
                    <tr><td style="padding:0 30px 35px;">
                      <h2 style="margin:0 0 16px;color:#18181b;font-size:18px;font-weight:600;">What's Next?</h2>
                      <table width="100%">
                        <tr><td style="padding:12px 0;">
                          <table><tr><td style="width:32px;vertical-align:top;padding-top:2px;">
                            <div style="width:24px;height:24px;background-color:#22c55e;border-radius:50%;color:#fff;font-size:12px;font-weight:600;text-align:center;line-height:24px;">1</div>
                          </td><td style="vertical-align:top;">
                            <p style="margin:0;color:#18181b;font-size:14px;font-weight:500;">Add to Your Calendar</p>
                            <p style="margin:4px 0 0;color:#71717a;font-size:13px;line-height:1.5;">Calendar invite (.ics file) is attached. Add it to your calendar app.</p>
                          </td></tr></table>
                        </td></tr>
                        <tr><td style="padding:12px 0;">
                          <table><tr><td style="width:32px;vertical-align:top;padding-top:2px;">
                            <div style="width:24px;height:24px;background-color:#22c55e;border-radius:50%;color:#fff;font-size:12px;font-weight:600;text-align:center;line-height:24px;">2</div>
                          </td><td style="vertical-align:top;">
                            <p style="margin:0;color:#18181b;font-size:14px;font-weight:500;">Expect Meeting Link</p>
                            <p style="margin:4px 0 0;color:#71717a;font-size:13px;line-height:1.5;">I'll send you the video call link 15 minutes before our meeting.</p>
                          </td></tr></table>
                        </td></tr>
                        <tr><td style="padding:12px 0;">
                          <table><tr><td style="width:32px;vertical-align:top;padding-top:2px;">
                            <div style="width:24px;height:24px;background-color:#22c55e;border-radius:50%;color:#fff;font-size:12px;font-weight:600;text-align:center;line-height:24px;">3</div>
                          </td><td style="vertical-align:top;">
                            <p style="margin:0;color:#18181b;font-size:14px;font-weight:500;">Prepare for Our Discussion</p>
                            <p style="margin:4px 0 0;color:#71717a;font-size:13px;line-height:1.5;">Feel free to prepare any questions or materials you'd like to discuss.</p>
                          </td></tr></table>
                        </td></tr>
                      </table>
                    </td></tr>
                    <tr><td style="padding:0 30px 35px;">
                      <div style="background-color:#fafafa;border-left:4px solid #22c55e;padding:16px 20px;border-radius:4px;">
                        <p style="margin:0;color:#3f3f46;font-size:14px;line-height:1.6;"><strong style="color:#18181b;">Need to reschedule?</strong><br>No problem! Simply reply to this email, and we'll find a better time.</p>
                      </div>
                    </td></tr>
                    <tr><td style="padding:0 30px 35px;">
                      <p style="margin:0 0 8px;color:#18181b;font-size:15px;">Looking forward to our conversation!</p>
                      <p style="margin:0;color:#18181b;font-size:15px;font-weight:600;">Best regards,<br><span style="color:#22c55e;">Abdul Moiz</span></p>
                      <p style="margin:8px 0 0;color:#71717a;font-size:13px;">Full Stack Developer<br><a href="mailto:moiz20920@gmail.com" style="color:#22c55e;text-decoration:none;">moiz20920@gmail.com</a></p>
                    </td></tr>
                    <tr><td style="background-color:#fafafa;padding:25px 30px;border-top:1px solid #e4e4e7;">
                      <p style="margin:0;color:#71717a;font-size:12px;text-align:center;">Abdul Moiz's Portfolio<br><span style="color:#a1a1aa;">© ${new Date().getFullYear()} Abdul Moiz</span></p>
                    </td></tr>
                  </table>
                </td></tr>
              </table>
            </body>
            </html>
          `,
             
          attachments: [
            {
              filename: 'meeting.ics',
              content: icsContent,
              contentType: 'text/calendar',
            },
          ],
        })

        console.log('Calendar invites sent successfully')
      } catch (emailError) {
        console.error('Error sending calendar invites:', emailError)
        // Don't fail the entire request if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed successfully',
    })
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process booking' },
      { status: 500 }
    )
  }
}
