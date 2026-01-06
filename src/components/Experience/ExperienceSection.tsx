'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const allExperiences = [
  {
    id: 1,
    title: "IT Team Member",
    company: "IEEE RAS Society",
    period: "2022 - 2023",
    logo: 'data:image/jpeg;base64,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',
    description:
      "A dedicated IT team member at RAS Society, ensuring seamless technology solutions and support for all events.",
    technologies: ["HTML", "CSS", "Event Management"],
  },
  {
    id: 2,
    title: "Co-founder",
    company: "Zero Limit Apparel",
    period: "2024 - 2025",
    description:
      "As a co-founder of Zero Limit Apparel, I contributed to the brand's strategic direction, website and product development, marketing, and overall growth",
    technologies: ["Next.js", "React", "MongoDB", "Start-up Leadership"],
    logo: 'https://zero-limit.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75'
  },
  {
    id: 3,
    title: "Private Tutor",
    company: "Free Lancing",
    period: "2024 - 2025",
    description:
      "Tutored a university student in core CS subjects like Distributed Computing, OS, and DSA—focused on concepts, assignments, projects, and boosting performance with hands-on examples.",
    technologies: ["Operating Systems", "Data Structures", "OOP", "Java"],
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Blunder Bot Technologies",
    period: "June, 2025 - August, 2025",
    description: "Developed TaskWise, an AI-powered project management app with RAG, automated task division, team-lead selection, AI-driven reports, and sentiment analysis.",
    technologies: ["RAG", "NLP", "AI Reports", "Sentiment Analysis", "Python"],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEj7BMECrAt8g/img-crop_100/img-crop_100/0/1719189330023?e=1764806400&v=beta&t=zlttNXl4MppXgxyutBK8MzuvWoMxPyq2tUzGF9r34Ho"
  },
  {
    id: 5,
    title: "Associate Software Engineer Intern",
    company: "Axtra Studios",
    period: "July, 2025 - November, 2025",
    description: "Worked on scalable software engineering projects applying AI and core CS concepts. Hands-on experience with JavaScript, LLMs, frontend, and backend development.",
    technologies: ["JavaScript", "LLM", "Frontend", "Backend"],
    logo: "https://www.axtrastudios.com/_next/static/media/axtra-studios-logo.80e67abb.svg"
  }
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Reverse the experiences array
  const reversedExperiences = [...allExperiences].reverse();

  // Auto-close when scrolling to next item
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const items = container.querySelectorAll('[data-experience-item]');
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if item is in view (centered)
        if (rect.top >= windowHeight * 0.3 && rect.top <= windowHeight * 0.5) {
          if (openIndex !== index) {
            setOpenIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [openIndex]);

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 md:py-32 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through my professional career and the skills I've cultivated along the way.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {reversedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              data-experience-item
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
              
              <div className="relative border border-slate-800/50 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90 backdrop-blur-sm shadow-2xl group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300">
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExperience(index)}
                  className="w-full p-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-emerald-500/5 hover:via-cyan-500/5 hover:to-transparent transition-all duration-300 group/btn"
                >
                  <div className="flex items-center gap-6 flex-1">
                    {exp.logo && (
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden border-2 border-slate-700/50 flex-shrink-0 shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 group-hover/btn:scale-110 group-hover/btn:border-emerald-500/40 transition-all duration-300">
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="h-full w-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-cyan-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <div className="text-left flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2 group-hover/btn:from-emerald-400 group-hover/btn:to-cyan-400 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{exp.company}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                        <span className="text-sm text-slate-500">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 group-hover/btn:border-emerald-500/40 group-hover/btn:from-emerald-500/10 group-hover/btn:to-cyan-500/10 transition-all duration-300"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400 group-hover/btn:text-emerald-400 transition-colors" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 space-y-6 border-t border-slate-800/50">
                    <div className="pt-6">
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => {
                          const gradients = [
                            'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400 hover:border-emerald-400/50 hover:from-emerald-500/30',
                            'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400 hover:border-cyan-400/50 hover:from-cyan-500/30',
                            'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400 hover:border-blue-400/50 hover:from-blue-500/30',
                            'from-violet-500/20 to-violet-600/10 border-violet-500/30 text-violet-400 hover:border-violet-400/50 hover:from-violet-500/30',
                            'from-fuchsia-500/20 to-fuchsia-600/10 border-fuchsia-500/30 text-fuchsia-400 hover:border-fuchsia-400/50 hover:from-fuchsia-500/30',
                          ];
                          const gradient = gradients[techIndex % gradients.length];
                          return (
                            <span
                              key={tech}
                              className={`px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-br ${gradient} border transition-all duration-300 shadow-sm`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default ExperienceSection;
