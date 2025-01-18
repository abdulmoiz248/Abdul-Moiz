import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req:Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || message.trim() === '') {
      return NextResponse.json({ success: false, message: 'Message cannot be empty.' }, { status: 400 });
    }

    // Configure the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email details
    const mailOptions = {
      from: 'no-reply@portfolio',
      to: 'moiz20920@gmail.com',
      subject: 'New Anonymous Message Received',
      text: `You have received a new message: \n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
