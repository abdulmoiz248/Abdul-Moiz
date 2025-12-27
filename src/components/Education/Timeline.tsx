'use client'

import { motion, useMotionValue } from 'framer-motion'
import React, { useState, useEffect } from 'react'

import TimelineItem from './TimelineItem'
import { FuturisticBackground } from '../Hero/HeroBackground'
import { events } from '@/data/education'

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
       <motion.h2
              className="text-5xl mb-8 pb-2 md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                Educational Journey
          </motion.h2>  
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
