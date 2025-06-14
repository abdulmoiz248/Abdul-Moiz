'use client'

import CertificateSection from '@/components/Certifications/Certification'
import ContributionsDisplay from '@/components/Contribution/ContributionsDisplay'
import Timeline from '@/components/Education/Timeline'
import { ExperienceSection } from '@/components/Experience/ExperienceSection'
import Footer from '@/components/Layouts/Footer'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import { IconCloudDemo } from '@/components/Skills/SkillIcon'
import React from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Certificate } from '@/components/Certifications/Certification'
import { useState } from 'react'
import CertificateModal from '@/components/Certifications/CertificateModal'
import { TimelineEvent } from '@/components/Education/Timeline'
import TimelineModal from '@/components/Education/TimelineModal'
import { Project } from '@/components/Projects/Projects'
import ProjectModal from '@/components/Projects/ProjectModal'
import Head from 'next/head';
import About from '@/components/Hero/About'

export default function Page() {
  
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
 return (
    <>
     <Head>
        <title>Abdul Moiz</title>
        <meta name="description" content="Welcome to Abdul Moiz's portfolio. Freelancer, full-stack and AI developer Showcasing projects, skills, and expertise." />
        <meta name="keywords" content="Abdul Moiz, Moiz, developer, programmer, freelancer, Abdul Moiz Iqbal, portfolio" />
        <meta name="author" content="Abdul Moiz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdul-moiz-b419.vercel.app/" />
        <meta property="og:title" content="Abdul Moiz | Developer, Freelancer" />
        <meta property="og:description" content="Portfolio of Abdul Moiz: Web & AI developer, freelancer and tech enthusiast." />
        <meta property="og:image" content="https://abdul-moiz-b419.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdul-moiz-b419.vercel.app/" />
        <meta property="twitter:title" content="Abdul Moiz | Developer, Freelancer" />
        <meta property="twitter:description" content="Portfolio of Abdul Moiz: Web  and AI developer, freelancer, and tech enthusiast." />
        <meta property="twitter:image" content="https://abdul-moiz-b419.vercel.app/og-image.jpg" />
      </Head>

       {selectedEvent && (
          <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
         {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}

<CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
      <div className='pt-12'>
      
      <Hero userName='Abdul Moiz'/>
      </div>
      <About/>
      <AnimatedSection>
        <ContributionsDisplay/>
      </AnimatedSection>
      <AnimatedSection>
        <IconCloudDemo/>
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection/>
      </AnimatedSection>
      <AnimatedSection>
     
        <Timeline setSelectedEvent={setSelectedEvent}/>
      </AnimatedSection>
      <AnimatedSection>
        <Projects setSelectedProject={setSelectedProject}/>
      </AnimatedSection>
      <AnimatedSection>
        <CertificateSection setSelectedCertificate={setSelectedCertificate}/>
       
      </AnimatedSection>
     
      <Footer/>
    </>
  )
}

