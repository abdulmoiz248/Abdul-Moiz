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
export default function Page() {
  
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <>
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
      <Hero userName='Abdul Moiz'/>
      
    
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

