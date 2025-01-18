
'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import { Project } from './Projects'
export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    return (
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        <div className="relative h-60">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out"
          />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-lg font-semibold">Click for details</p>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }
  
 