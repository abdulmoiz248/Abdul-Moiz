"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Calendar, ChevronDown, Sparkles, Code, Users, GraduationCap } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  // Get icon based on company/role type
  const getIcon = () => {
    if (experience.company.toLowerCase().includes("ieee") || experience.company.toLowerCase().includes("society")) {
      return <Users className="w-6 h-6" />
    }
    if (experience.company.toLowerCase().includes("apparel") || experience.title.toLowerCase().includes("founder")) {
      return <Building2 className="w-6 h-6" />
    }
    if (experience.company.toLowerCase().includes("freelanc") || experience.title.toLowerCase().includes("tutor")) {
      return <GraduationCap className="w-6 h-6" />
    }
    return <Code className="w-6 h-6" />
  }

  const getGradientColors = () => {
    if (experience.company.toLowerCase().includes("ieee")) {
      return "from-blue-500/20 to-cyan-500/20"
    }
    if (experience.company.toLowerCase().includes("apparel")) {
      return "from-purple-500/20 to-pink-500/20"
    }
    if (experience.company.toLowerCase().includes("freelanc")) {
      return "from-green-500/20 to-emerald-500/20"
    }
    return "from-orange-500/20 to-red-500/20"
  }

  const getAccentColor = () => {
    if (experience.company.toLowerCase().includes("ieee")) {
      return "blue"
    }
    if (experience.company.toLowerCase().includes("apparel")) {
      return "purple"
    }
    if (experience.company.toLowerCase().includes("freelanc")) {
      return "green"
    }
    return "orange"
  }

  const accentColor = getAccentColor()

  return (
    <motion.div
      className="group relative cursor-pointer h-full"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleExpand}
      layout
    >
      {/* Glowing background effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${getGradientColors()} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
      ></div>

      {/* Main card */}
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Top gradient line */}
        <div className={`h-1 bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600`}></div>

        <motion.div className="p-6 flex-1 flex flex-col" layout>
          {/* Header with icon */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className={`p-3 bg-${accentColor}-500/20 rounded-xl border border-${accentColor}-500/30 flex-shrink-0`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`text-${accentColor}-400`}>{getIcon()}</div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                className={`text-xl font-bold mb-2 text-${accentColor}-400 group-hover:text-${accentColor}-300 transition-colors`}
                layout
              >
                {experience.title}
              </motion.h3>

              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <motion.p className="text-gray-300 font-medium" layout>
                  {experience.company}
                </motion.p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-gray-500" />
                <motion.p className="text-sm text-gray-400" layout>
                  {experience.period}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Description with consistent height */}
          <motion.div className="flex-1 mb-4" layout>
            <motion.p className="text-gray-300 leading-relaxed line-clamp-4" layout>
              {experience.description}
            </motion.p>
          </motion.div>

          {/* Expand indicator - pushed to bottom */}
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-300 transition-colors mt-auto"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium">{isExpanded ? "Show Less" : "View Skills"}</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Expandable section */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden bg-gray-800/50 backdrop-blur-sm"
        >
          <motion.div className="p-6 border-t border-gray-700/50" layout>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className={`w-5 h-5 text-${accentColor}-400`} />
              <motion.h4 className={`font-bold text-${accentColor}-400`} layout>
                Skills Acquired:
              </motion.h4>
            </div>

            <motion.div className="flex flex-wrap gap-3" layout>
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`bg-${accentColor}-900/50 text-${accentColor}-200 text-sm font-medium px-3 py-1.5 rounded-full border border-${accentColor}-700/50 backdrop-blur-sm`}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `rgb(${accentColor === "blue" ? "59 130 246" : accentColor === "purple" ? "147 51 234" : accentColor === "green" ? "34 197 94" : "249 115 22"} / 0.2)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
