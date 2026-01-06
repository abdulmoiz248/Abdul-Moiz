import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  logo?: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale, rotateX }}
      className="experience-card relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      <div className="absolute inset-0 experience-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-start gap-6 mb-6">
          {experience.logo ? (
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-12 h-12 object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-primary">
                {experience.company.charAt(0)}
              </span>
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1 truncate">
              {experience.title}
            </h3>
            <p className="text-muted-foreground font-medium truncate">
              {experience.company}
            </p>
          </div>
          
          <span className="text-sm text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1.5 rounded-full">
            {experience.period}
          </span>
        </div>
        
        <p className="text-foreground/80 leading-relaxed mb-6">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm bg-secondary/80 text-foreground/90 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Layer depth effect */}
      <div 
        className="absolute -inset-1 bg-gradient-to-br from-white/5 to-transparent rounded-2xl -z-10 blur-xl opacity-50"
        style={{ transform: `translateZ(-${(index + 1) * 20}px)` }}
      />
    </motion.div>
  );
};

export default ExperienceCard;
