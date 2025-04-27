'use client'

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FuturisticBackground } from '../Hero/HeroBackground';
import {  Calendar } from 'lucide-react';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "React & Redux Course",
    issuer: "Prashant Sir",
    date: "Aug-2024",
    imageUrl: "/react.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: "2",
    title: "Devathon",
    issuer: "Devsinc",
    date: "7-Sep-2024",
    imageUrl: "/devsinc.jpg",
    skills: ["React", "MongoDB", "Web Dev", "Next.js"],
  },
  {
    id: "4",
    title: "Decathon",
    issuer: "Decentral Developers",
    date: "02-Feb-2025",
    imageUrl: "/1st.png",
    skills: ["Frontend Development", "React", "Tailwind"],
  },
  {
    id: "3",
    title: "Risk Assessment e-Learning",
    issuer: "Universal Robots",
    date: "14-Sep-2024",
    imageUrl: "/risk.png",
    skills: ["Risk Assessment", "Safety", "Universal Robots"],
  },
  {
    id: "5",
    title: "Infym AI Hackathon+Training",
    issuer: "Infym Ai",
    date: "1-March-2025",
    imageUrl: "/infymAi.png",
    skills: ["Machine Learning", "Data Cleaning", "Feature Engineering"],
  },
  {
    id: "6",
    title: "HR Hackathon 2.0",
    issuer: "Code Blitz",
    date: "1-Feb-2025",
    imageUrl: "/fc.jpeg",
    skills: ["Speed Programming", "DSA", "Problem Solving"]
  },
];

export default function CertificateSection({setSelectedCertificate}: {setSelectedCertificate: (cert: Certificate) => void}) {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsHovering(false);
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
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">My Certifications & Achievements</h2>
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
              {/* Certificate Image */}
              <div className="h-48 bg-gray-800">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} Certificate`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-gray-400 mb-4">{cert.issuer}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>
                    {new Date(cert.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
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

    </section>
  );
}
