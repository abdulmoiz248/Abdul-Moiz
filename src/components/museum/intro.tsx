export default function Intro() {
  return (
    <header className="space-y-8 py-10 text-center animate-fade-up">
      <div className="space-y-6">
        <p className="text-primary font-medium tracking-wide text-sm uppercase">
          Experiments & Creative Journey
        </p>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
          <span className="text-foreground">The Gallery</span>
          <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
            of Trying
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Step into the Gallery of Trying — a living archive of experiments, flops, happy accidents, and near misses. 
          Every &apos;failure&apos; here is a snapshot of learning in progress, proof that trying is where the magic starts.
        </p>
      </div>
    </header>
  )
}
