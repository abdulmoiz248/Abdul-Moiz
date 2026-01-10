'use client'

import CertificateSection from '@/components/Certifications/Certification'
import DeveloperSection from '@/components/Contribution/ContributionsDisplay'

import  ExperienceSection  from '@/components/Experience/ExperienceSection'
import Footer from '@/components/Layouts/Footer'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import SkillsMarquee from '@/components/Skills/SkillIcon'
import React from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'

import { useState } from 'react'
import CertificateModal from '@/components/Certifications/CertificateModal'
 
import Head from 'next/head';
import About from '@/components/Hero/About'
import EducationSection from '@/components/Education/Education'
import AboutSection from '@/components/About/About'
import BookCallSection from '@/components/BookCall/BookCall'

export default function Page() {
  
 
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

      


      
      
      <Hero />
      
     <AboutSection/>

   
        <DeveloperSection/>
  
     
      <SkillsMarquee />
      
        <ExperienceSection/>
      
     
     
        <EducationSection/>
        <Projects/>
        <CertificateSection/>
        <BookCallSection/>
     
      <Footer/>
    </>
  )
}

