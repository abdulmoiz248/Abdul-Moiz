import { useMemo } from "react"

const items = Array.from({ length: 20 }, (_, i) => ({
  title: `Image ${i + 1}`,
  src: `/museum/${i + 1}.png`,
}))

export default function Gallery() {
  const shuffledItems = useMemo(() => [...items].sort(() => Math.random() - 0.5), [])

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {shuffledItems.map((item, i) => (
        <figure key={i} className="break-inside-avoid overflow-hidden rounded-2xl relative group">
          <img
            src={item.src || "/placeholder.svg"}
            className="w-full h-auto transform-gpu transition-all duration-500 ease-out opacity-90 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.02]"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm font-mono font-semibold tracking-wide text-center">{item.title}</figcaption>
        </figure>
      ))}
    </div>
  )
}
