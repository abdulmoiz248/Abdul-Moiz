import { Code2, ArrowRight } from 'lucide-react'

import ProjectCard from './ProjectCard'

import { Button } from '@/components/ui/button'
import { projects } from '@/data/project'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-background py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Code2 className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Projects &{' '}
            <span className="text-gradient">Creations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my best work, featuring AI-powered applications, full-stack platforms, and automation tools.
          </p>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-24">
          {projects.slice(0,5).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index }
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-20 text-center">
          <Button  size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
