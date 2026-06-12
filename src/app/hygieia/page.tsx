import type { Metadata } from 'next'
import HygieiaClient from './HygieiaClient'

export const metadata: Metadata = {
  title: 'Hygieia — Healthcare AI Platform | Abdul Moiz',
  description:
    'Hygieia is a microservice-based healthcare platform featuring AI-powered diagnostics, smart recommendations, multi-role dashboards, and a LangGraph chatbot. Built with NestJS, FastAPI, Next.js, and Docker.',
  keywords: [
    'Hygieia',
    'healthcare platform',
    'microservices',
    'AI diagnostics',
    'NestJS',
    'FastAPI',
    'Next.js',
    'FYP',
    'final year project',
    'Abdul Moiz',
  ],
  openGraph: {
    title: 'Hygieia — Healthcare AI Platform | Abdul Moiz',
    description:
      'A microservice-based healthcare platform with AI diagnostics, smart recommendations, and multi-role dashboards.',
    type: 'website',
  },
}

export default function HygieiaPage() {
  return <HygieiaClient />
}
