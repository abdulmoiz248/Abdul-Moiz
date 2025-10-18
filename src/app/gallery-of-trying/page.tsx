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
    <main className="min-h-dvh">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Intro />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Gallery items={items} />
      </section>
    </main>
  )
}
