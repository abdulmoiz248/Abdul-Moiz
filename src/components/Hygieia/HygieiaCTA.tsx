'use client'

import { ArrowRight, Heart, Activity, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const HygieiaCTA = () => {
  // Spotlight effect state
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // 3D Parallax effect states for screenshots
  const deckRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 20 }

  // Rotation values for the screenshot deck
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  // Translation values for individual screenshot layers to create depth (parallax)
  // Layer 0: Main Screen
  const l0X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig)
  const l0Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig)

  // Layer 1: Top Right Screen (AI Diagnosis)
  const l1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [18, -18]), springConfig)
  const l1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig)

  // Layer 2: Bottom Left Screen (AI Chatbot)
  const l2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-28, 28]), springConfig)
  const l2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-28, 28]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleDeckMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!deckRef.current) return
    const rect = deckRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (event.clientX - rect.left - width / 2) / width
    const y = (event.clientY - rect.top - height / 2) / height
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleDeckMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="py-28 px-4 relative overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Ambient Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(142 76% 45% / 0.08) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(180 60% 40% / 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-xl rounded-[32px] border border-white/[0.06] overflow-hidden hover:border-emerald-500/20 transition-all duration-500 shadow-2xl shadow-black/50"
          style={{
            background: isHovered
              ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 40%), linear-gradient(to bottom right, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))`
              : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.005))',
          }}
        >
          {/* Top Decorative Neon Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
              {/* Animated FYP Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 tracking-wider uppercase w-fit shadow-lg shadow-emerald-950/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Final Year Project 2022-26
              </div>

              {/* Title with Gradient Text */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
                Hygieia
              </h3>

              {/* Short tagline */}
              <p className="text-lg md:text-xl text-neutral-300 font-medium mb-3 leading-relaxed">
                Decoupled microservices with{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text font-semibold">
                  AI-driven diagnostics
                </span>{' '}
                and multi-agent consultation workflows.
              </p>

              {/* Extended Description */}
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                Hygieia coordinates Python and Node.js microservices to provide early automated health screenings, Fitbit integration, secure EHR medical record storage, and clinical booking systems.
              </p>

              {/* Tech Stack Matrix Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { name: 'FastAPI', color: 'border-blue-500/20 text-blue-400 bg-blue-500/5' },
                  { name: 'NestJS', color: 'border-red-500/20 text-red-400 bg-red-500/5' },
                  { name: 'LangGraph', color: 'border-purple-500/20 text-purple-400 bg-purple-500/5' },
                  { name: 'PyTorch', color: 'border-orange-500/20 text-orange-400 bg-orange-500/5' },
                  { name: 'Docker', color: 'border-sky-500/20 text-sky-400 bg-sky-500/5' },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 rounded-lg text-xs font-mono border ${tech.color} shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/20`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Interactive Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '10', label: 'Microservices', desc: 'Decoupled API architecture' },
                  { value: '5', label: 'User Roles', desc: 'Secure RBAC interfaces' },
                  { value: '4', label: 'AI Features', desc: 'Inference & agent chatbot' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group/stat relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300 text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative z-10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent group-hover/stat:from-emerald-400 group-hover/stat:to-teal-300 transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-neutral-300 mt-1">{stat.label}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5 leading-snug">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explanatory CTA Button */}
              <Button
                className="w-fit group/btn px-6 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95"
                asChild
              >
                <Link href="/hygieia" className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-black group-hover/btn:scale-110 transition-transform duration-300" />
                  <span>Explore Hygieia Platform</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Right Screenshots Column: 3D Parallax Stack */}
            <div className="lg:col-span-5 flex items-center justify-center p-4">
              <div
                ref={deckRef}
                onMouseMove={handleDeckMouseMove}
                onMouseLeave={handleDeckMouseLeave}
                className="relative w-full max-w-[420px] aspect-[16/11] perspective-1000 cursor-pointer select-none"
              >
                {/* Floating micro indicators inside deck wrapper */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-10 -left-6 z-30 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>PyTorch Classifier</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-6 -right-10 z-30 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-1.5 text-teal-400 text-[10px] font-semibold"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>LangGraph Agent</span>
                </motion.div>

                {/* Layer 0: Main Screen Container */}
                <motion.div
                  style={{
                    rotateX: rotX,
                    rotateY: rotY,
                    x: l0X,
                    y: l0Y,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/5"
                >
                  <img
                    src="/fyp/screenshots/patient/patient dashboard.png"
                    alt="Hygieia Patient Dashboard"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </motion.div>

                {/* Layer 1: Top Right Screen (AI Diagnosis) */}
                <motion.div
                  style={{
                    x: l1X,
                    y: l1Y,
                    z: 30, // 3D depth shift
                  }}
                  className="absolute -top-6 -right-6 w-[140px] aspect-[16/10] rounded-xl overflow-hidden border border-white/15 shadow-2xl hidden sm:block  group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300"
                >
                  <img
                    src="/fyp/screenshots/logo.png"
                    alt="AI Diagnosis"
                    className="w-full h-full object-contain object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>

                {/* Layer 2: Bottom Left Screen (AI Chatbot) */}
                <motion.div
                  style={{
                    x: l2X,
                    y: l2Y,
                    z: 60, // Deeper 3D depth shift
                  }}
                  className="bg-white absolute -bottom-6  -left-8 w-[160px] aspect-[16/10] rounded-xl overflow-hidden border bordc objer-white/15 shadow-2xl hidden sm:block  group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-300"
                >
                  <img
                    src="/education/cui.png"
                    alt="AI Chatbot"
                    className="w-full h-full object-contain object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HygieiaCTA

