import Intro from "@/components/museum/intro"
import Gallery from "@/components/museum/gallery"

export const metadata = {
  title: "Gallery of Trying",
  description: "A minimalist, black-and-white digital gallery of experiments, unfinished ideas, and creative misfires.",
}

export default function Page() {
  return (
    <main className="min-h-dvh">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Intro />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Gallery />
      </section>
    </main>
  )
}
