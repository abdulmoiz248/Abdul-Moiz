import fs from "fs"
import path from "path"
import Intro from "@/components/museum/intro"
import Gallery from "@/components/museum/gallery"

export const metadata = {
  title: "Gallery of Trying",
  description: "A minimalist, black-and-white digital gallery of experiments, unfinished ideas, and creative misfires.",
}

export default async function Page() {
  const folderPath = path.join(process.cwd(), "public/museum")
  const files = fs.readdirSync(folderPath)
  const supportedExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"]

  const items = files
    .filter(file => supportedExtensions.some(ext => file.toLowerCase().endsWith(ext)))
    .map((file, i) => ({
      title: `Image ${i + 1}`,
      src: `/museum/${file}`,
    }))

  return (
    <main className="relative min-h-screen bg-background  noise-overlay overflow-hidden">
      {/* Radial glow effect */}
      <div className="absolute inset-0 gradient-radial-glow" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 pt-32">
          <Intro />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <Gallery items={items} />
        </section>
      </div>
    </main>
  )
}
