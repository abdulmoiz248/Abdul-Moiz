'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

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

  return (
    <motion.div
    className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-gray-800 flex flex-col justify-between min-h-full"
    whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0, 0, 255, 0.3)' }}
    whileTap={{ scale: 0.98 }}
    onClick={toggleExpand}
    layout
  >
    <motion.div className="p-6 flex-1" layout>
      <motion.h3 className="text-xl font-semibold mb-2 text-blue-400" layout>
        {experience.title}
      </motion.h3>
      <motion.p className="text-gray-400 mb-2" layout>{experience.company}</motion.p>
      <motion.p className="text-sm text-gray-500 mb-4" layout>{experience.period}</motion.p>
      <motion.p className="text-gray-300" layout>{experience.description}</motion.p>
    </motion.div>
    <motion.div
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-gray-800"
    >
      <motion.div className="p-6" layout>
        <motion.h4 className="font-semibold mb-2 text-purple-400" layout>Skills Accuqired:</motion.h4>
        <motion.div className="flex flex-wrap gap-2 mb-4" layout>
          {experience.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="bg-blue-900 text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
  
  )
}

