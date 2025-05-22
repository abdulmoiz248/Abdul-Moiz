"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import {  Code, Layers, Brain, Sparkles } from "lucide-react"
// Custom cursor component


// Particle component
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

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 5 + 1,
    color: [
      "rgba(123, 97, 255, 0.4)",
      "rgba(56, 189, 248, 0.4)",
      "rgba(253, 224, 71, 0.3)",
      "rgba(167, 139, 250, 0.4)",
    ][Math.floor(Math.random() * 4)],
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
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
                particle.x + (Math.random() * 100 - 50),
                particle.x + (Math.random() * 200 - 100),
                particle.x,
              ],
              y: [
                particle.y,
                particle.y + (Math.random() * 100 - 50),
                particle.y + (Math.random() * 200 - 100),
                particle.y,
              ],
              opacity: [0.2, 0.8, 0.4, 0.2],
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

// 3D card effect
const Card3D = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useTransform(mouseX, [-dimensions.width / 2, dimensions.width / 2], [10, -10])

  const rotateX = useTransform(mouseY, [-dimensions.height / 2, dimensions.height / 2], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    const x = e.clientX - rect.left - dimensions.width / 2
    const y = e.clientY - rect.top - dimensions.height / 2

    mouseX.set(x)
    mouseY.set(y)
  }

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateY: isHovered ? rotateY : 0,
        rotateX: isHovered ? rotateX : 0,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full"
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <motion.div
        className="absolute -inset-px rounded-2xl"
        style={{
          background: "linear-gradient(145deg, rgba(123, 97, 255, 0.3), rgba(56, 189, 248, 0.3))",
          backdropFilter: "blur(8px)",
          zIndex: -1,
          transformStyle: "preserve-3d",
          transform: "translateZ(-10px)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0.3,
        }}
      />
      <div>{children}</div>
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

// Skill icon component
const SkillIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center gap-2">
      <motion.div
        className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
        whileHover={{
          boxShadow: "0 0 15px rgba(123, 97, 255, 0.5)",
          borderColor: "rgba(123, 97, 255, 0.5)",
        }}
      >
        <Icon className="w-6 h-6 text-indigo-400" />
      </motion.div>
      <span className="text-xs font-medium text-white/70">{label}</span>
    </motion.div>
  )
}

// Animated gradient background
const AnimatedGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(30, 27, 75, 0.5) 0%, rgba(12, 10, 30, 0) 50%)",
      }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export default function About() {
  const [isPreloaded, setIsPreloaded] = useState(false)

  useEffect(() => {
    // Simulate preload
    setTimeout(() => setIsPreloaded(true), 500)
  }, [])

  return (
    <main className="min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden relative p-4 md:p-8">
     
      <Particles />
      <AnimatedGradient />

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
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-10 h-10 text-indigo-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="container max-w-3xl mx-auto z-10">
        <Card3D>
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
            className="p-8 md:p-10 backdrop-blur-lg border border-white/10 rounded-2xl"
          >
            {/* Section title with glitch effect */}
            <motion.div
              className="relative mb-8 overflow-hidden flex items-center"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              <motion.div
                className="h-px flex-grow bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.h2
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 px-4 whitespace-nowrap"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(123, 97, 255, 0)",
                    "0 0 12px rgba(123, 97, 255, 0.5)",
                    "0 0 8px rgba(123, 97, 255, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <TextReveal text="ABDUL MOIZ" />
              </motion.h2>
              <motion.div
                className="h-px flex-grow bg-gradient-to-r from-indigo-500 via-transparent to-transparent opacity-50"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              Full-Stack Developer
              <br />& AI Specialist
              <motion.span
                className="inline-block ml-1 text-indigo-400"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                _
              </motion.span>
            </motion.h1>

            {/* Content with staggered reveal */}
            <div className="space-y-4 mb-8">
              {[
                "I'm Abdul Moiz — a full-stack developer and problem-solver crafting high-impact digital solutions.",
                "With expertise in Next.js, NestJS, and MongoDB, I transform ambitious ideas into polished products that deliver real value.",
                "My passion extends to AI model training, where I explore the cutting edge of what's possible in tech.",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="text-lg text-white/80"
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

            {/* Skills */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.h3
                className="text-sm uppercase tracking-wider text-white/50 mb-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                EXPERTISE
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                <SkillIcon icon={Code} label="Full-Stack" />
                <SkillIcon icon={Layers} label="Next.js" />
                <SkillIcon icon={Brain} label="AI" />
              </motion.div>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
             
            </motion.div>
          </motion.div>
        </Card3D>
      </div>
    </main>
  )
}
