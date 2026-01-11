import { useEffect, useRef, useState } from 'react'
import { Calendar, Clock, Video, ArrowRight, Check, Sparkles, Globe, Mail, MessageSquare } from 'lucide-react'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { format, addDays, isSameDay, isWeekend } from 'date-fns'

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
    '06:00 PM',
  '07:00 PM',
    '08:00 PM',
  '09:00 PM',
  '10:00 PM',
]


const meetingTypes = [
  { 
    id: 'quick', 
    title: 'Quick Chat', 
    duration: '15 min', 
    description: 'Quick intro & project discussion',
    icon: MessageSquare
  },
  { 
    id: 'discovery', 
    title: 'Discovery Call', 
    duration: '30 min', 
    description: 'Deep dive into your requirements',
    icon: Video
  },
  { 
    id: 'consultation', 
    title: 'Consultation', 
    duration: '60 min', 
    description: 'Full project planning session',
    icon: Globe
  },
]

const BookCallSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !selectedType) return
    
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const meetingTypeData = meetingTypes.find(t => t.id === selectedType)
      
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: selectedDate.toISOString(),
          dateFormatted: format(selectedDate, 'PPP'),
          time: selectedTime,
          meetingType: `${meetingTypeData?.title} (${meetingTypeData?.duration})`,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to book call')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setStep(1)
        setSelectedDate(undefined)
        setSelectedTime(null)
        setSelectedType(null)
        setFormData({ name: '', email: '', message: '' })
      }, 5000)
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitError(error instanceof Error ? error.message : 'Failed to book call. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedStep1 = selectedType !== null
  const canProceedStep2 = selectedDate !== undefined && selectedTime !== null
  const canSubmit = formData.name && formData.email

  return (
    <section
      ref={sectionRef}
      id="call"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[200px]" />
        <div className="absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[180px]" />
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent backdrop-blur-sm">
            <Video className="h-4 w-4" />
            Let's Connect
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Book a <span className="text-gradient">Call</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Progress Steps */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 ${
                    step >= s
                      ? 'border-accent bg-accent text-background'
                      : 'border-white/20 bg-white/5 text-muted-foreground'
                  }`}
                >
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 3 && (
                  <div className={`mx-2 h-0.5 w-12 rounded-full transition-all duration-500 md:w-20 ${
                    step > s ? 'bg-accent' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className={`mx-auto max-w-lg text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 p-12 backdrop-blur-xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                <Check className="h-10 w-10 text-background" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Booking Confirmed!</h3>
              <p className="mb-6 text-muted-foreground">
                You'll receive a calendar invite at <span className="text-accent">{formData.email}</span>
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-muted-foreground">
                  {meetingTypes.find(t => t.id === selectedType)?.title} • {selectedDate && format(selectedDate, 'PPP')} • {selectedTime}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Main Content */
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mx-auto max-w-4xl">
              {/* Step 1: Meeting Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-center text-xl font-semibold text-foreground">Select Meeting Type</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {meetingTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={`group relative rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                            selectedType === type.id
                              ? 'border-accent bg-accent/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          {selectedType === type.id && (
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent to-primary opacity-20 blur" />
                          )}
                          <div className="relative">
                            <div className={`mb-4 inline-flex rounded-xl p-3 ${
                              selectedType === type.id 
                                ? 'bg-accent text-background' 
                                : 'bg-white/10 text-foreground'
                            }`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <h4 className="mb-1 font-semibold text-foreground">{type.title}</h4>
                            <p className="mb-3 text-sm text-muted-foreground">{type.description}</p>
                            <div className="flex items-center gap-2 text-sm text-accent">
                              <Clock className="h-4 w-4" />
                              {type.duration}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => canProceedStep1 && setStep(2)}
                      disabled={!canProceedStep1}
                      className={`flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                        canProceedStep1
                          ? 'bg-gradient-to-r from-accent to-primary text-background shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40'
                          : 'cursor-not-allowed bg-white/10 text-muted-foreground'
                      }`}
                    >
                      Continue
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-center text-xl font-semibold text-foreground">Select Date & Time</h3>
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Calendar */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                      <div className="mb-4 flex items-center gap-2 text-foreground">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span className="font-medium">Select a Date</span>
                      </div>
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date > addDays(new Date(), 60) || isWeekend(date)}
                        className="pointer-events-auto rounded-xl w-full"
                        classNames={{
                          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                          month: "space-y-4 w-full",
                          caption: "flex justify-center pt-1 relative items-center",
                          caption_label: "text-sm font-medium text-foreground",
                          nav: "space-x-1 flex items-center",
                          button_previous: "absolute left-1 h-8 w-8 bg-white/10 hover:bg-white/20 rounded-lg inline-flex items-center justify-center text-foreground transition-colors",
                          button_next: "absolute right-1 h-8 w-8 bg-white/10 hover:bg-white/20 rounded-lg inline-flex items-center justify-center text-foreground transition-colors",
                          table: "w-full border-collapse",
                          weekdays: "flex w-full",
                          weekday: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] py-2 flex-1",
                          week: "flex w-full mt-1",
                          day: cn(
                            "h-10 w-10 p-0 font-normal rounded-lg mx-auto flex items-center justify-center",
                            "hover:bg-accent/20 hover:text-foreground transition-colors",
                            "aria-selected:opacity-100"
                          ),
                          day_button: "h-10 w-10 p-0 font-normal",
                          day_selected:
                            "bg-accent text-background hover:bg-accent hover:text-background focus:bg-accent focus:text-background",
                          day_today: "bg-white/10 text-foreground",
                          day_outside: "text-muted-foreground/40 opacity-50",
                          day_disabled: "text-muted-foreground/30 opacity-30 cursor-not-allowed hover:bg-transparent",
                          day_hidden: "invisible",
                        }}
                      />
                    </div>

                    {/* Time Slots */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                      <div className="mb-4 flex items-center gap-2 text-foreground">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="font-medium">Available Times</span>
                        {selectedDate && (
                          <span className="ml-auto text-sm text-muted-foreground">
                            {format(selectedDate, 'EEE, MMM d')}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            disabled={!selectedDate}
                            className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                              selectedTime === time
                                ? 'border-accent bg-accent text-background'
                                : selectedDate
                                ? 'border-white/10 bg-white/5 text-foreground hover:border-accent/50 hover:bg-accent/10'
                                : 'cursor-not-allowed border-white/5 bg-white/[0.02] text-muted-foreground/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                     
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-foreground transition-all hover:bg-white/10"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => canProceedStep2 && setStep(3)}
                      disabled={!canProceedStep2}
                      className={`flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                        canProceedStep2
                          ? 'bg-gradient-to-r from-accent to-primary text-background shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40'
                          : 'cursor-not-allowed bg-white/10 text-muted-foreground'
                      }`}
                    >
                      Continue
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-center text-xl font-semibold text-foreground">Your Details</h3>
                  
                  {/* Summary Card */}
                  <div className="mx-auto max-w-lg rounded-2xl border border-accent/30 bg-accent/5 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Video className="h-4 w-4 text-accent" />
                        {meetingTypes.find(t => t.id === selectedType)?.title}
                      </div>
                      <div className="flex items-center gap-4 text-foreground">
                        <span>{selectedDate && format(selectedDate, 'MMM d, yyyy')}</span>
                        <span className="text-accent">{selectedTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto max-w-lg space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message (optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-foreground transition-all hover:bg-white/10"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmit || isSubmitting}
                      className={`flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                        canSubmit && !isSubmitting
                          ? 'bg-gradient-to-r from-accent to-primary text-background shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40'
                          : 'cursor-not-allowed bg-white/10 text-muted-foreground'
                      }`}
                    >
                      <Sparkles className={`h-5 w-5 ${isSubmitting ? 'animate-spin' : ''}`} />
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </button>
                  </div>
                  
                  {submitError && (
                    <div className="mx-auto max-w-lg rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center">
                      <p className="text-sm text-red-400">{submitError}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BookCallSection
