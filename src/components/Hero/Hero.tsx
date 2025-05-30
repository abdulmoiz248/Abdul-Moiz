'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import {FuturisticBackground} from "@/components/Hero/HeroBackground"
import {HolographicSphere} from './HolographicSphere'
import TypingAnimation from '../ui/typing-animation'


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
  className="relative pt-10 w-full min-h-screen bg-black overflow-hidden"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
  <div className="absolute inset-0 py-32 flex flex-col items-center justify-center text-white z-9">
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <HolographicSphere imageSrc={'/me-2.jpg'} />
    </motion.div>
    <motion.h1
      className="text-6xl font-bold mb-4 mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {userName}
    </motion.h1>
    <TypingAnimation className='text-[15px] md:text-2xl text-white p-2 rounded'>
      I Don’t Just Code Projects — I Engineer Possibilities
    </TypingAnimation>
  </div>
</div>

  )
}



export default Hero
