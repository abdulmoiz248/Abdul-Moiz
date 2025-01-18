'use client'

import { useState, useEffect } from 'react'
import {  useMotionValue } from 'framer-motion'
import { IconCloud } from "@/components/ui/icon-cloud";
import { FuturisticBackground } from '../HeroBackground';

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
  "python3",
  "cplusplus",
  "redux",
  "mongodb",
  "sql",
  "mssql",
  "intellij",
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
      <h1 className="text-4xl z-10 font-semibold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        Skills
      </h1>
      <div className="relative flex size-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-gray-800 p-6 shadow-xl hover:bg-gray-700 transition ease-in-out duration-300">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
