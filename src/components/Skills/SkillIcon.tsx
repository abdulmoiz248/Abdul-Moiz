'use client'

import { useState, useEffect } from 'react'
import {  useMotionValue } from 'framer-motion'
import { IconCloud } from "@/components/ui/icon-cloud";
import { FuturisticBackground } from '../Hero/HeroBackground';
import {motion } from 'framer-motion'

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "python",
  "cplusplus",
  "redux",
  "mongodb",
  "sql",
  "mssql",
  "intellijidea",
  "nestjs",
  "tailwindcss",
  "socketdotio",
  "prisma",
  "postgresql",
  "docker",
  "openai",
  "postman",
  "numpy",
  "pandas",
  "matplotlib",
  "scikitlearn",
  "opencv",
  "notion",
  "canva",
];



export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsHovering(false);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
     
      <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            > Skills
              </motion.h2> 
     
      <div className="relative flex size-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-gray-800 p-6 shadow-xl hover:bg-gray-700 transition ease-in-out duration-300">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
