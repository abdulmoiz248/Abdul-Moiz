'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

// Mock data for experience items
const allExperiences = [
  {
    id: 1,
    title: 'IT Team Member',
    company: 'IEEE RAS Society',
    period: '2022 - 2023',
    description: 'A dedicated IT team member at RAS Society, ensuring seamless technology solutions and support for all event.',
    technologies: ['HTML', 'CSS', 'Event Management'],
  },
  {
    id: 2,
    title: 'Co-founder',
    company: 'Zero Limit Apparel',
    period: '2024 - 2025',
    description: "As a co-founder of Zero Limit Apparel, I contributed to the brand's strategic direction, website and product development,marketing, and overall growth",
    technologies: ['Next.js', 'React', 'MongoDB','Start-up Leadership'],
   
  },  {
    id: 3,
    title: 'Private Tutor',
    company: 'Free Lancing',
    period: '2024 - 2025',
 description: "Tutored a university student in core CS subjects like Distributed Computing, OS, and DSA—focused on concepts, assignments, projects, and boosting performance with hands-on examples and regular reviews."
,   technologies: ['Operating Systems', 'Data Structures', 'OOP','Java'],
   
  },
  
]

export function ExperienceSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-16 bg-black text-white">
      
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.2,
          },
        },
      }}
      className="container mx-auto px-4"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        My Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
        {allExperiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-center"
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  
  )
}

