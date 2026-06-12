'use client'

import { ArrowRight, Heart, Cpu, Server, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const floatingIcons = [
  { icon: Heart, delay: 0, x: '10%', y: '20%' },
  { icon: Cpu, delay: 1.5, x: '80%', y: '15%' },
  { icon: Server, delay: 3, x: '15%', y: '70%' },
  { icon: Shield, delay: 2, x: '85%', y: '65%' },
]

const HygieiaCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
        style={{ background: 'radial-gradient(circle, hsl(142 76% 45% / 0.08), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-float"
        style={{ background: 'radial-gradient(circle, hsl(180 60% 40% / 0.06), transparent 70%)', animationDelay: '3s' }}
      />

      {/* Floating healthcare icons */}
      {floatingIcons.map(({ icon: Icon, delay, x, y }, i) => (
        <div
          key={i}
          className="absolute hidden lg:block animate-float opacity-[0.07]"
          style={{ left: x, top: y, animationDelay: `${delay}s` }}
        >
          <Icon className="w-12 h-12 text-primary" />
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`group relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />

          {/* Card */}
          <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-3xl border border-primary/10 overflow-hidden group-hover:border-primary/30 transition-all duration-500">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-tr-full" />

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 md:p-12 lg:p-14 relative z-10 flex flex-col justify-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-wider uppercase w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Final Year Project
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Hygieia
                </h3>

                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                  A microservice-based healthcare platform with{' '}
                  <span className="text-primary font-medium">AI-powered diagnostics</span>,{' '}
                  smart recommendations, and multi-role dashboards.
                </p>

                <p className="text-sm text-muted-foreground/70 mb-8 leading-relaxed">
                  10 microservices • NestJS + FastAPI • LangGraph AI Chatbot • PyTorch Diagnosis • Docker orchestration
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '10', label: 'Microservices' },
                    { value: '5', label: 'User Roles' },
                    { value: '4', label: 'AI Features' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button className="w-fit group/btn" size="lg" asChild>
                  <Link href="/hygieia">
                    <Heart className="w-5 h-5 mr-1 group-hover/btn:animate-pulse" />
                    Explore Hygieia
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Link>
                </Button>
              </div>

              {/* Right: Screenshot preview mosaic */}
              <div className="relative p-6 md:p-8 lg:p-10 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Main screenshot */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 group-hover:shadow-primary/10 transition-all duration-700 group-hover:scale-[1.02]">
                    <img
                      src="/fyp/screenshots/patient/patient dashboard.png"
                      alt="Hygieia Patient Dashboard"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating mini screenshots */}
                  <div className="absolute -top-4 -right-4 w-32 h-20 rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 group-hover:-translate-y-2 group-hover:translate-x-1 transition-all duration-700 hidden md:block">
                    <img
                      src="/fyp/screenshots/patient/ai diagnosis.png"
                      alt="AI Diagnosis"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="absolute -bottom-3 -left-4 w-36 h-22 rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 group-hover:translate-y-2 group-hover:-translate-x-1 transition-all duration-700 hidden md:block">
                    <img
                      src="/fyp/screenshots/patient/patient chatbot.png"
                      alt="AI Chatbot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute -bottom-6 right-8 flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HygieiaCTA
