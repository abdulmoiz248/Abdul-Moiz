import CertificateSection from '@/components/Certifications/Certification'
import ContributionsDisplay from '@/components/ContributionsDisplay'
import Timeline from '@/components/Education/Timeline'
import { ExperienceSection } from '@/components/Experience/ExperienceSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { IconCloudDemo } from '@/components/Skills/SkillIcon'
import React from 'react'

export default function page() {
  return (
<>
<Hero userName='Abdul Moiz'/>
<ContributionsDisplay/>
<IconCloudDemo/>
<ExperienceSection/>
<Timeline/>
<Projects/>
<CertificateSection/>
<Footer/>
</>
  
  )
}
