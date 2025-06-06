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
    techStack: ["NextJs", "React", "TypeScript", "Gemini Api"],
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
    techStack: ["Next.js", "TypeScript", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Ai-Assistant-",
  },{
    id: 10,
    title: "Predator-Prey Simulation",
    description: "Parallel Computing Project",  
    "fullDescription": "Built an interactive, parallelized ecosystem simulation using Python (backend) and TypeScript (frontend). Integrated real-time visualization, PDF report generation with dynamic graphs, and AI-powered summary using Gemini API. The web interface includes a chatbot for simulation assistance. Developed as part of a university-level parallel computing project.",
    imageUrl: "/pdc.png",
    techStack: ["React", "TypeScript", "TailwindCSS","Next.js",'Fast Api','Multi Processing','Socket.io'],
    githubUrl: "https://github.com/abdulmoiz248/Predator-Prey-Simulation",
  },
  {
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
  ,{
    id: 7,
    title: "Cachelogics Landing Page",
    description: "A Hackathon project for Cachelogics",
    fullDescription: "Cachelogics Landing Page is a project I developed during a hackathon, showcasing my skills in creating visually appealing and functional web pages. The landing page is designed to provide information about Cachelogics, its services, and its mission. It features a modern design, responsive layout, and smooth navigation to enhance user experience.",
    imageUrl: "/cachelogics.png",
    techStack: ["React", "TypeScript", "TailwindCSS","Next.js"],
    githubUrl: "https://github.com/abdulmoiz248/cachelogics",
    deployedUrl: "https://cachelogics.vercel.app/"
  }
  ,{
    id: 8,
    title: "GPT Emailer Extension",
    description: "A Chrome Extension that generates and send emails using chatgpt website",  
   "fullDescription": "GPT Emailer is a Chrome Extension that helps you generate and send emails directly using ChatGPT. It integrates with Gmail to create smart, context-aware emails quickly and easily, saving you time and effort."
, imageUrl: "/gpt-email.png",
    techStack: ["React", "TypeScript", "TailwindCSS","Next.js",'Nodemailer'],
    githubUrl: "https://github.com/abdulmoiz248/Gpt-Emailer-Extension",
  }
  ,{
    id: 9,
    title: "Nexa Link",
    description: "A Chatting App",  
    "fullDescription": "Nexa Link is a Chatting App that allows users to connect and communicate with each other in real-time. It features a user-friendly interface, enabling seamless messaging, and group chats. The app is designed to enhance social interactions and foster connections among users.",
    imageUrl: "/nexalink.png",
    techStack: ["React", "TypeScript", "TailwindCSS","Next.js",'NestJs','Socket.io'],
    githubUrl: "https://github.com/abdulmoiz248/NexaLink-Frontend",
  }
   ,{
    id: 11,
    title: "PF-PUCon-25",
    description: "AI Hackathon",  
    "fullDescription": "Participated in the PF PUCon '25 AI Hackathon hosted at PUCIT, collaborating with Zain to tackle real-world ML problems under time pressure. In Round 1, we focused on rigorous data preprocessing—handling missing values, encoding categorical features, normalizing data, and visualizing distributions—achieving a median error of 0.55. For Round 2, we built and optimized machine learning models aimed at solving complex predictive tasks with a focus on accuracy and performance. This project reflects our hands-on skills in data wrangling, rapid model development, and applying ML techniques in high-stakes, time-sensitive environments.",
    imageUrl: "/pf.png",
    techStack: ['Pre-Processing','Feature Extraction','Deep Learning'],
    githubUrl: "https://github.com/abdulmoiz248/PF-PUCon-25",
  },
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
    <section id='work' className="bg-black py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
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

