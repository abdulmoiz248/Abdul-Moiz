'use client'

import { useState } from 'react'
import {  Code2, Filter } from 'lucide-react'
import { projects } from '@/data/project'
import Link from 'next/link'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'automation', label: 'Automation' },
  { id: 'dsa', label: 'DSA' },
]

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-10">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-12">
      

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Code2 className="h-4 w-4" />
            All Projects
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            My{' '}
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A complete collection of my work, from AI-powered automation tools to full-stack web applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-background'
                  : 'border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.id === 'all' && <Filter className="h-3.5 w-3.5" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.title}
              href={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.1)]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
