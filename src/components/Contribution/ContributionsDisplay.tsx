import { useEffect, useRef, useState } from 'react'
import { Github, Code2, Flame, Target, Calendar, Trophy } from 'lucide-react'

const DeveloperSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Replace with your actual GitHub username
  const githubUsername = 'abdulmoiz248'
  // Replace with your actual LeetCode username
  const leetcodeUsername = 'abdulmoiz248'

  return (
    <section
      ref={sectionRef}
      id="developer"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            <Code2 className="h-4 w-4" />
            Developer Stats
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Code is My <span className="text-gradient">Language</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Consistency, problem-solving, and continuous improvement define my coding journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* GitHub Section */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">GitHub Activity</h3>
                  <a 
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    @{githubUsername}
                  </a>
                </div>
              </div>

              {/* GitHub Contribution Graph */}
              <div className="rounded-2xl border border-white/10 bg-background/50 p-4 overflow-hidden">
                <img
                  src={`https://ghchart.rshah.org/39d353/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto"
                />
              </div>

              {/* GitHub Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Flame className="mx-auto mb-2 h-5 w-5 text-orange-400" />
                  <p className="text-xl font-bold text-foreground">300+</p>
                  <p className="text-xs text-muted-foreground">Contributions</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-green-400" />
                  <p className="text-xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Repositories</p>
                </div>
              </div>

              {/* View Profile Button */}
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <Github className="h-4 w-4" />
                View GitHub Profile
              </a>
            </div>
          </div>

          {/* LeetCode Section */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">LeetCode Stats</h3>
                  <a 
                    href={`https://leetcode.com/${leetcodeUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    @{leetcodeUsername}
                  </a>
                </div>
              </div>

              {/* LeetCode Card */}
              <div className="rounded-2xl border border-white/10 bg-background/50 p-4 overflow-hidden">
                <img
                  src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=JetBrains%20Mono&ext=heatmap`}
                  alt="LeetCode Stats"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Problem Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-center">
                  <p className="text-lg font-bold text-green-400">Easy</p>
                  <p className="text-xs text-muted-foreground">Solved</p>
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-center">
                  <p className="text-lg font-bold text-amber-400">Medium</p>
                  <p className="text-xs text-muted-foreground">Solved</p>
                </div>
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center">
                  <p className="text-lg font-bold text-red-400">Hard</p>
                  <p className="text-xs text-muted-foreground">Solved</p>
                </div>
              </div>

              {/* View Profile Button */}
              <a
                href={`https://leetcode.com/${leetcodeUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-foreground transition-all hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400"
              >
                <Trophy className="h-4 w-4" />
                View LeetCode Profile
              </a>
            </div>
          </div>
        </div>

        {/* Coding Philosophy Quote */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 p-8 text-center backdrop-blur-sm">
            <p className="text-xl font-medium text-foreground italic">
              "The only way to learn a new programming language is by writing programs in it."
            </p>
            <p className="mt-3 text-muted-foreground">— Dennis Ritchie</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperSection
