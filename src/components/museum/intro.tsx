export default function Intro() {
  return (
    <header className="space-y-6 py-10 text-center">
      <h1 className="font-mono font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-5xl md:text-7xl">
        The Gallery of Trying
      </h1>
      <p className="font-mono text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
        {
          "Step into the Gallery of Trying — a living archive of experiments, flops, happy accidents, and near misses. Every ‘failure’ here is a snapshot of learning in progress, proof that trying is where the magic starts."
        }
      </p>
    </header>
  )
}
