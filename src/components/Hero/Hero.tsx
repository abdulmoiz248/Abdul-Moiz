import { ArrowRight, Award, Users, Sparkles, Router } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPortrait from "@/assets/expert-portrait.png";
import { useRouter } from "next/navigation";


const stats = [
  { icon: Users, value: "20+", label: "Projects" },
  { icon: Award, value: "5+", label: "Tech Stacks" },
  { icon: Sparkles, value: "3", label: "AI Models" },
];

const HeroSection = () => {
  const router=useRouter()
  return (
  <section className="relative min-h-screen bg-black gradient-dark noise-overlay overflow-hidden pt-24 sm:pt-0">

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

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-8">
      

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-180px)]">
          {/* Left content */}
          <div className="order-2 lg:order-1 space-y-8 p-3">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide text-sm uppercase animate-fade-up">
                Full Stack & Machine Learning Engineer
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up-delay">
                <span className="text-foreground">Building</span>
                <br />
                <span className="text-gradient">Intelligent Systems</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up-delay-2">
                I design and develop full-stack applications with AI-powered features, scalable backends, and clean user experiences using modern technologies.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-2">
              <Button onClick={()=> router.push('/projects')}>
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-4 py-4"
              >
                About Me & Tech Stack →
              </a>
            </div>

          
          </div>

          {/* Right content - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up relative z-0">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full transform scale-90" />
              
              {/* Portrait container */}
              <div className="relative">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px] rounded-3xl overflow-hidden portrait-glow">
                  <img
                    src={'/me-2.jpg'}
                    alt="Expert portrait"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="hidden sm:block absolute -right-4 sm:-right-8 top-8 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Final Year</p>
                      <p className="text-sm font-semibold text-foreground">CS Student</p>
                    </div>
                  </div>
                </div>

                {/* Bottom info card */}
                <div className="hidden sm:block  absolute -left-4 sm:-left-8 bottom-12 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-2xl max-w-[200px]">
                  <p className="text-xs text-muted-foreground mb-1">Currently Building</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground/70">Healthcare AI Platform</span>
                  </div>
                  <p className="text-xs text-primary mt-1">Open to Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;