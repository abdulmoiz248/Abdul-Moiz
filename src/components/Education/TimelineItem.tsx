import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, School, Laptop, Database } from 'lucide-react'

interface TimelineItemProps {
  event: {
    year: number
    title: string
    description: string
    icon: string
  }
  onSelect: () => void
}

const iconComponents = {
  GraduationCap,
  School,
  Laptop,
  Database,
}

export default function TimelineItem({ event, onSelect }: TimelineItemProps) {
  const IconComponent = iconComponents[event.icon as keyof typeof iconComponents]

  return (
    <motion.div
      className="flex items-center mb-8 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onSelect}
    >
      <div className="flex-1 text-right pr-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-gray-400">{event.description}</p>
      </div>
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 pl-4">
        <span className="text-2xl font-bold text-blue-500">{event.year}</span>
      </div>
    </motion.div>
  )
}

