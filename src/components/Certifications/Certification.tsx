import { useEffect, useRef, useState } from 'react'
import { Award, Trophy, BookOpen, Code, Sparkles, ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { certificates, Certificate } from '@/data/certificates'

const typeIcons = {
  course: BookOpen,
  hackathon: Code,
  competition: Trophy,
}

const typeGradients = {
  course: 'from-blue-500 via-cyan-400 to-teal-500',
  hackathon: 'from-accent via-primary to-accent',
  competition: 'from-amber-400 via-orange-500 to-red-500',
}

const typeLabels = {
  course: 'Course',
  hackathon: 'Hackathon',
  competition: 'Competition',
}

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter, setFilter] = useState<'all' | 'course' | 'hackathon' | 'competition'>('all')
  const [isHovering, setIsHovering] = useState(false)

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

  // Auto-rotate
  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredCerts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovering, filter])

  const filteredCerts = filter === 'all' 
    ? certificates 
    : certificates.filter(c => c.type === filter)

  const stats = {
    total: certificates.length,
    hackathons: certificates.filter(c => c.type === 'hackathon').length,
    competitions: certificates.filter(c => c.type === 'competition').length,
    courses: certificates.filter(c => c.type === 'course').length,
  }

  const activeCert = filteredCerts[activeIndex]
  const Icon = activeCert ? typeIcons[activeCert.type] : Trophy

  const goNext = () => setActiveIndex((prev) => (prev + 1) % filteredCerts.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + filteredCerts.length) % filteredCerts.length)

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[200px] animate-pulse" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[180px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-5 py-2.5 text-sm font-medium text-amber-300 backdrop-blur-sm">
            <Trophy className="h-4 w-4" />
            Achievements Unlocked
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Certifications & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Wins</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hackathon victories, competition wins, and certifications that mark my journey.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className={`mb-12 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { label: 'Total', value: stats.total, icon: Award, gradient: 'from-accent to-primary' },
            { label: 'Hackathons', value: stats.hackathons, icon: Code, gradient: 'from-accent to-primary' },
            { label: 'Competitions', value: stats.competitions, icon: Trophy, gradient: 'from-amber-400 to-orange-500' },
            { label: 'Courses', value: stats.courses, icon: BookOpen, gradient: 'from-blue-400 to-cyan-400' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 blur transition-opacity group-hover:opacity-50`} />
              <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all hover:border-white/20">
                <div className={`rounded-lg bg-gradient-to-r ${stat.gradient} p-2`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div
          className={`mb-14 flex justify-center transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex rounded-2xl border border-white/10 bg-black/30 p-1.5 backdrop-blur-xl">
            {(['all', 'hackathon', 'competition', 'course'] as const).map((type) => (
              <button
                key={type}
                onClick={() => { setFilter(type); setActiveIndex(0) }}
                className={`relative rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  filter === type
                    ? 'text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter === type && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/30" />
                )}
                <span className="relative z-10">{type === 'all' ? 'All' : typeLabels[type]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Showcase */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Display */}
          <div className="relative mx-auto max-w-5xl">
            {/* Navigation Buttons */}
            <button
              onClick={goPrev}
              className="absolute -left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 backdrop-blur-xl transition-all hover:border-accent/50 hover:bg-accent/20 md:-left-8"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={goNext}
              className="absolute -right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 backdrop-blur-xl transition-all hover:border-accent/50 hover:bg-accent/20 md:-right-8"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* 3D Card Stack */}
            <div className="relative h-[500px] md:h-[550px]" style={{ perspective: '1500px' }}>
              {filteredCerts.map((cert, index) => {
                const isActive = index === activeIndex
                const offset = index - activeIndex
                const absOffset = Math.abs(offset)
                
                // Only render visible cards
                if (absOffset > 2) return null

                return (
                  <div
                    key={cert.id}
                    onClick={() => setActiveIndex(index)}
                    className="absolute left-1/2 top-1/2 w-[85%] max-w-lg cursor-pointer transition-all duration-700 ease-out md:w-[70%]"
                    style={{
                      transform: `
                        translateX(-50%) 
                        translateY(-50%)
                        translateZ(${isActive ? 100 : -absOffset * 80}px)
                        translateX(${offset * 15}%)
                        rotateY(${offset * -8}deg)
                        scale(${isActive ? 1 : 0.85 - absOffset * 0.08})
                      `,
                      zIndex: 10 - absOffset,
                      opacity: isActive ? 1 : 0.4 - absOffset * 0.1,
                      filter: isActive ? 'none' : 'blur(2px)',
                    }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${typeGradients[cert.type]} opacity-0 blur-2xl transition-opacity duration-500 ${isActive ? 'opacity-40' : ''}`} />
                    
                    {/* Card */}
                    <div className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                      isActive 
                        ? 'border-white/20 bg-gradient-to-br from-white/10 to-white/5' 
                        : 'border-white/5 bg-black/40'
                    }`}>
                      {/* Top Shine Effect */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      
                      {/* Image Section */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        
                        {/* Type Badge */}
                        <div className={`absolute left-4 top-4 flex items-center gap-2 rounded-full bg-gradient-to-r ${typeGradients[cert.type]} px-4 py-2 text-xs font-bold text-white shadow-xl`}>
                          {(() => {
                            const TypeIcon = typeIcons[cert.type]
                            return <TypeIcon className="h-4 w-4" />
                          })()}
                          {typeLabels[cert.type]}
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute right-4 top-4 flex items-center gap-2">
                          <div className="rounded-full bg-black/60 p-2 backdrop-blur-sm">
                            <Zap className="h-4 w-4 text-accent" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6 md:p-8">
                        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="font-medium">{cert.issuer}</span>
                          <span className="h-1 w-1 rounded-full bg-white/30" />
                          <span>{cert.date}</span>
                        </div>
                        
                        <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                          {cert.title}
                        </h3>

                        {cert.project && (
                          <div className="mb-5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3">
                            <p className="text-xs font-medium uppercase tracking-wider text-accent/70">Project Built</p>
                            <p className="text-lg font-semibold text-accent">{cert.project.name}</p>
                          </div>
                        )}

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm transition-colors hover:bg-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Dots Navigation */}
            <div className="mt-8 flex justify-center gap-2">
              {filteredCerts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-accent to-primary'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
