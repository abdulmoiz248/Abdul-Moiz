"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface HolographicSphereProps {
  imageSrc: string
  className?: string
}

export const HolographicSphere: React.FC<HolographicSphereProps> = ({ imageSrc, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative z-0 pt-96 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto ${className}`}
    >
      {/* Outer Rotating Ring */}
      <motion.div
        className="absolute inset-0 rounded-full p-[3px]"
        style={{
          background: "conic-gradient(from 0deg, #00f5ff, #8b5cf6, #ec4899, #f59e0b, #10b981, #00f5ff)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full bg-black" />
      </motion.div>

      {/* Pulsing Glow Ring */}
      <motion.div
        className="absolute inset-2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(236,72,153,0.3) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Inner Energy Ring */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(0,245,255,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
          filter: "blur(1px)",
        }}
        animate={{
          rotate: -360,
          scale: isHovered ? [1, 1.15, 1] : [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      />

      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `hsl(${180 + i * 45}, 70%, 60%)`,
            top: "50%",
            left: "50%",
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 80],
            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 80],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Profile Image Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {/* Image Aura */}
          <motion.div
            className="absolute inset-0 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(0,245,255,0.4) 50%, transparent 80%)",
              filter: "blur(12px)",
            }}
            animate={{
              opacity: isHovered ? [0.6, 1, 0.6] : [0.3, 0.6, 0.3],
              scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Main Profile Image */}
          <motion.img
            src={imageSrc}
            alt="Profile Picture"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-2 border-purple-400/40 shadow-2xl relative z-10"
            style={{
              filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
            }}
            animate={{
              boxShadow: isHovered
                ? [
                    "0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(0,245,255,0.4)",
                    "0 0 50px rgba(139,92,246,0.8), 0 0 80px rgba(0,245,255,0.6)",
                    "0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(0,245,255,0.4)",
                  ]
                : [
                    "0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(0,245,255,0.2)",
                    "0 0 30px rgba(139,92,246,0.6), 0 0 50px rgba(0,245,255,0.3)",
                    "0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(0,245,255,0.2)",
                  ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Holographic Scan Line */}
          <motion.div
            className="absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full pointer-events-none overflow-hidden"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.3) 50%, transparent 100%)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 10%, transparent 20%)",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Corner Indicators */}
      {[
        { top: "15%", left: "15%", rotate: 0 },
        { top: "15%", right: "15%", rotate: 90 },
        { bottom: "15%", right: "15%", rotate: 180 },
        { bottom: "15%", left: "15%", rotate: 270 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border-l-2 border-t-2 border-cyan-400/60"
          style={{
            ...pos,
            transform: `rotate(${pos.rotate}deg)`,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Status Indicator */}
      <motion.div
        className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full border-2 border-green-300 shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: ["0 0 10px rgba(34,197,94,0.5)", "0 0 20px rgba(34,197,94,0.8)", "0 0 10px rgba(34,197,94,0.5)"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
