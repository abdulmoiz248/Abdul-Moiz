import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Briefcase, Building2 } from "lucide-react";

const allExperiences = [
  
  {
    id: 3,
    title: "Private Tutor",
    company: "Free Lancing",
    period: "2024 - 2025",
    description:
      "Tutored a university student in core CS subjects like Distributed Computing, OS, and DSA—focused on concepts, assignments, projects, and boosting performance with hands-on examples.",
    technologies: ["Operating Systems", "Data Structures", "OOP", "Java"],
    logo: '/experience/tutor.png'
  },
 
  {
    id: 2,
    title: "Co-founder",
    company: "Zero Limit Apparel",
    period: "2024 - 2025",
    description:
      "As a co-founder of Zero Limit Apparel, I contributed to the brand's strategic direction, website and product development, marketing, and overall growth",
    technologies: ["Next.js", "React", "MongoDB", "Start-up Leadership"],
    logo: '/experience/zero-limit.png'
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Blunder Bot Technologies",
    period: "June, 2025 - August, 2025",
    description: "Developed TaskWise, an AI-powered project management app with RAG, automated task division, team-lead selection, AI-driven reports, and sentiment analysis.",
    technologies: ["RAG", "NLP", "AI Reports", "Sentiment Analysis", "Python"],
    logo: '/experience/blunder-bot.png'},
  {
    id: 5,
    title: "Associate Software Engineer Intern",
    company: "Axtra Studios",
    period: "July, 2025 - November, 2025",
    description: "Worked on scalable software engineering projects applying AI and core CS concepts. Hands-on experience with JavaScript, LLMs, frontend, and backend development.",
    technologies: ["JavaScript", "LLM", "Frontend", "Backend"],
    logo: "/experience/axtrastudios.png"
  }
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const reversedExperiences = [...allExperiences].reverse();

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated timeline of professional milestones and the expertise cultivated along the way.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/30 md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/20"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {reversedExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full border-4 transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-primary border-primary shadow-lg shadow-primary/30"
                          : "bg-background border-muted-foreground/30"
                      }`}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`ml-8 md:ml-0 w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      {/* Card glow effect */}
                      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                      
                      <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5">
                        {/* Card Header */}
                        <button
                          onClick={() => toggleExperience(index)}
                          className="w-full p-6 flex items-start gap-4 text-left transition-colors hover:bg-muted/30"
                        >
                          {/* Logo */}
                          <div className="relative flex-shrink-0">
                            {exp.logo ? (
                              <div className="w-14 h-14 rounded-xl overflow-hidden border border-border/50 bg-background shadow-sm group-hover:border-primary/30 transition-colors">
                                <img
                                  src={exp.logo}
                                  alt={exp.company}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-14 h-14 rounded-xl border border-border/50 bg-muted/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                                <Building2 className="w-6 h-6 text-muted-foreground" />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {exp.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-0.5">
                                  {exp.company}
                                </p>
                              </div>
                              <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center bg-background group-hover:border-primary/30 transition-colors"
                              >
                                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </motion.div>
                            </div>
                            <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full bg-muted/50 border border-border/50">
                              <span className="text-xs font-medium text-muted-foreground">
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </button>

                        {/* Expandable Content */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: openIndex === index ? "auto" : 0,
                            opacity: openIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-border/30">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      
      </div>
    </section>
  );
};

export default ExperienceSection;
