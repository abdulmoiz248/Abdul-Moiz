'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  Server,
  Database,
  Cpu,
  MessageSquare,
  Layers,
  Maximize2,
  ZoomIn,
  AlertCircle,
  CheckCircle2,
  Play,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  hygieiaIntro,
  hygieiaStats,
  hygieiaFeatures,
  hygieiaTechStack,
  screenshotCategories,
  screenshots,
  systemArchitecture,
  type ScreenshotItem
} from '@/data/hygieia'
import Masonry, { type MasonryItem } from '@/components/ui/Masonry'

/* ─────────── Lightbox ─────────── */
function Lightbox({
  items,
  initialIndex,
  onClose,
}: {
  items: ScreenshotItem[]
  initialIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)
  const item = items[index]

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + items.length) % items.length)
    },
    [onClose, items.length]
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:-top-12 md:right-0 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 md:bg-transparent rounded-full"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Media Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl flex items-center justify-center">
          <img
            src={item.img}
            alt={item.label}
            className="max-w-full h-auto max-h-[75vh] object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Meta Box */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-white">{item.label}</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-white/50 text-sm">
            <span>{index + 1} / {items.length}</span>
            {items.length > 1 && (
              <div className="flex gap-1">
                <button
                  onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % items.length)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────── Poster Modal ─────────── */
function PosterModal({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full border border-white/10">
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-white/15" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Hygieia FYP Poster" className="w-full h-auto object-contain bg-neutral-950" />
      </div>
    </div>
  )
}

/* ─────────── CountUp Animation ─────────── */
function CountUp({ target }: { target: number }) {
  const [value, setValue] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const isTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTriggered.current) {
          isTriggered.current = true
          let start = 0
          const increment = target / 60
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setValue(target)
              clearInterval(timer)
            } else {
              setValue(Math.ceil(start))
            }
          }, 16)
        }
      },
      { threshold: 0.2 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={elementRef}>{value}</span>
}

/* ─────────── Main Client Component ─────────── */
export default function HygieiaClient() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightbox, setLightbox] = useState<{ items: ScreenshotItem[]; index: number } | null>(null)
  const [archLightbox, setArchLightbox] = useState(false)
  const [posterOpen, setPosterOpen] = useState(false)

  // Filter screenshots based on tab
  const filteredScreenshots = tabFilter(activeTab)

  function tabFilter(tabId: string) {
    if (tabId === 'all') return screenshots
    return screenshots.filter((s) => s.category === tabId)
  }

  // Convert custom screenshot item format into React Bits Masonry item format
  const masonryItems: MasonryItem[] = filteredScreenshots.map((s) => ({
    id: s.id,
    img: s.img,
    height: s.height,
    label: s.label,
    description: s.description,
    category: s.category,
  }))

  const handleMasonryItemClick = (item: MasonryItem) => {
    const index = filteredScreenshots.findIndex((s) => s.id === item.id)
    if (index !== -1) {
      setLightbox({ items: filteredScreenshots, index })
    }
  }

  return (
    <main className="relative min-h-screen bg-background noise-overlay text-foreground">
      {/* Glow Rings */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-emerald-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[400px] left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
       

        {/* ── PROJECT HERO SECTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={hygieiaIntro.logo}
                alt="Hygieia Logo"
                className="w-16 h-16 object-contain rounded-2xl border border-primary/20 bg-primary/10 p-2 shadow-lg shadow-primary/5 hover:scale-105 transition-transform shrink-0"
              />
              <div>
                <span className="inline-block text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-2.5 sm:px-3 py-1 rounded-full mb-2">
                  Final Year Project 2022-26
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-1 text-white">
                  Hygieia
                </h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive healthcare platform deploying <span className="text-white font-medium">10 decoupled microservices</span>.
              Hygieia bridges clinical consultations, fitness tracking, and machine learning analysis to provide early screenings and personalized medical advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <a href="https://github.com/abdulmoiz248" target="_blank" rel="noopener noreferrer" className="justify-center">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Code
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group border-primary/20 text-white hover:bg-primary/10 w-full sm:w-auto" asChild>
                <a href="#screenshots" className="justify-center">
                  <Maximize2 className="w-5 h-5 mr-2 text-primary" />
                  Showcase Gallery
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center w-full">
            {/* Logo Display Card */}
            <div className="relative group w-48 sm:w-56 md:w-64 aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-card/85 to-card/40 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-primary/40 flex items-center justify-center p-6 sm:p-8">
              {/* Glowing effects */}
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
              <img 
                src={hygieiaIntro.logo} 
                alt="Hygieia Platform Logo" 
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(0,131,150,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(0,131,150,0.35)] transition-all duration-500" 
              />
            </div>
          </div>
        </section>

        {/* ── PROJECT SUMMARY (PROBLEM vs SOLUTION) ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative">
          <div className="relative group bg-gradient-to-br from-card/80 to-card/30 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-red-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {hygieiaIntro.problem}
            </p>
          </div>

          <div className="relative group bg-gradient-to-br from-card/80 to-card/30 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {hygieiaIntro.solution}
            </p>
          </div>
        </section>

        {/* ── STATISTICS STRIP ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {hygieiaStats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/15 transition-all duration-500 text-center"
            >
              <div className="text-4xl font-extrabold text-white tracking-tight mb-2">
                <CountUp target={parseInt(stat.value)} />
              </div>
              <div className="text-sm font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </section>

        {/* ── SYSTEM ARCHITECTURE SECTION ── */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              System <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our hybrid microservice setup coordinates FastAPI servers with NestJS gateways to build responsive pipelines.
            </p>
          </div>

          <div 
            onClick={() => setArchLightbox(true)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            <img
              src={systemArchitecture.src}
              alt={systemArchitecture.label}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Hover Indicator */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black font-semibold shadow-lg">
                <Maximize2 className="w-4 h-4" />
                <span>View Full Architecture Diagram</span>
              </div>
            </div>
          </div>

        </section>

        {/* ── SYSTEM OBJECTIVES ── */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              Project <span className="text-gradient">Objectives</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Core technical deliverables designed and implemented for the Hygieia system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: '1', title: 'Visual Disease Detection', text: 'Integrating deep convolutional neural networks to identify dermatological anomalies and classifying dental conditions directly from images.' },
              { id: '2', title: 'Stateful Chatbot Companion', text: 'Formulating LangGraph-driven conversational flows with dynamic databases, fetching patient history context to resolve medical queries.' },
              { id: '3', title: 'Consultation & Lab Bookings', text: 'Online booking channels allowing patients to schedule clinical specialist appointments and pathology tests.' },
              { id: '4', title: 'Fitness Integration', text: 'Collecting live calorie counts, hydration data, sleep patterns, and physical steps by integrating Fitbit APIs.' },
              { id: '5', title: 'Asynchronous Alerting', text: 'Setting up background schedules, BullMQ task runners, and email notifications to deliver medication updates.' },
              { id: '6', title: 'Central EHR Storage', text: 'Providing patients with a secure, centralized portal to upload, inspect, and maintain medical records and prescriptions.' }
            ].map((obj) => (
              <div 
                key={obj.id}
                className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-card/20 border border-white/5 hover:border-primary/10 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  0{obj.id}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{obj.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{obj.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── KEY FEATURES DETAILED ── */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              Product <span className="text-gradient">Features</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Advanced modules developed across our frontend and AI services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hygieiaFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="relative group p-5 sm:p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-4">{feat.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{feat.description}</p>
                </div>
                <div className="text-[10px] text-primary font-mono tracking-wider bg-primary/5 border border-primary/10 px-2.5 py-1 rounded w-fit uppercase">
                  {feat.tech}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FYP POSTER SECTION ── */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              Project <span className="text-gradient">Poster</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our official final year project showcase poster detailing design requirements, systems integration, and product features.
            </p>
          </div>

          <div 
            onClick={() => setPosterOpen(true)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer shadow-2xl hover:border-primary/30 transition-all duration-500 max-w-3xl mx-auto w-full"
          >
            <img
              src={hygieiaIntro.poster}
              alt="Hygieia FYP Showcase Poster"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Hover Indicator */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black font-semibold shadow-lg mb-2">
                <ZoomIn className="w-5 h-5" />
                <span>Click to Zoom & Inspect Poster</span>
              </div>
              <p className="text-white/60 text-xs max-w-md">Open high-resolution overview covering scope, technologies, and workflow design.</p>
            </div>
            {/* Mobile/Tablet Tap Assist */}
            <div className="absolute bottom-4 right-4 md:hidden bg-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white/95 text-[10px] font-semibold tracking-wider uppercase shadow-lg">
              <ZoomIn className="w-3.5 h-3.5 text-primary" />
              <span>Tap to Zoom</span>
            </div>
          </div>
        </section>

        {/* ── TECH STACK MATRIX ── */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              Technology <span className="text-gradient">Matrix</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Engineered using modern, enterprise-ready frameworks for robust microservice communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {hygieiaTechStack.map((tech, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-[10px] text-primary font-mono uppercase tracking-widest mb-1">
                  {tech.category}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MASONRY SCREENSHOT GALLERY ── */}
        <section id="screenshots" className="mb-24 scroll-mt-28">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">
              Platform <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore dynamic interfaces, clinical portal screens, and system analytics via our responsive masonry panel.
            </p>
          </div>

          {/* TAB HEADERS */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 px-2">
            {screenshotCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-primary text-black border-primary shadow-lg shadow-primary/10'
                    : 'bg-card/40 text-muted-foreground border-white/5 hover:text-white hover:bg-card/70'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* GALLERY CONTAINER */}
          <div className="relative border border-white/5 rounded-3xl p-4 sm:p-6 bg-card/10 overflow-hidden">
            {masonryItems.length > 0 ? (
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.03}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.96}
                blurToFocus={true}
                colorShiftOnHover={false}
                onItemClick={handleMasonryItemClick}
              />
            ) : (
              <div className="py-16 text-center text-muted-foreground text-sm">
                No screenshots found in this category.
              </div>
            )}
          </div>
        </section>

     
      </div>

      {/* LIGHTBOX MODAL */}
      {lightbox && (
        <Lightbox
          items={lightbox.items}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* ARCHITECTURE LIGHTBOX */}
      {archLightbox && (
        <Lightbox
          items={[
            {
              id: 'arch',
              img: systemArchitecture.src,
              label: systemArchitecture.label,
              description: systemArchitecture.description,
              category: 'design',
              height: 600,
            },
          ]}
          initialIndex={0}
          onClose={() => setArchLightbox(false)}
        />
      )}

      {/* POSTER ZOOM MODAL */}
      {posterOpen && (
        <PosterModal
          src={hygieiaIntro.poster}
          onClose={() => setPosterOpen(false)}
        />
      )}
    </main>
  )
}
