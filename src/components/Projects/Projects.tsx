"use client"
import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { Search, Filter, SortAsc } from "lucide-react"
import { projects } from "@/data/project"

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
