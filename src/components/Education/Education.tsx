import { GraduationCap } from 'lucide-react'
import Timeline from './Timeline'
import { events } from '@/data/education'

const EducationSection = () => {
  return (
    <section id="education" className="relative min-h-screen  bg-background py-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <GraduationCap className="h-4 w-4" />
            Academic Journey
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Education &{' '}
            <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A timeline of my academic achievements and continuous learning path in technology and computer science.
          </p>
        </div>

        {/* Scroll Stack Timeline */}
        <div className="pb-20">
          <Timeline events={events} />
        </div>
      </div>
    </section>
  )
}

export default EducationSection
