'use client'
import {   useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import ProjectCard from './ProjectCard'
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
    id: 6,
    title: "Github-Agent",
    description: "AI Agents that generate and push readme files for my repos",
    fullDescription: "An intelligent AI-powered agent designed to analyze GitHub repositories and streamline project management. It automatically detects the tech stack and core functionality of any project, generates a detailed README.md file, and publishes it on GitHub. The agent simplifies documentation, ensures consistency across projects, and saves developers significant time.",
     imageUrl: "/agent.png",
    techStack: ["NestJs", "React", "TypeScript", "Gemini Api"],
    githubUrl: "https://github.com/abdulmoiz248/Github-Agent",
  },
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
    title: "Personal Assistant",
    description: "Your Ultimate Discord Personal Assistant – Automate Tasks, Manage Finances, and Boost Productivity",
    fullDescription: `A smart Discord-based assistant designed to streamline productivity and daily management. It automates email handling, tracks income and expenses, and generates monthly income statements. The assistant also sends daily LeetCode challenges to keep coding skills sharp and provides task reminders for events, deadlines, and birthdays.

Key Features includes Email Management: Sends, receives, and summarizes emails,
Finance Tracker: Monitors income and expenses; auto-generates monthly income statements.
,Daily Coding Practice: Sends LeetCode challenges and tracks your progress.
,Task & Event Reminders: Keeps you organized with timely alerts.
Perfect for developers and students seeking to simplify their workflow and stay consistent with learning and financial management.`,
    imageUrl: "/assistant.png",
    techStack: ["Nexs.js", "TypeScript", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Ai-Assistant-",
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

export default function Projects({ setSelectedProject }:{setSelectedProject: (project: Project) => void}) {

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
       
      </AnimatePresence>
    </section>
  )
}

