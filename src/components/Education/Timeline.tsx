'use client'

import { motion, useMotionValue } from 'framer-motion'
import React, { useState, useEffect } from 'react'

import TimelineItem from './TimelineItem'
import { FuturisticBackground } from '../Hero/HeroBackground'

export interface TimelineEvent {
  id: number
  year: number
  title: string
  description: string
  icon: string
  details?: string
  image?: string
  link:string
}

const events: TimelineEvent[] = [
  {
    id: 1,
    year: 2020,
    title: 'Divisional Public School',
    description: 'Matriculation',
    icon: 'School',
    details: 'Marks: 1015/1100 Percentage:92%',
    image: '/logo.jpg',
    link:'https://www.dpslahore.edu.pk/'
  },
  {
    id: 2,
    year: 2020,
    title: 'Naeem Shah Acadmey',
    description: 'Matriculation Preperation',
    icon: 'Clipboard',
    details: 'Prepared  for Matriculation Exams',
    image: '/nsa.png',
    link:"https://www.facebook.com/NSAcademy"
  },
  {
    id: 3,
    year: 2022,
    title: 'PGC',
    description: 'Intermediate',
    icon: 'GraduationCap',
    details: 'Marks:928/1100 Percentage:85%',
    image: '/pgc.jpg',
    link:"https://pgc.edu/"
  },
  {
    id: 4,
    year: 2022,
    title: 'STEP',
    description: 'Entry Test Preperation',
    icon: 'Book',
    details: 'Preperation for Entry Test',
    image: '/step.png',
    link:"https://step.pgc.edu/"
  },
  {
    id: 5,
    year: 2026,
    title: 'COMSATS',
    description: 'Bachelor\'s degree in Computer Science',
    icon: 'Laptop',
    details: 'Current CGPA: 3.49',
    image: '/cui.jpg',
    link:"https://lahore.comsats.edu.pk"
  }
]

export default function Timeline({setSelectedEvent}: {setSelectedEvent: (event: TimelineEvent) => void}) {

  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setIsHovering(false);
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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">Educational Journey</h1>
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
       
      </div>
    </div>
  )
}
