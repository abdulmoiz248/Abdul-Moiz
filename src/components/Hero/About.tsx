"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Layers, Brain, Sparkles, Star, Zap, Rocket, Terminal } from "lucide-react"

// Enhanced Particle component
const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 4 + 1,
    color: [
      "rgba(99, 102, 241, 0.4)",
      "rgba(139, 92, 246, 0.4)",
      "rgba(59, 130, 246, 0.3)",
      "rgba(34, 197, 94, 0.3)",
      "rgba(251, 191, 36, 0.3)",
    ][Math.floor(Math.random() * 5)],
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }))

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {dimensions.width > 0 &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              x: particle.x,
              y: particle.y,
              background: particle.color,
              filter: "blur(1px)",
            }}
            animate={{
              x: [
                particle.x,
                particle.x + (Math.random() * 150 - 75),
                particle.x + (Math.random() * 300 - 150),
                particle.x,
              ],
              y: [
                particle.y,
                particle.y + (Math.random() * 150 - 75),
                particle.y + (Math.random() * 300 - 150),
                particle.y,
              ],
              opacity: [0.1, 0.6, 0.3, 0.1],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
    </div>
  )
}

// Enhanced Card component without 3D effect
const EnhancedCard = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full group z-0"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r z-0 from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Border gradient */}
      <motion.div
        className="absolute -inset-px rounded-3xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",
          opacity: isHovered ? 0.8 : 0.3,
        }}
        animate={{
          background: isHovered
            ? "linear-gradient(145deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5))"
            : "linear-gradient(145deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative">{children}</div>
    </motion.div>
  )
}

// TextReveal component
const TextReveal = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}

// Enhanced Skill icon component
const SkillIcon = ({ icon: Icon, label, color }: { icon: React.ElementType; label: string; color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <motion.div
        className={`p-3 rounded-2xl bg-gradient-to-br ${color} backdrop-blur-md border border-white/10 shadow-lg`}
        whileHover={{
          boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)",
          borderColor: "rgba(99, 102, 241, 0.6)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors" />
      </motion.div>
      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{label}</span>
    </motion.div>
  )
}

// Enhanced animated gradient background
const AnimatedGradient = () => {
  return (
    <>
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </>
  )
}

export default function About() {
  const [isPreloaded, setIsPreloaded] = useState(false)

  useEffect(() => {
    // Simulate preload
    setTimeout(() => setIsPreloaded(true), 500)
  }, [])

  return (
    <main className="min-h-screen z-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center overflow-hidden relative p-4 md:p-8">
      <Particles />
      <AnimatedGradient />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Loading overlay */}
      <AnimatePresence>
        {!isPreloaded && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1.0],
              },
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-12 h-12 text-blue-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="container max-w-4xl mx-auto z-10">
        <EnhancedCard>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isPreloaded ? 1 : 0,
              y: isPreloaded ? 0 : 50,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.645, 0.045, 0.355, 1.0],
            }}
            className="p-6 md:p-10 backdrop-blur-xl bg-gray-900/40 border border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-yellow-400/60" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-purple-400/60" />
              </motion.div>
            </div>

            {/* Section title with enhanced effect */}
            <motion.div
              className="relative mb-8 overflow-hidden flex items-center"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              <motion.div
                className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [1, 2, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.h2
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 px-4 whitespace-nowrap"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(99, 102, 241, 0)",
                    "0 0 20px rgba(99, 102, 241, 0.6)",
                    "0 0 10px rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <TextReveal text="ABDUL MOIZ" />
              </motion.h2>
              <motion.div
                className="h-px flex-grow bg-gradient-to-r from-blue-500 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [1, 2, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            {/* Main heading with better sizing */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              Full-Stack Developer
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                & AI Specialist
              </span>
              <motion.span
                className="inline-block ml-2 text-blue-400"
                animate={{
                  opacity: [1, 0, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Terminal className="w-6 h-6 md:w-8 md:h-8 inline" />
              </motion.span>
            </motion.h1>

            {/* Content with better sizing */}
            <div className="space-y-4 mb-8">
              {[
                "I'm Abdul Moiz — a full-stack developer and problem-solver crafting high-impact digital solutions.",
                "With expertise in Next.js, NestJS, and MongoDB, I transform ambitious ideas into polished products that deliver real value.",
                "My passion extends to AI model training, where I explore the cutting edge of what's possible in tech.",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="text-base md:text-lg text-white/90 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.9 + i * 0.2,
                    duration: 0.6,
                    ease: [0.645, 0.045, 0.355, 1.0],
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Enhanced Skills section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <Rocket className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm uppercase tracking-wider text-white/80 font-bold">EXPERTISE</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-6 justify-center md:justify-start"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                <SkillIcon icon={Code} label="Full-Stack" color="from-blue-500/20 to-blue-600/20" />
                <SkillIcon icon={Layers} label="Next.js" color="from-purple-500/20 to-purple-600/20" />
                <SkillIcon icon={Brain} label="AI/ML" color="from-green-500/20 to-green-600/20" />
              </motion.div>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
              className="flex items-center justify-center gap-4 pt-6 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/70 font-medium">Available for Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </EnhancedCard>
      </div>
    </main>
  )
}
