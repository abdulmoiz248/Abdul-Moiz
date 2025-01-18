'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { FuturisticButton } from '@/components/Button/HeroButtons'
import {FuturisticBackground} from "@/components/HeroBackground"
import {HolographicSphere} from './HolographicSphere'
import TypingAnimation from './ui/typing-animation'

interface HeroProps {
  userName?: string;
}

const Hero: React.FC<HeroProps> = ({ userName = "VISITOR" }) => {
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
    <div 
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <HolographicSphere imageSrc={'/me.jpg'} />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold mb-4 mt-8  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {userName}
        </motion.h1>
      <TypingAnimation className='text-2xl text-black bg-gradient-to-r  from-blue-500 to-purple-500 p-2 rounded'>Driven by Vision, Powered by Innovation</TypingAnimation>
       
      </div>
    </div>
  )
}



export default Hero
