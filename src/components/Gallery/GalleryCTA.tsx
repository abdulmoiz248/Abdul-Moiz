import { Download, Sparkles, ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border border-primary/10 p-8 md:p-10 h-full overflow-hidden group-hover:border-primary/30 transition-all duration-500">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              
              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Download className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Get My Resume
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Download my complete resume with detailed experience, skills, and achievements. 
                  See the full picture of what I bring to the table.
                </p>

                <Button
                
                  className="w-full sm:w-auto group/btn"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <div className="w-2 h-2 rounded-full bg-primary/70" />
              </div>
            </div>
          </div>

          {/* Gallery of Trying Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border border-primary/10 p-8 md:p-10 h-full overflow-hidden group-hover:border-primary/30 transition-all duration-500">
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full" />

              {/* Floating Sparkles */}
              <Sparkles className="absolute top-6 right-6 w-6 h-6 text-primary/30 animate-float" />
              <Sparkles className="absolute bottom-12 left-12 w-4 h-4 text-primary/20 animate-float" style={{ animationDelay: "1s" }} />
              
              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Palette className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Gallery of Trying
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Step into a living archive of experiments, flops, happy accidents, and near misses. 
                  Every "failure" here is proof that trying is where the magic starts.
                </p>

                <Button
                 
                  className="w-full sm:w-auto group/btn border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <Link href="/gallery-of-trying">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Gallery
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Link>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/70" />
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <div className="w-2 h-2 rounded-full bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
