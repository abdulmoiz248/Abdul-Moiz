import { ArrowRight, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPortrait from "@/assets/expert-portrait.png";

const stats = [
  { icon: Users, value: "500+", label: "Clients" },
  { icon: Award, value: "15+", label: "Years" },
  { icon: Sparkles, value: "98%", label: "Success" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-dark noise-overlay overflow-hidden">
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
        {/* Top navigation hint */}
        <nav className="flex items-center justify-between mb-16 animate-fade-up">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">ExpertBrand</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Work</a>
            <Button  size="sm">Contact</Button>
          </div>
        </nav>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-180px)]">
          {/* Left content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide text-sm uppercase animate-fade-up">
                Strategy Consultant & Advisor
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up-delay">
                <span className="text-foreground">Meet the</span>
                <br />
                <span className="text-gradient">Expert</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up-delay-2">
                Helping ambitious leaders and businesses unlock their full potential through strategic guidance and proven frameworks.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-2">
              <Button>
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a 
                href="#learn-more" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-4 py-4"
              >
                Learn more about my approach →
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50 animate-fade-up-delay-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full transform scale-90" />
              
              {/* Portrait container */}
              <div className="relative">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px] rounded-3xl overflow-hidden portrait-glow">
                  <img
                    src={'/me.jpg'}
                    alt="Expert portrait"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -right-4 sm:-right-8 top-8 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Certified</p>
                      <p className="text-sm font-semibold text-foreground">Top Expert</p>
                    </div>
                  </div>
                </div>

                {/* Bottom info card */}
                <div className="absolute -left-4 sm:-left-8 bottom-12 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-2xl max-w-[200px]">
                  <p className="text-xs text-muted-foreground mb-1">Featured in</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground/70">Forbes</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-xs font-medium text-foreground/70">Inc.</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-xs font-medium text-foreground/70">Fast Co</span>
                  </div>
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