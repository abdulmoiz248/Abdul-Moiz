"use client"
'use client'

import {  useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { IconCloud } from "@/components/ui/icon-cloud";
import { FuturisticBackground } from '../HeroBackground';
import { useState } from 'react'
import { Award, Calendar } from 'lucide-react'
import CertificateModal from './CertificateModal'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  skills: string[]
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023-05-15",
    imageUrl: "/placeholder.svg?height=400&width=600",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    id: "2",
    title: "React - The Complete Guide",
    issuer: "Academind",
    date: "2023-07-22",
    imageUrl: "/placeholder.svg?height=400&width=600",
    skills: ["React", "Redux", "React Hooks", "Next.js"]
  },
  {
    id: "3",
    title: "Advanced CSS and Sass",
    issuer: "Udemy",
    date: "2023-03-10",
    imageUrl: "/placeholder.svg?height=400&width=600",
    skills: ["CSS3", "Sass", "Flexbox", "CSS Grid", "Animations"]
  },
  {
    id: "4",
    title: "React - The Complete Guide",
    issuer: "Academind",
    date: "2023-07-22",
    imageUrl: "/placeholder.svg?height=400&width=600",
    skills: ["React", "Redux", "React Hooks", "Next.js"]
  },
  {
    id: "5",
    title: "Advanced CSS and Sass",
    issuer: "Udemy",
    date: "2023-03-10",
    imageUrl: "/placeholder.svg?height=400&width=600",
    skills: ["CSS3", "Sass", "Flexbox", "CSS Grid", "Animations"]
  }
]

export default function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);


  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
      <div className="container z-10 mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">My Certifications</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCertificate(cert)}
              layout
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <Award className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-gray-400 mb-4">{cert.issuer}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  )
}

