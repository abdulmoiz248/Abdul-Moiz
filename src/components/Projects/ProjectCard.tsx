"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Project } from "./Projects"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-800/50 cursor-pointer group"
      whileHover={{
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="text-center">
            <ExternalLink className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white font-semibold">View Details</p>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Category badge */}
        <div className="mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              project.category === "web"
                ? "bg-blue-500/20 text-blue-300"
                : project.category === "ml"
                  ? "bg-green-500/20 text-green-300"
                  : project.category === "dsa"
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-orange-500/20 text-orange-300"
            }`}
          >
            {project.category.toUpperCase()}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-3 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-lg border border-gray-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-gray-400 text-xs">+{project.techStack.length - 4} more</span>
          )}
        </div>

        {/* Quick action buttons */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs transition-colors"
          >
            <Github className="w-3 h-3" />
            Code
          </a>
          {project.deployedUrl && (
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
