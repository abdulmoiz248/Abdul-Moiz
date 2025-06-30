"use client"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { useState, useMemo } from "react"
import { Search, Filter, SortAsc } from "lucide-react"
export interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  imageUrl: string
  techStack: string[]
  githubUrl: string
  deployedUrl?: string
  category: "ml" | "web" | "dsa" | "db"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Github-Agent",
    description: "AI Agents that generate and push readme files for my repos",
    fullDescription:
      "An intelligent AI-powered agent designed to analyze GitHub repositories and streamline project management. It automatically detects the tech stack and core functionality of any project, generates a detailed README.md file, and publishes it on GitHub. The agent simplifies documentation, ensures consistency across projects, and saves developers significant time.",
    imageUrl: "/agent.png",
    techStack: ["NextJs", "React", "TypeScript", "Gemini Api"],
    githubUrl: "https://github.com/abdulmoiz248/Github-Agent",
    category: "web",
  },
  {
    id: 2,
    title: "Zero Limit Apparel",
    description: "E-Commerce Platform",
    fullDescription:
      "Zero Limit Apparel is an e-commerce platform project I developed, which involves building a seamless online shopping experience. The website is deployed using Next.js and MongoDB, providing users with an intuitive interface for browsing and purchasing products. Since deployment, the site has attracted over 1,500 visitors, demonstrating its functionality and reach",
    imageUrl: "/dark.jpeg",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "MongoDB"],
    githubUrl: "https://github.com/abdulmoiz248/Zero-Limit",
    deployedUrl: "https://zero-limit.vercel.app",
    category: "web",
  },
  {
    id: 3,
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
    category: "web",
  },
  {
    id: 4,
    title: "Predator-Prey Simulation",
    description: "Parallel Computing Project",
    fullDescription:
      "Built an interactive, parallelized ecosystem simulation using Python (backend) and TypeScript (frontend). Integrated real-time visualization, PDF report generation with dynamic graphs, and AI-powered summary using Gemini API. The web interface includes a chatbot for simulation assistance. Developed as part of a university-level parallel computing project.",
    imageUrl: "/pdc.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Fast Api", "Multi Processing", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/Predator-Prey-Simulation",
    category: "web",
  },

  {
    id: 5,
    title: "LeetCode Solutions",
    description: "Solution of all my leetcode attempted questions",
    fullDescription:
      "LeetCode Solutions is a curated collection of my attempted problems on LeetCode, showcasing efficient solutions in Java, JavaScript, and Python. It reflects my approach to solving algorithmic challenges, improving coding skills, and preparing for technical interviews.",
    imageUrl: "/leetcode.jpeg",
    techStack: ["Java", "JavaScript", "Python", 'DSA'],
    githubUrl: "https://github.com/abdulmoiz248/LeetCode-Attempts",
    category: "dsa",
  },
  {
    id: 6,
    title: "Docgent",
    description: "Smart document generator for assignments, reports, and invoices",
    fullDescription:
      "Docgent is an AI-powered document generation assistant built to create professional Word documents like assignments, reports, and invoices. Users can upload images, provide inputs, and get structured outlines through an integrated chatbot powered by Grok and Gemini APIs. The chatbot helps brainstorm, refine, and edit content, while the user verifies the outline before final generation. Docgent streamlines the entire documentation process—fully customizable, collaborative, and intelligent.",
    imageUrl: "/docgent.png",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Grok"],
    githubUrl: "https://github.com/abdulmoiz248/Docgent",
    category: "web",
  },
  {
    id: 7,
    title: "AI Tic Tac Toe",
    description: "AI-powered Tic Tac Toe game using Gemini API",
    fullDescription:
      "AI-powered Tic Tac Toe Game using Gemini API is an interactive web-based game where users can play Tic Tac Toe against an AI opponent. Powered by the Gemini API, the AI leverages advanced algorithms to challenge players with dynamic difficulty levels. The project showcases real-time gameplay, with an intuitive interface and intelligent move predictions, offering a fun and engaging experience. Deployed on a web platform, the game demonstrates the integration of AI technologies to enhance user interaction and gameplay.",
    imageUrl: "/tic.png",
    techStack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    githubUrl: "https://github.com/abdulmoiz248/Tick-Tac-Toe?tab=readme-ov-file#tic-tac-toe-game-with-gemini-api",
    category: "web",
  },
  {
    id: 8,
    title: "Twiiter Clone",
    description: "DSA Semester Project implementing various data structures",
    fullDescription:
      "The Twitter-Clone project is a demonstration of Data Structures and Algorithms (DSA) skills, showcasing the implementation of various data structures in a simplified social media context. In this project, user IDs are created and managed using a linked list, tweets are displayed using a queue, and stacks are employed for handling notifications. Additionally, file handling is utilized for efficient data storage and retrieval.",
    imageUrl: "/twiiter.png",
    techStack: ["Java", "JavaFx"],
    githubUrl: "https://github.com/abdulmoiz248/Twitter-clone?tab=readme-ov-file#twitter-clone-project",
    category: "dsa",
  },

  {
    id: 9,
    title: "FOOBER",
    description: "Your Food, Your Way, Your Ride!!",
    fullDescription:
      "Welcome to FOOBER, a revolutionary startup concept that redefines the dining experience by seamlessly integrating food selection, ordering, and transportation. FOOBER provides a unique and convenient solution for food enthusiasts who want to enjoy their favorite meals without the hassle of driving or waiting in queues. With FOOBER, you have the freedom to choose your food, place an order, and have a dedicated rider pick you up, transporting you directly to the restaurant where your delicious meal awaits.",
    imageUrl: "/Foober.jpeg",
    techStack: ["Java", "Javafx", "DSA", "OOP"],
    githubUrl: "https://github.com/abdulmoiz248/FOOBER",
    category: "web",
  },
  {
    id: 10,
    title: "GPT Emailer Extension",
    description: "A Chrome Extension that generates and send emails using chatgpt website",
    fullDescription:
      "GPT Emailer is a Chrome Extension that helps you generate and send emails directly using ChatGPT. It integrates with Gmail to create smart, context-aware emails quickly and easily, saving you time and effort.",
    imageUrl: "/gpt-email.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Gpt-Emailer-Extension",
    category: "web",
  },
  {
    id: 11,
    title: "Nexa Link",
    description: "A Chatting App",
    fullDescription:
      "Nexa Link is a Chatting App that allows users to connect and communicate with each other in real-time. It features a user-friendly interface, enabling seamless messaging, and group chats. The app is designed to enhance social interactions and foster connections among users.",
    imageUrl: "/nexalink.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "NestJs", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/NexaLink-Frontend",
    category: "web",
  },
  {
    id: 12,
    title: "Finance Flow Pro",
    description: "A vibe coded full-stack personal finance app with dashboards, invoices & goal tracking",
    fullDescription:
      "Finance Flow Pro is a full-stack, vibe-coded personal finance app that evolved through 29 versions—driven purely by vision and vibes ✨. Originally a Vercel (v0.dev) test, it became a daily-use powerhouse that tracks transactions, auto-calculates income/expenses/net savings, visualizes data with sleek dashboards, and manages investments. It includes monthly summaries (1, 6, 12 months), saving goal tracking, invoice generation and email sending, and even lets you instantly add invoice values to your financial logs. With dark/light modes for every mood, this one’s built for me—but maybe perfect for you too.",
    imageUrl: "/finance.png",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel AI SDK", "MongoDB",],
    githubUrl: "https://github.com/abdulmoiz248/Finance-Flow-Pro",
    category: "web",
  },
  {
    id: 13,
    title: "Broken Bone Detection",
    description: "ML-based X-ray bone fracture classification system",
    fullDescription:
      "Broken Bone Detection is a machine learning assignment focused on classifying X-ray images to detect bone fractures. The project uses deep learning models trained on a labeled dataset of fractured and non-fractured X-rays, incorporating image preprocessing techniques and evaluation metrics like accuracy, precision, recall, and confusion matrix. It's built to explore the practical application of computer vision in the medical field, automating diagnosis and reducing human error in radiology.",
    imageUrl: "/broken-bone.png",
    techStack: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
    githubUrl: "https://github.com/abdulmoiz248/Broken-Bone-Detection",
    category: "ml",
  },
  {
    id: 14,
    title: "PDF Quiz App",
    description: "Ask MCQs from your own PDFs and get instant answers",
    fullDescription:
      "PDF Quiz App is a collab I built with my friend Zain, where users upload PDFs and then ask multiple-choice questions based on the uploaded content. The backend (Python) processes the documents and responds with accurate answers sourced directly from the PDF. I handled the full frontend in Next.js, crafting a smooth and intuitive UI for uploading, questioning, and interacting with the quiz bot. It’s like having your own AI-powered study buddy for any document.",
    imageUrl: "/quiz-app.png",
    techStack: ["Next.js", "Tailwind", "Python", "HuggingFace"],
    githubUrl: "https://github.com/abdulmoiz248/Quiz-App",
    category: "web",
  },
  {
    id: 15,
    title: "COMSATS CGPA Calculator",
    description: "A GPA/CGPA calculator tailored for COMSATS students",
    fullDescription:
      "COMSATS CGPA Calculator is a web-based tool built to help students at COMSATS University Islamabad accurately compute their CGPA and GPA. It includes three main modules: overall CGPA calculation using semester-wise inputs, GPA calculation based on quizzes, assignments, mids, and finals, and semester-specific CGPA using course-wise data. The app features a clean UI, progress bars, and responsive design. Built with HTML, CSS, and vanilla JS (plus jQuery), it’s flexible and functional—but grounded in the grading system used by COMSATS. Perfect for students who want clarity on their academic performance.",
    imageUrl: "/cgpa-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/abdulmoiz248/COMSATS-CGPA-Calculator",
    deployedUrl: "https://abdulmoiz248.github.io/COMSATS-CGPA-Calculator/",
    category: "web",
  },
  {
    id: 16,
    title: "E-Commerce System (MS SQL Project)",
    description: "Full-featured e-commerce DBMS project with inventory, orders, payments & analytics",
    fullDescription:
      "This MS SQL-based e-commerce system is a feature-rich backend project handling everything from user registration, cart handling via cookies, and categorized products to full order processing. It supports both guest and registered users, handles payments (cash/card), applies discount coupons, tracks shipping, and enables prebooking out-of-stock items. Users can add reviews, submit complaints (with ticketing), and request returns/refunds. Retailer billing is recorded, and daily revenue is calculated. It’s a complete database-driven solution simulating real-world e-commerce flow and business intelligence in a relational environment.",
    imageUrl: "/e-com-sql.png",
    techStack: ["MS SQL", "Lucide Chart"],
    githubUrl: "https://github.com/abdulmoiz248/MS-SQL-Project",
    category: "db",
  },
  {
  id: 17,
  title: "BakeBot",
  description: "AI-powered baking assistant built with Langchain & React",
  fullDescription: "BakeBot is a smart baking assistant app developed for a client in collaboration with Zain Ul Abideen. I led the frontend in React to create a seamless user interface, while Zain built the backend, Langchain to power AI-driven recipe and baking assistance. The app lets users interact with an intelligent chatbot for personalized baking suggestions, ingredients guidance, and more.\n\n🧁 React frontend\n🧠 Langchain-powered backend\n💬 Smart chatbot UX\n🚀 Built for real-world client deployment",
  imageUrl: "/bake-bot.png",
  techStack: ["React", "Express.js", "Langchain", "JavaScript"],
  githubUrl: "https://github.com/abdulmoiz248/Bake-Bot",
  category: "web"
}

  ,
  {
    id: 18,
    title: "Sudoku Solver with GUI",
    description: "Interactive Sudoku solver with JavaFX",
    fullDescription: "A JavaFX-based desktop application that solves Sudoku puzzles and lets you play them too. You can input your own puzzle or generate a random one. It features a clean, interactive GUI where you can watch the solver work or manually test your moves. It ensures all puzzles and solutions are valid. Whether you're just here to play or trying to debug your brain, it's a full Sudoku experience.\n\n🧠 Smart solver algorithm\n🎮 Playable with move validation\n🎲 Puzzle generator\n🖥️ Built using Java + JavaFX",
    imageUrl: "/sudoku.png",
    techStack: ["Java", "JavaFX"],
    githubUrl: "https://github.com/abdulmoiz248/Sudoku"
  ,category:'web'
  },



]


export default function Projects({ setSelectedProject }: { setSelectedProject: (project: Project) => void }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("original")
  const [showCount, setShowCount] = useState(8)

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "ml", label: "Machine Learning" },
    { value: "dsa", label: "Data Structures & Algorithms" },
    { value: "db", label: "Database" },
  ]

  const sortOptions = [
    { value: "original", label: "Original Order" },
    { value: "title", label: "Title A-Z" },
    { value: "category", label: "Category" },
    { value: "recent", label: "Most Recent" },
  ]

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "category":
          return a.category.localeCompare(b.category)
        case "recent":
          return b.id - a.id // Assuming higher ID means more recent
        case "original":
          return a.id - b.id // Original order by ID
        default:
          return a.id - b.id // Default to original order
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const displayedProjects = filteredAndSortedProjects.slice(0, showCount)
  const hasMoreProjects = showCount < filteredAndSortedProjects.length

  // Reset showCount when filters change
  useEffect(() => {
    setShowCount(8)
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <section id="work" className="bg-black py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
  className="text-5xl md:text-6xl mb-8 py-2 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text text-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
 My Projects
</motion.h2>




        {/* Search and Filter Controls */}
        <motion.div
          className="mb-8 space-y-4"
         
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <SortAsc className="text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-400 text-sm">
            Showing {displayedProjects.length} of {filteredAndSortedProjects.length} projects
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
           
               
                whileHover={{ scale: 1.02 }}
                className="w-full"
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {hasMoreProjects && (
          <motion.div
            className="text-center mt-12"
           
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowCount((prev) => Math.min(prev + 8, filteredAndSortedProjects.length))}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Show More Projects
            </button>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredAndSortedProjects.length === 0 && (
          <motion.div className="text-center py-12" >
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setShowCount(8)
              }}
              className="mt-4 text-blue-400 hover:text-blue-300 underline focus:outline-none"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
