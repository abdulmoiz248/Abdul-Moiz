import { useState, useEffect } from "react";
import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aliya Haider",
    role: "Student @ Abu Dhabi University",
    content: "I have been working with Mr. Abdul Moiz for the past 2y on multiple side projects related to Python, Java, and AI, and i must say that he focuses more on detail, and also has great analytical and problem solving skills. Would be delighted to work with him in the future.",
    rating: 5,
  },
  {
    id: 2,
    name: "Subhan Shahzad",
    role: "Co-Founder @ Axtra Studios",
    content: `Moiz it was too good to have you. You did great work under my supervision, too many requirements and all revisions were handled too perfectly. Thankyou!`,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Client Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Words That <span className="text-primary">Matter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Quality over quantity — here's what collaborators have to say
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Large Quote Display */}
          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border border-primary/10 p-8 md:p-12 overflow-hidden">
            {/* Decorative Quote */}
            <Quote className="absolute top-6 left-6 w-20 h-20 text-primary/10" />
            <Quote className="absolute bottom-6 right-6 w-20 h-20 text-primary/10 rotate-180" />

            {/* Floating Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

            {/* Content */}
            <div className={`transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-primary fill-primary"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed text-center mb-10 max-w-3xl mx-auto">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground text-xl font-bold mb-4">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-10 h-3 bg-primary"
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Decorations */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent rounded-full" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent rounded-full" />
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default TestimonialsSection;
