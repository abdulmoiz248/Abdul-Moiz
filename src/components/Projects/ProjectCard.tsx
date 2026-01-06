import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Project {
  title: string
  description: string
  fullDescription: string
  imageUrl: string
  techStack: string[]
  githubUrl?: string
  deployedUrl?: string
  category: string
}

interface ProjectCardProps {
  project: Project
  index: number
  isEven: boolean
}

const ProjectCard = ({ project, index, isEven }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`relative flex-1 overflow-hidden rounded-2xl transition-all duration-700 ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : isEven
            ? 'translate-x-20 opacity-0'
            : '-translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-accent/20"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            )}
            {project.deployedUrl && (
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-accent/20"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 transition-all duration-700 ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : isEven
            ? '-translate-x-20 opacity-0'
            : 'translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 100 + 150}ms` }}
      >
        <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          {project.category}
        </span>
        <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
          {project.title}
        </h3>
        <p className="mb-4 text-muted-foreground">{project.description}</p>
        <p className="mb-6 text-sm text-muted-foreground/70 line-clamp-3">
          {project.fullDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {project.deployedUrl && (
            <Button  size="sm" asChild>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
