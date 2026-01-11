import {  ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/project'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const currentProject = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!currentProject) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 py-12">
    
     
        {/* Project Header */}
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {currentProject.category}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {currentProject.title}
          </h1>
          <p className="text-xl text-muted-foreground">{currentProject.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={currentProject.imageUrl}
            alt={currentProject.title}
            className="aspect-video w-full object-cover"
          />
        </div>

        {/* Actions */}
        <div className="mb-12 flex flex-wrap gap-4">
          {currentProject.deployedUrl && (
            <Button asChild>
              <a href={currentProject.deployedUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </a>
            </Button>
          )}
          {currentProject.githubUrl && (
            <Button variant="outline" asChild>
              <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {currentProject.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description / Blog */}
        <article className="prose prose-invert max-w-none">
          <h2 className="mb-6 text-2xl font-bold text-foreground">About This Project</h2>
          
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-accent">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentProject.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-accent">Motivation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project starts with a problem worth solving. For {currentProject.title}, 
                the motivation came from wanting to streamline workflows and create something 
                that genuinely helps users save time. The goal was to build a solution that 
                is not just functional, but delightful to use.
              </p>
            </div>


            <div>
              <h3 className="mb-3 text-lg font-semibold text-accent">Lessons Learned</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building {currentProject.title} taught me valuable lessons about system design, 
                user experience, and the importance of iterative development. Each challenge 
                became an opportunity to grow as a developer and problem solver.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation to other projects */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Explore More Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects
              .filter((p) => p.title !== currentProject.title)
              .slice(0, 4)
              .map((project) => (
                <Link
                  key={project.title}
                  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-accent/50"
                >
                  <span className="text-xs text-accent uppercase">{project.category}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
