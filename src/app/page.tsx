'use client'

import CertificateSection from '@/components/Certifications/Certification'
import ContributionsDisplay from '@/components/ContributionsDisplay'
import Timeline from '@/components/Education/Timeline'
import { ExperienceSection } from '@/components/Experience/ExperienceSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects/Projects'
import { IconCloudDemo } from '@/components/Skills/SkillIcon'
import React from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function Page() {
  return (
    <>
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
        <Timeline/>
      </AnimatedSection>
      <AnimatedSection>
        <Projects/>
      </AnimatedSection>
      <AnimatedSection>
        <CertificateSection/>
      </AnimatedSection>
      <Footer/>
    </>
  )
}

