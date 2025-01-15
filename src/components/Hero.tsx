'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CreativeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="pl-[25%] relative h-screen overflow-hidden bg-black text-white">
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
        {/* Animated name */}
        <h1 className="text-6xl font-bold mb-4">
  {'Abdul Moiz'}
</h1>


        {/* Tagline with typing effect */}
    
<p className="text-2xl mb-8 h-8 overflow-hidden ">
  Web Developer & Digital Artist
</p>


        {/* Interactive image */}
        <div 
          className=" relative w-64 h-64 rounded-full overflow-hidden cursor-pointer mb-8 sm:mb-0 sm:absolute sm:left-8 sm:top-1/4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Image
            src="/me.jpg"
            alt="Zoe Quantum"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-lg font-semibold">Explore My World</span>
          </div>
        </div>
      </div>

      {/* Particle effect */}
      <Particles />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-typing {
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: white; }
        }

        h1 span {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}
