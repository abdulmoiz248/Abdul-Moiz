'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
export interface Project {
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
    title: "Zero Limit Apparel",
    description: "E-Commerce Platform",
    fullDescription: "Zero Limit Apparel is an e-commerce platform project I developed, which involves building a seamless online shopping experience. The website is deployed using Next.js and MongoDB, providing users with an intuitive interface for browsing and purchasing products. Since deployment, the site has attracted over 1,500 visitors, demonstrating its functionality and reach",
    imageUrl: "/dark.jpeg",
    techStack: ["React", "TypeScript", "TailwindCSS","Next.js", "MongoDB"],
    githubUrl: "https://github.com/abdulmoiz248/Zero-Limit",
    deployedUrl: "https://zero-limit.vercel.app"
  },
  {
    id: 2,
    title: "Quiz App",
    description: "Quiz App that uses RAG to answer questions by extracting information from uploaded PDFs.",
    fullDescription: "The Quiz App is a collaborative project that utilizes Retrieval-Augmented Generation (RAG) to provide AI-generated answers to questions based on the content of PDFs uploaded by the user. Users can upload a PDF containing relevant information, ask specific questions, and receive accurate responses derived from the document's content. By combining document retrieval with AI generation, the app enhances the user's ability to quickly find and understand key information from uploaded PDFs in a seamless and interactive manner.",
    imageUrl: "/quiz.png",
    techStack: ["Next.js", "Python", "FastAPI", "React"],
    githubUrl: "https://github.com/abdulmoiz248/Quiz-App",
  },{
    id: 3,
    title: "AI Tic Tac Toe",
    description: "AI-powered Tic Tac Toe game using Gemini API",
    fullDescription: "AI-powered Tic Tac Toe Game using Gemini API is an interactive web-based game where users can play Tic Tac Toe against an AI opponent. Powered by the Gemini API, the AI leverages advanced algorithms to challenge players with dynamic difficulty levels. The project showcases real-time gameplay, with an intuitive interface and intelligent move predictions, offering a fun and engaging experience. Deployed on a web platform, the game demonstrates the integration of AI technologies to enhance user interaction and gameplay.",
    imageUrl: "/tic.png",
    techStack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    githubUrl: "https://github.com/abdulmoiz248/Tick-Tac-Toe?tab=readme-ov-file#tic-tac-toe-game-with-gemini-api",
  },
  {
    id: 4,
    title: "Twiiter Clone",
    description: "DSA Semester Project implementing various data structures",
    fullDescription: "The Twitter-Clone project is a demonstration of Data Structures and Algorithms (DSA) skills, showcasing the implementation of various data structures in a simplified social media context. In this project, user IDs are created and managed using a linked list, tweets are displayed using a queue, and stacks are employed for handling notifications. Additionally, file handling is utilized for efficient data storage and retrieval.",
    imageUrl: "/twiiter.png",
    techStack: ["Java", "JavaFx"],
    githubUrl: "https://github.com/abdulmoiz248/Twitter-clone?tab=readme-ov-file#twitter-clone-project"
  },
  {
    id: 5,
    title: "FOOBER",
    description: "Your Food, Your Way, Your Ride!!",
    fullDescription: "Welcome to FOOBER, a revolutionary startup concept that redefines the dining experience by seamlessly integrating food selection, ordering, and transportation. FOOBER provides a unique and convenient solution for food enthusiasts who want to enjoy their favorite meals without the hassle of driving or waiting in queues. With FOOBER, you have the freedom to choose your food, place an order, and have a dedicated rider pick you up, transporting you directly to the restaurant where your delicious meal awaits.",
    imageUrl: "/Foober.jpeg",
    techStack: ["Java", "Javafx", "DSA", "OOP"],
    githubUrl: "https://github.com/abdulmoiz248/FOOBER",
  }
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
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text sm:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            Projects
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

