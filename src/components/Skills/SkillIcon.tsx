import { useEffect, useRef } from 'react'
import { Code2 } from 'lucide-react'

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3",
  "nextdotjs", "vercel", "git", "github", "python", "redux",
  "mongodb", "sql", "nestjs", "tailwindcss", "socketdotio", "prisma",
  "postgresql", "docker", "openai", "postman", "notion", "canva",
  "claude", "figma", "cloudinary", "netlify", "perplexity", "supabase", "zustand"
]

// Split into 3 rows
const row1 = slugs.slice(0, 11)
const row2 = slugs.slice(11, 21)
const row3 = slugs.slice(21)

const MarqueeRow = ({ 
  items, 
  direction = 'left',
  speed = 25 
}: { 
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex overflow-hidden py-3">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
      
      <div
        ref={containerRef}
        className={`flex gap-6 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((slug, index) => (
          <div
            key={`${slug}-${index}`}
            className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:scale-110"
          >
            <img
              src={`https://cdn.simpleicons.org/${slug}`}
              alt={slug}
              className="h-8 w-8 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              onError={(e) => {
                // Fallback for icons that don't load
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-muted-foreground font-medium">${slug.slice(0, 3).toUpperCase()}</span>`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const SkillsMarquee = () => {
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Code2 className="h-4 w-4" />
            Tech Arsenal
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A constantly evolving toolkit of languages, frameworks, and tools that power my projects.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-4">
          <MarqueeRow items={row1} direction="left" speed={30} />
          <MarqueeRow items={row2} direction="right" speed={35} />
          <MarqueeRow items={row3} direction="left" speed={28} />
        </div>
      </div>
    </section>
  )
}

export default SkillsMarquee
