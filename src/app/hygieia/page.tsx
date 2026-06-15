import type { Metadata } from 'next'
import HygieiaClient from './HygieiaClient'

const SITE_URL = 'https://abdul-moiz-b419.vercel.app'
const OG_IMAGE = '/fyp/screenshots/logo.png'

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
    'LangGraph',
    'Docker',
    'healthcare AI',
    'telemedicine',
  ],
  alternates: {
    canonical: `${SITE_URL}/hygieia`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hygieia — Healthcare AI Platform | Abdul Moiz',
    description:
      'A microservice-based healthcare platform with AI diagnostics, smart recommendations, and multi-role dashboards. 10 microservices, 5 user roles, 4 AI engines.',
    type: 'website',
    url: `${SITE_URL}/hygieia`,
    siteName: 'Abdul Moiz Portfolio',
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: 'Hygieia — Healthcare AI Platform Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Hygieia — Healthcare AI Platform | Abdul Moiz',
    description:
      'AI-powered healthcare platform with 10 microservices, multi-role dashboards, and LangGraph chatbot.',
    images: [OG_IMAGE],
  },
}

export default function HygieiaPage() {
  return <HygieiaClient />
}
