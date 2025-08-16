"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Calendar, ChevronDown, Sparkles } from "lucide-react"
import clsx from "clsx"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  logo?: string
}

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const getGradientColors = () => {
    if (experience.company.toLowerCase().includes("ieee")) return "from-blue-500/20 to-cyan-500/20"
    if (experience.company.toLowerCase().includes("apparel")) return "from-purple-500/20 to-pink-500/20"
    if (experience.company.toLowerCase().includes("freelanc")) return "from-green-500/20 to-emerald-500/20"
    return "from-orange-500/20 to-red-500/20"
  }

  const getAccentColor = () => {
    if (experience.company.toLowerCase().includes("ieee")) return "blue"
    if (experience.company.toLowerCase().includes("apparel")) return "purple"
    if (experience.company.toLowerCase().includes("freelanc")) return "green"
    if (experience.company.toLowerCase().includes("bot")) return "red"
    if (experience.company.toLowerCase().includes("axtra")) return "yellow"
    return "orange"
  }

  const accentColor = getAccentColor()
  const gradientColors = getGradientColors()

  return (
    <motion.div
      className="group relative cursor-pointer h-full"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleExpand}
      layout
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientColors} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
      ></div>

      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className={`h-1 w-full bg-gradient-to-r ${gradientColors}`}></div>

        <motion.div className="p-6 flex-1 flex flex-col" layout>
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-md"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className={clsx("w-12 h-12 object-contain", experience.company.toLowerCase().includes("axtra") && "filter invert bg-black")}
                />
              ) : (
                <Building2 className="w-6 h-6 text-black" />
              )}
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                className={clsx(
                  "text-xl font-bold mb-2 transition-colors",
                  accentColor === "blue" && "text-blue-400 group-hover:text-blue-300",
                  accentColor === "purple" && "text-purple-400 group-hover:text-purple-300",
                  accentColor === "green" && "text-green-400 group-hover:text-green-300",
                  accentColor === "red" && "text-red-400 group-hover:text-red-300",
                  accentColor === "yellow" && "text-yellow-400 group-hover:text-yellow-300",
                  accentColor === "orange" && "text-orange-400 group-hover:text-orange-300"
                )}
                layout
              >
                {experience.title}
              </motion.h3>

              <div className="flex items-center gap-2 mb-2">
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

          <motion.div className="flex-1 mb-4" layout>
            <motion.p className="text-gray-300 leading-relaxed line-clamp-4" layout>
              {experience.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-300 transition-colors mt-auto"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium">{isExpanded ? "Show Less" : "View Skills"}</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden bg-gray-800/50 backdrop-blur-sm"
        >
          <motion.div className="p-6 border-t border-gray-700/50" layout>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles
                className={clsx(
                  "w-5 h-5",
                  accentColor === "blue" && "text-blue-400",
                  accentColor === "purple" && "text-purple-400",
                  accentColor === "green" && "text-green-400",
                  accentColor === "red" && "text-red-400",
                  accentColor === "yellow" && "text-yellow-400",
                  accentColor === "orange" && "text-orange-400"
                )}
              />
              <motion.h4
                className={clsx(
                  "font-bold",
                  accentColor === "blue" && "text-blue-400",
                  accentColor === "purple" && "text-purple-400",
                  accentColor === "green" && "text-green-400",
                  accentColor === "red" && "text-red-400",
                  accentColor === "yellow" && "text-yellow-400",
                  accentColor === "orange" && "text-orange-400"
                )}
                layout
              >
                Skills Acquired:
              </motion.h4>
            </div>

            <motion.div className="flex flex-wrap gap-3" layout>
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={clsx(
                    "text-sm font-medium px-3 py-1.5 rounded-full border backdrop-blur-sm",
                    accentColor === "blue" && "bg-blue-900/50 text-blue-200 border-blue-700/50",
                    accentColor === "purple" && "bg-purple-900/50 text-purple-200 border-purple-700/50",
                    accentColor === "green" && "bg-green-900/50 text-green-200 border-green-700/50",
                    accentColor === "red" && "bg-red-900/50 text-red-200 border-red-700/50",
                    accentColor === "yellow" && "bg-yellow-900/50 text-yellow-200 border-yellow-700/50",
                    accentColor === "orange" && "bg-orange-900/50 text-orange-200 border-orange-700/50"
                  )}
                  whileHover={{ scale: 1.05 }}
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
