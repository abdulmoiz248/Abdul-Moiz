'use client'

import React from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}

