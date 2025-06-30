"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ExperienceCard } from "./ExperienceCard"
import { Briefcase, Star, Zap, Code } from "lucide-react"

// Mock data for experience items
const allExperiences = [
  {
    id: 1,
    title: "IT Team Member",
    company: "IEEE RAS Society",
    period: "2022 - 2023",
    description:
      "A dedicated IT team member at RAS Society, ensuring seamless technology solutions and support for all event.",
    technologies: ["HTML", "CSS", "Event Management"],
  },
  {
    id: 2,
    title: "Co-founder",
    company: "Zero Limit Apparel",
    period: "2024 - 2025",
    description:
      "As a co-founder of Zero Limit Apparel, I contributed to the brand's strategic direction, website and product development,marketing, and overall growth",
    technologies: ["Next.js", "React", "MongoDB", "Start-up Leadership"],
  },
  {
    id: 3,
    title: "Private Tutor",
    company: "Free Lancing",
    period: "2024 - 2025",
    description:
      "Tutored a university student in core CS subjects like Distributed Computing, OS, and DSA—focused on concepts, assignments, projects, and boosting performance with hands-on examples.",
    technologies: ["Operating Systems", "Data Structures", "OOP", "Java"],
  },
]

export function ExperienceSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              staggerChildren: 0.2,
            },
          },
        }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Header Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Experience
            </motion.h2>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-purple-400" />
            </motion.div>
          </div>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            A journey through diverse roles and technologies, building expertise across multiple domains
          </motion.p>

          {/* Stats bar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center justify-center gap-8 mt-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">{allExperiences.length} Positions</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">
                {allExperiences.reduce((acc, exp) => acc + exp.technologies.length, 0)} Skills
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active Learning</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-start">
          {allExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  },
                },
              }}
              className="h-full"
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <span className="text-gray-400 text-sm font-medium">Continuously Growing</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
