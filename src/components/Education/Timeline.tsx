'use client'

import { motion, useMotionValue } from 'framer-motion'
import React, { useState, useEffect } from 'react'

import TimelineItem from './TimelineItem'
import TimelineModal from './TimelineModal'
import { FuturisticBackground } from '../HeroBackground'

interface TimelineEvent {
  id: number
  year: number
  title: string
  description: string
  icon: string
  details?: string
  image?: string
}

const events: TimelineEvent[] = [
  {
    id: 1,
    year: 2010,
    title: 'Primary School Graduation',
    description: 'Completed primary education with honors',
    icon: 'GraduationCap',
    details: 'Graduated at the top of my class and received the "Outstanding Student" award.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 2,
    year: 2016,
    title: 'High School Diploma',
    description: 'Graduated from high school with distinction',
    icon: 'School',
    details: 'Valedictorian of my class. Participated in various extracurricular activities including debate club and science fair.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 3,
    year: 2020,
    title: 'Bachelor\'s Degree',
    description: 'Earned a Bachelor\'s degree in Computer Science',
    icon: 'Laptop',
    details: 'Graduated summa cum laude. Completed a thesis on "Artificial Intelligence in Healthcare".',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 4,
    year: 2022,
    title: 'Master\'s Degree',
    description: 'Completed Master\'s in Data Science',
    icon: 'Database',
    details: 'Specialized in machine learning and big data analytics. Published two research papers during my studies.',
    image: '/placeholder.svg?height=300&width=300'
  }
]

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
      <div className="bg-black text-white min-h-screen p-8 relative z-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Educational Journey</h1>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700" />
          <div className="space-y-24"> {/* Increased space between items to 24 */}
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, scale: 1.05 }}
                transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeInOut' }} // Added scaling and easing
              >
                <TimelineItem event={event} onSelect={() => setSelectedEvent(event)} />
              </motion.div>
            ))}
          </div>
        </div>
        {selectedEvent && (
          <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </div>
    </div>
  )
}
