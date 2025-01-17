'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

// Mock data for experience items
const allExperiences = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Tech Innovators Inc.',
    period: '2020 - Present',
    description: 'Led development of cutting-edge web applications using React and Node.js.',
    technologies: ['React', 'Node.js', 'GraphQL'],
    projectLink: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Creative Designs Co.',
    period: '2018 - 2020',
    description: 'Designed intuitive user interfaces for mobile and web applications.',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    projectLink: 'https://example.com/project2',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

