"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle,  Heart, ArrowUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
  
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage("");
        setFeedback("Your message has been sent!");
      } else {
        setFeedback(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFeedback("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(""), 5000);
    }
  };

 

  const quickLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#socials" },
  ];



  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Anonymous Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Anonymous Message
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Speak Your Mind,{" "}
                <span className="text-primary">Anonymously</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your thoughts, unfiltered and untraced. Share what&apos;s on your mind — 
                feedback, appreciation, or just a random thought.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your anonymous message here..."
                    className="relative w-full p-4 bg-card/50 text-foreground border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/30 resize-none transition-all duration-300 placeholder:text-muted-foreground/50"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    disabled={isSubmitting}
                    className="group"
                  >
                    <span className="flex items-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>

                  <AnimatePresence>
                    {feedback && (
                      <motion.p
                        className="text-primary text-sm flex items-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <CheckCircle className="mr-2 w-4 h-4" />
                        {feedback}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>

            {/* Right Side - Quick Links & Socials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

          

              {/* Back to Top */}
              <div>
                <button
                  onClick={scrollToTop}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-sm">Back to top</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Designed with <Heart className="w-4 h-4 text-primary animate-pulse" /> by{" "}
                <span className="text-primary font-medium">Abdul Moiz</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
