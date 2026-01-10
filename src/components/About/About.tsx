import { useEffect, useRef, useState } from 'react'
import { 
  User, 
  Code2, 
  Rocket, 
  Brain, 
  Coffee, 
  Zap,
  Target,
  Lightbulb
} from 'lucide-react'

const facts = [
  { icon: Code2, label: 'Lines of Code', value: '100K+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
  { icon: Rocket, label: 'Projects Shipped', value: '15+' },
  { icon: Zap, label: 'Automations Built', value: '10+' },
]

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'story' | 'values'>('story')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'values', label: 'Values', icon: Target },
  ] as const

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <User className="h-4 w-4" />
            Get to Know Me
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About{' '}
            <span className="text-gradient">Me</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A passionate developer turning ideas into reality through code and automation.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-background shadow-lg shadow-accent/25'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                      <Brain className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">The Beginning</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey into programming started with curiosity and a laptop. What began as 
                    tinkering with simple scripts evolved into a passion for building solutions that 
                    make a real difference. Every line of code I write is driven by the desire to 
                    solve problems elegantly.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                      <Rocket className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">The Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, I focus on building AI-powered automation tools and full-stack applications. 
                    My goal is to leverage technology to eliminate repetitive tasks, boost productivity, 
                    and create experiences that users love.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                      <Lightbulb className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">The Philosophy</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in building with purpose. Every project I take on is an opportunity 
                    to learn something new and push boundaries. Clean code, thoughtful design, and 
                    user-centric thinking guide everything I create.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 transition-transform duration-300 group-hover:scale-110">
                        <fact.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{fact.value}</p>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: 'Quality Over Quantity',
                  description: 'I believe in shipping well-crafted solutions rather than rushing to push features. Every detail matters.',
                },
                {
                  icon: Zap,
                  title: 'Automation First',
                  description: 'If a task can be automated, it should be. I build tools that work while you sleep.',
                },
                {
                  icon: Brain,
                  title: 'Continuous Learning',
                  description: 'Technology evolves rapidly. I dedicate time daily to learning new tools, frameworks, and concepts.',
                },
                {
                  icon: Lightbulb,
                  title: 'User-Centric Design',
                  description: 'Great software solves real problems. I always start by understanding what users truly need.',
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 transition-transform duration-300 group-hover:scale-110">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
