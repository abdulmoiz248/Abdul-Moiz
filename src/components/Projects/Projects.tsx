"use client"
import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { Search, Filter, SortAsc } from "lucide-react"

export interface Project {
  title: string
  description: string
  fullDescription: string
  imageUrl: string
  techStack: string[]
  githubUrl: string
  deployedUrl?: string
  category: "ml" | "web" | "dsa" | "db" | "ai" | "automation" | "devops"
}

const projects: Project[] = [
 
  {
    title: "Tasks by AION",
    description: "AI-Powered Automation Platform",
    fullDescription:
      "Aion Tasks is an AI-powered automation platform built to streamline documentation, research, and productivity workflows. The system allows users to upload document templates and dynamically generate content using AI, create on-brand AI-generated slide decks, intelligently expand spreadsheets with pattern detection, and run advanced research that delivers instant insights via webhooks. It integrates multiple AI engines to deliver faster, smarter task execution with a focus on automation at scale.",
    imageUrl: "/aion.png",
    techStack: ["React", "Netlify", "OpenAI", "Claude", "Perplexity"],
    githubUrl: "",
    deployedUrl: "https://tasks.go-aion.com/login",
    category: "ai",
  },
  {
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
    title: "Personal Assistant",
    description:
      "Your Ultimate Discord Personal Assistant – Automate Tasks, Manage Finances, and Boost Productivity",
    fullDescription: `A smart Discord-based assistant designed to streamline productivity and daily management. It automates email handling, tracks income and expenses, and generates monthly income statements. The assistant also sends daily LeetCode challenges to keep coding skills sharp and provides task reminders for events, deadlines, and birthdays.`,
    imageUrl: "/assistant.png",
    techStack: ["Next.js", "TypeScript", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Ai-Assistant-",
    category: "web",
  },
  {

  title: "Fear Insight",
  description: "Premium Streetwear Apparel Brand",
  fullDescription:
    "Fear Insight is a faith‑driven streetwear brand, offering premium quality clothing that blends fashion with spiritual inspiration and bold self‑expression. The platform allows users to browse and shop a curated collection of apparel. Built with Next.js and backed by modern web tech, the store emphasises quality fabrics, meaningful brand messaging, and a seamless shopping experience.",
  imageUrl: "/fearinsight.png",
  techStack: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"], 
  githubUrl: "",         // not publicly shared
  deployedUrl: "https://fearinsight.com/",
  category: "web"
}
,
  {
    title: "Predator-Prey Simulation",
    description: "Parallel Computing Project",
    fullDescription:
      "Built an interactive, parallelized ecosystem simulation using Python (backend) and TypeScript (frontend). Integrated real-time visualization, PDF report generation with dynamic graphs, and AI-powered summary using Gemini API.",
    imageUrl: "/pdc.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Fast Api", "Multi Processing", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/Predator-Prey-Simulation",
    category: "web",
  },
  {
  title: "Insightify",
  description: "AI-powered GitHub activity analytics and insights platform",
  fullDescription:
    "An intelligent automated tracking system that monitors your GitHub coding activity daily and provides comprehensive analytics. It automatically fetches commits, calculates coding hours, tracks languages used, and generates AI-powered insights using Google Gemini. The platform delivers beautiful daily progress notifications via Discord and monthly comprehensive reports via email with auto-generated charts. Built with Python and GitHub Actions for complete automation, it helps developers understand their productivity patterns and maintain coding streaks.",
  imageUrl: "/insightify.png",
  techStack: ["Python", "GitHub Actions", "Gemini AI", "Discord API", "Matplotlib", "PyGithub"],
  githubUrl: "https://github.com/abdulmoiz248/Insightify",
  category: "automation",
},
   {
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
    title: "LeetCode Solutions",
    description: "Solution of all my leetcode attempted questions",
    fullDescription:
      "LeetCode Solutions is a curated collection of my attempted problems on LeetCode, showcasing efficient solutions in Java, JavaScript, and Python.",
    imageUrl: "/leetcode.jpeg",
    techStack: ["Java", "JavaScript", "Python", "DSA"],
    githubUrl: "https://github.com/abdulmoiz248/LeetCode-Attempts",
    category: "dsa",
  },
  {
    title: "Docgent",
    description: "Smart document generator for assignments, reports, and invoices",
    fullDescription:
      "Docgent is an AI-powered document generation assistant built to create professional Word documents like assignments, reports, and invoices.",
    imageUrl: "/docgent.png",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Grok"],
    githubUrl: "https://github.com/abdulmoiz248/Docgent",
    category: "web",
  },
  {
    title: "NoteMind",
    description: "RAG-powered intelligent note assistant",
    fullDescription:
      "NoteMind is a smart note assistant built using Retrieval-Augmented Generation (RAG).",
    imageUrl: "/notemind.png",
    techStack: ["Python", "FastAPI", "LangChain", "FAISS", "OCR", "Gemini"],
    githubUrl: "https://github.com/abdulmoiz248/NoteMind",
    category: "web",
  },
  {
  
  title: "Updates Bot",
  description: "AI-Powered Discord Update Automation",
  fullDescription:
    "Updates Bot is a Discord automation tool I built to streamline daily internship updates. Instead of manually formatting messages, you can drop your raw update and the bot leverages Gemini AI to craft a perfectly formatted post. Additionally, it stores your GitHub access token securely and automatically reads your daily git commit messages at 7 AM, sending them as updates to the designated Discord channel. Currently deployed on Vercel, the bot is built for efficiency, automation, and stress-free daily reporting.",
  imageUrl: "/updates-bot.png",
  techStack: ["Next.js", "Vercel", "Gemini AI", "Supabase", "TypeScript"],
  githubUrl: "https://github.com/abdulmoiz248/updates-bot",
  deployedUrl: "https://updates-bot.vercel.app/",
  category: "ai"
},

  {
    title: "Twiiter Clone",
    description: "DSA Semester Project implementing various data structures",
    fullDescription:
      "User IDs via linked list, tweets via queue, notifications via stack, file handling for persistence.",
    imageUrl: "/twiiter.png",
    techStack: ["Java", "JavaFx"],
    githubUrl: "https://github.com/abdulmoiz248/Twitter-clone?tab=readme-ov-file#twitter-clone-project",
    category: "dsa",
  },
  {
    title: "FOOBER",
    description: "Your Food, Your Way, Your Ride!!",
    fullDescription:
      "Integrated food ordering with rider pickup to dine-in experience.",
    imageUrl: "/Foober.jpeg",
    techStack: ["Java", "Javafx", "DSA", "OOP"],
    githubUrl: "https://github.com/abdulmoiz248/FOOBER",
    category: "web",
  },
  {
    title: "GPT Emailer Extension",
    description: "A Chrome Extension that generates and send emails using chatgpt website",
    fullDescription:
      "Generate and send context-aware emails via Gmail using ChatGPT.",
    imageUrl: "/gpt-email.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Gpt-Emailer-Extension",
    category: "web",
  },
  {
    title: "Nexa Link",
    description: "A Chatting App",
    fullDescription:
      "Real-time messaging and group chats.",
    imageUrl: "/nexalink.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "NestJs", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/NexaLink-Frontend",
    category: "web",
  },
  {
    title: "Finance Flow Pro",
    description: "A vibe coded full-stack personal finance app with dashboards, invoices & goal tracking",
    fullDescription:
      "Dashboards, summaries, invoice gen, and goals with dark/light modes.",
    imageUrl: "/finance.png",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel AI SDK", "MongoDB"],
    githubUrl: "https://github.com/abdulmoiz248/Finance-Flow-Pro",
    category: "web",
  },
  {
    title: "Broken Bone Detection",
    description: "ML-based X-ray bone fracture classification system",
    fullDescription:
      "Deep learning on labeled X-rays with metrics.",
    imageUrl: "/broken-bone.png",
    techStack: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
    githubUrl: "https://github.com/abdulmoiz248/Broken-Bone-Detection",
    category: "ml",
  },
  {
    title: "PDF Quiz App",
    description: "Ask MCQs from your own PDFs and get instant answers",
    fullDescription:
      "Frontend in Next.js, backend in Python using document QA.",
    imageUrl: "/quiz-app.png",
    techStack: ["Next.js", "Tailwind", "Python", "HuggingFace"],
    githubUrl: "https://github.com/abdulmoiz248/Quiz-App",
    category: "web",
  },
  {
    title: "COMSATS CGPA Calculator",
    description: "A GPA/CGPA calculator tailored for COMSATS students",
    fullDescription:
      "CGPA/GPA tools with progress bars and responsive UI.",
    imageUrl: "/cgpa-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/abdulmoiz248/COMSATS-CGPA-Calculator",
    deployedUrl: "https://abdulmoiz248.github.io/COMSATS-CGPA-Calculator/",
    category: "web",
  },
  {
    title: "E-Commerce System (MS SQL Project)",
    description: "Full-featured e-commerce DBMS project with inventory, orders, payments & analytics",
    fullDescription:
      "Relational backend with BI features.",
    imageUrl: "/e-com-sql.png",
    techStack: ["MS SQL", "Lucide Chart"],
    githubUrl: "https://github.com/abdulmoiz248/MS-SQL-Project",
    category: "db",
  },
  {
    title: "BakeBot",
    description: "AI-powered baking assistant built with Langchain & React",
    fullDescription:
      "Chat-driven baking assistant with React frontend.",
    imageUrl: "/bake-bot.png",
    techStack: ["React", "Express.js", "Langchain", "JavaScript"],
    githubUrl: "https://github.com/abdulmoiz248/Bake-Bot",
    category: "web",
  },
  {
    title: "Sudoku Solver with GUI",
    description: "Interactive Sudoku solver with JavaFX",
    fullDescription:
      "Solver, generator, and playable UI.",
    imageUrl: "/sudoku.png",
    techStack: ["Java", "JavaFX"],
    githubUrl: "https://github.com/abdulmoiz248/Sudoku",
    category: "web",
  },
  {
    title: "AI Tic Tac Toe",
    description: "AI-powered Tic Tac Toe game using Gemini API",
    fullDescription:
      "Web game with smart AI opponent.",
    imageUrl: "/tic.png",
    techStack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    githubUrl: "https://github.com/abdulmoiz248/Tick-Tac-Toe?tab=readme-ov-file#tic-tac-toe-game-with-gemini-api",
    category: "web",
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
    const withIndex = projects.map((p, index) => ({ ...p, _index: index }))

    const filtered = withIndex.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "category":
          return a.category.localeCompare(b.category)
        case "recent":
          return b._index - a._index
        case "original":
        default:
          return a._index - b._index
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const displayedProjects = filteredAndSortedProjects.slice(0, showCount)
  const hasMoreProjects = showCount < filteredAndSortedProjects.length

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

        <motion.div className="mb-8 space-y-4" transition={{ duration: 0.5, delay: 0.2 }}>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          <div className="text-center text-gray-400 text-sm">
            Showing {displayedProjects.length} of {filteredAndSortedProjects.length} projects
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div key={`${project.title}-${index}`} layout whileHover={{ scale: 1.02 }} className="w-full">
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMoreProjects && (
          <motion.div className="text-center mt-12" transition={{ delay: 0.5 }}>
            <button
              onClick={() => setShowCount((prev) => Math.min(prev + 8, filteredAndSortedProjects.length))}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Show More Projects
            </button>
          </motion.div>
        )}

        {filteredAndSortedProjects.length === 0 && (
          <motion.div className="text-center py-12">
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
