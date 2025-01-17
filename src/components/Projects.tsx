'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  imageUrl: string
  techStack: string[]
  githubUrl: string
  deployedUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "Intelligent task prioritization and scheduling",
    fullDescription: "An AI-driven task management application that uses machine learning algorithms to prioritize and schedule tasks based on user behavior, deadlines, and project importance. Features include natural language processing for task input, smart notifications, and performance analytics.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ai-task-manager",
    deployedUrl: "https://ai-task-manager.example.com"
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description: "Secure and transparent digital voting platform",
    fullDescription: "A decentralized voting system built on blockchain technology, ensuring transparency, security, and immutability of votes. The platform supports various types of elections, from small-scale organizational votes to large-scale national elections, with features like voter authentication, real-time result tracking, and audit trails.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    githubUrl: "https://github.com/yourusername/blockchain-voting",
  },
  {
    id: 3,
    title: "AR Interior Designer",
    description: "Augmented reality app for home decoration",
    fullDescription: "An augmented reality application that allows users to visualize furniture and decor in their space before purchasing. Users can browse a catalog of 3D models, place them in their room using their device's camera, and customize colors and materials in real-time. The app also provides measurements and suggests complementary items.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    techStack: ["Unity", "ARKit", "ARCore", "C#"],
    githubUrl: "https://github.com/yourusername/ar-interior-designer",
    deployedUrl: "https://ar-interior.example.com"
  },
  {
    id: 4,
    title: "Quantum Algorithm Simulator",
    description: "Educational tool for quantum computing",
    fullDescription: "A web-based quantum algorithm simulator designed for educational purposes. It allows users to construct quantum circuits, run simulations, and visualize results. The platform includes a library of common quantum algorithms, interactive tutorials, and a community forum for discussions and sharing custom algorithms.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    techStack: ["Python", "Qiskit", "React", "FastAPI"],
    githubUrl: "https://github.com/yourusername/quantum-simulator",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-extrabold text-white sm:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovative Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
        </div>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg"
          />
        </motion.div>
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.fullDescription}
        </motion.p>
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg font-semibold text-white mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="px-3 py-1 bg-indigo-600 text-white rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          {project.deployedUrl && (
            <motion.a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Live Demo
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

