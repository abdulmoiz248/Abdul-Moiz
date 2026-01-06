import { School, Clipboard, GraduationCap, Book, Laptop, ExternalLink } from 'lucide-react'

export interface TimelineEvent {
  id: number
  year: number
  title: string
  description: string
  icon: string
  details: string
  image: string
  link: string
}

const iconMap: Record<string, React.ElementType> = {
  School,
  Clipboard,
  GraduationCap,
  Book,
  Laptop,
}

interface TimelineCardProps {
  event: TimelineEvent
  index: number
  total: number
}

const TimelineCard = ({ event, index, total }: TimelineCardProps) => {
  const Icon = iconMap[event.icon] || School
  const topOffset = 100 + index * 30
  const isLast = index === total - 1

  return (
    <div
      className="sticky"
      style={{ 
        top: `${topOffset}px`,
        zIndex: index + 1,
        marginBottom: isLast ? '0' : '16px',
      }}
    >
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-6 shadow-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]"
          style={{
            boxShadow: '0 -8px 30px -10px rgba(0,0,0,0.8), 0 20px 50px -15px rgba(0,0,0,0.5)',
          }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Image */}
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                  const iconEl = document.createElement('div')
                  iconEl.className = 'text-accent'
                  target.parentElement!.appendChild(iconEl)
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity">
                <Icon className="h-8 w-8 text-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <Icon className="h-3.5 w-3.5" />
                  {event.year}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {event.title}
              </h3>
              <p className="mb-2 text-base text-muted-foreground">{event.description}</p>
              <p className="text-sm text-muted-foreground/70">{event.details}</p>
            </div>

            {/* Arrow indicator */}
            <div className="hidden items-center sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-10 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:block" />

      {events.map((event, index) => (
        <TimelineCard
          key={event.id}
          event={event}
          index={index}
          total={events.length}
        />
      ))}
    </div>
  )
}

export default Timeline
