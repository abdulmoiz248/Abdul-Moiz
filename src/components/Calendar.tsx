import { motion } from 'framer-motion'

interface CalendarProps {
  weeks: {
    contributionDays: {
      contributionCount: number
      date: string
    }[]
  }[]
}

export function Calendar({ weeks }: CalendarProps) {
  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-700'
    if (count < 5) return 'bg-green-900'
    if (count < 10) return 'bg-green-700'
    return 'bg-green-500'
  }

  return (
    <div className="grid grid-cols-7 gap-1">
      {weeks.flatMap((week, weekIndex) =>
        week.contributionDays.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: (weekIndex * 7 + dayIndex) * 0.01 }}
            className={`w-3 h-3 rounded-sm ${getColor(day.contributionCount)}`}
            title={`${day.contributionCount} contributions on ${day.date}`}
          />
        ))
      )}
    </div>
  )
}

