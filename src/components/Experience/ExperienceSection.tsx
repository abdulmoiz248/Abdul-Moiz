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
    logo:'data:image/jpeg;base64,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',
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
    logo:'https://zero-limit.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75'
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
{
  id: 4,
  title: "AI Intern",
  company: "Blunder Bot Technologies",
  period: "June, 2025 - August, 2025",
  description: "Developed TaskWise, an AI-powered project management app with RAG, automated task division, team-lead selection, AI-driven reports, and sentiment analysis.",
  technologies: ["RAG", "NLP", "AI Reports", "Sentiment Analysis", "Python"],
  logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEj7BMECrAt8g/img-crop_100/img-crop_100/0/1719189330023?e=1764806400&v=beta&t=zlttNXl4MppXgxyutBK8MzuvWoMxPyq2tUzGF9r34Ho"
},
{
  id: 5,
  title: "Associate Software Engineer Intern",
  company: "Axtra Studios",
  period: "July, 2025 - November, 2025",
  description: "Worked on scalable software engineering projects applying AI and core CS concepts. Hands-on experience with JavaScript, LLMs, frontend, and backend development.",
  technologies: ["JavaScript", "LLM", "Frontend", "Backend"],
  logo: "https://www.axtrastudios.com/_next/static/media/axtra-studios-logo.80e67abb.svg"
}


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
              className="text-5xl md:text-6xl font-bold pb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text"
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
