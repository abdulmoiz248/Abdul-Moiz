import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects | Abdul Moiz',
  description: 'Explore my portfolio of AI-powered automation tools, full-stack web applications, machine learning projects, and DSA implementations. View my complete collection of work.',
  keywords: ['projects', 'portfolio', 'web development', 'AI', 'machine learning', 'automation', 'full-stack'],
  openGraph: {
    title: 'Projects | Abdul Moiz',
    description: 'A complete collection of my work, from AI-powered automation tools to full-stack web applications.',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
  