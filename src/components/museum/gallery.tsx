import fs from "fs"
import path from "path"
import { useMemo } from "react"

type Item = {
  title: string
  src: string
}

export default function Gallery({ items }: { items: Item[] }) {
  const shuffledItems = useMemo(() => [...items].sort(() => Math.random() - 0.5), [items])

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {shuffledItems.map((item, i) => (
        <figure key={i} className="break-inside-avoid overflow-hidden rounded-2xl relative group">
          <img
            src={item.src}
            className="w-full h-auto transform-gpu transition-all duration-500 ease-out opacity-90 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.02]"
            loading="lazy"
          />
       </figure>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const folderPath = path.join(process.cwd(), "public/museum")
  const files = fs.readdirSync(folderPath)

  const supportedExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"]

  const items = files
    .filter(file => supportedExtensions.some(ext => file.toLowerCase().endsWith(ext)))
    .map((file, i) => ({
      title: `Image ${i + 1}`,
      src: `/museum/${file}`,
    }))

  return { props: { items } }
}
