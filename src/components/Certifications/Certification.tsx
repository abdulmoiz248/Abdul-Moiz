"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { FuturisticBackground } from "../Hero/HeroBackground"
import { Calendar, Trophy, Award, Code2, ChevronDown, ChevronUp } from "lucide-react"

interface Project {
  name: string
 
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  skills: string[]
  type: "course" | "hackathon" | "competition"
  project?: Project
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "React & Redux Course",
    issuer: "Prashant Sir",
    date: "Aug-2024",
    imageUrl: "/react.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    type: "course",
  },
  {
    id: "2",
    title: "Devathon",
    issuer: "Devsinc",
    date: "7-Sep-2024",
    imageUrl: "/devsinc.jpg",
    skills: ["React", "MongoDB", "Web Dev", "Next.js"],
    type: "hackathon",
    project: {
      name: "Health Management System",
    },
  },
  {
    id: "4",
    title: "Decathon",
    issuer: "Decentral Developers",
    date: "02-Feb-2025",
    imageUrl: "/1st.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Landing Page of Consultation Service",
    }
  },
  {
    id: "3",
    title: "Risk Assessment e-Learning",
    issuer: "Universal Robots",
    date: "14-Sep-2024",
    imageUrl: "/risk.png",
    skills: ["Risk Assessment", "Safety", "Universal Robots"],
    type: "course",
  },
  {
    id: "5",
    title: "Infym AI Hackathon+Training",
    issuer: "Infym Ai",
    date: "1-March-2025",
    imageUrl: "/infymAi.png",
    skills: ["Machine Learning", "Data Cleaning", "Feature Engineering"],
    type: "hackathon",
    project: {
      name: "Tumour Predicition",
     },
  },
  {
    id: "6",
    title: "HR Hackathon 2.0",
    issuer: "Code Blitz",
    date: "1-Feb-2025",
    imageUrl: "/fc.jpeg",
    skills: ["Speed Programming", "DSA", "Problem Solving"],
    type: "competition",
  },
  {
    id: "7",
    title: "Webathon",
    issuer: "Cachelogics",
    date: "1-March-2025",
    imageUrl: "/cachelogics-certificate.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Cachelogics landing page",
      },
  },
  {
    id: "8",
    title: "PF-PuCon'25",
    issuer: "FCIT, Punjab University",
    date: "1-May-2025",
    imageUrl: "/pf-pucon.jpg",
    skills: ["Feature Extraction", "Correlation", "AI", "Model Training", "Data cleaning"],
    type: "competition",
  },
  {
    id: "9",
    title: "Softec'25",
    issuer: "Fast University",
    date: "1-March-2025",
    imageUrl: "/softec.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Health Assistant-Hygieia",
    }
    
  },
]

const INITIAL_DISPLAY_COUNT = 6

export default function CertificateSection({
  setSelectedCertificate,
}: { setSelectedCertificate: (cert: Certificate) => void }) {
  const [isHovering, setIsHovering] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const displayedCertificates = showAll ? certificates : certificates.slice(0, INITIAL_DISPLAY_COUNT)

  useEffect(() => {
    setIsHovering(false)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const getTypeIcon = (type: Certificate["type"]) => {
    switch (type) {
      case "hackathon":
        return <Code2 size={16} className="text-blue-400" />
      case "competition":
        return <Trophy size={16} className="text-yellow-400" />
      case "course":
        return <Award size={16} className="text-green-400" />
      default:
        return <Award size={16} className="text-gray-400" />
    }
  }

  const getTypeColor = (type: Certificate["type"]) => {
    switch (type) {
      case "hackathon":
        return "border-blue-500"
      case "competition":
        return "border-yellow-500"
      case "course":
        return "border-green-500"
      default:
        return "border-gray-500"
    }
  }

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <FuturisticBackground isHovering={isHovering} mouseX={mouseX} mouseY={mouseY} />
      <div className="container z-10 mx-auto px-4">
   <motion.h2
  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text text-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  My Certifications & Achievements
</motion.h2>


        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of my learning journey, hackathon victories, and professional certifications
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {displayedCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer border-2 ${getTypeColor(cert.type)} border-opacity-30 hover:border-opacity-60 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCertificate(cert)}
              layout
            >
              {/* Certificate Image */}
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={cert.imageUrl || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                  {getTypeIcon(cert.type)}
                  <span className="text-xs capitalize text-white">{cert.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white line-clamp-2">{cert.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{cert.issuer}</p>

                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {new Date(cert.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>

                {/* Project indicator for hackathons */}
                {cert.project && (
                  <div className="mb-3 p-2 bg-blue-900 bg-opacity-30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Code2 size={14} className="text-blue-400" />
                      <span className="text-xs text-blue-300 font-medium">Project Built</span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{cert.project.name}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More/Less Button */}
        {certificates.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More ({certificates.length - INITIAL_DISPLAY_COUNT} more)
                  <ChevronDown size={20} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-center p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {certificates.filter((c) => c.type === "hackathon").length}
            </div>
            <div className="text-sm text-gray-400">Hackathons</div>
          </div>
          <div className="text-center p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {certificates.filter((c) => c.type === "competition").length}
            </div>
            <div className="text-sm text-gray-400">Competitions</div>
          </div>
          <div className="text-center p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {certificates.filter((c) => c.type === "course").length}
            </div>
            <div className="text-sm text-gray-400">Courses</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
