"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { User, Github, Linkedin, Twitter, Mail, Instagram, Globe } from "lucide-react";
import { LeetCodeIcon, WhatsAppIcon } from "../Layouts/Header";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; href?: string }
>(({ className, children, href }, ref) => {
  const content = (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 md:size-16 items-center justify-center rounded-full border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
});

Circle.displayName = "Circle";

const SocialBeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const socials = [
    { ref: githubRef, icon: Github, href: "https://github.com/abdulmoiz248", label: "GitHub" },
    { ref: linkedinRef, icon: Linkedin, href: "https://www.linkedin.com/in/abdul-moiz-170222246/", label: "LinkedIn" },
    { ref: twitterRef, icon: Twitter, href: "https://leetcode.com/abdul248/", label: "LeetCode" },
    { ref: emailRef, icon: Mail, href: "mailto:moiz20920@gmail.com", label: "Email" },
    { ref: instagramRef, icon: Instagram, href: "https://instagram.com/_abdul__moiz_", label: "Instagram" },
    { ref: portfolioRef, icon: Globe, href:    `https://wa.me/923080485737?text=Hello,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20potential%20opportunity.`, label: "Whatsapp" },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Reach out through any of these platforms — I'm always excited to connect!
          </p>
        </div>

        {/* Beam Animation Container */}
        <div
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] w-full"
        >
          {/* Center User Circle */}
          <Circle
            ref={centerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 md:size-24 bg-gradient-to-br from-primary to-primary/70 border-primary/50"
          >
            <User className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
          </Circle>

          {/* Top Row */}
          <Circle
            ref={githubRef}
            href={socials[0].href}
            className="absolute top-8 left-1/4 -translate-x-1/2"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          <Circle
            ref={linkedinRef}
            href={socials[1].href}
            className="absolute top-8 right-1/4 translate-x-1/2"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          {/* Middle Row */}
          <Circle
            ref={twitterRef}
            href={socials[2].href}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
          >
           <LeetCodeIcon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          <Circle
            ref={emailRef}
            href={socials[3].href}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
          >
            <Mail className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          {/* Bottom Row */}
          <Circle
            ref={instagramRef}
            href={socials[4].href}
            className="absolute bottom-8 left-1/4 -translate-x-1/2"
          >
            <Instagram className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          <Circle
            ref={portfolioRef}
            href={socials[5].href}
            className="absolute bottom-8 right-1/4 translate-x-1/2"
          >
            <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </Circle>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={githubRef}
            curvature={-50}
            duration={4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={linkedinRef}
            curvature={50}
            duration={4.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={twitterRef}
            curvature={-30}
            duration={5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={emailRef}
            curvature={30}
            duration={4.2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={instagramRef}
            curvature={50}
            duration={4.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={portfolioRef}
            curvature={-50}
            duration={5.2}
          />
        </div>

        {/* CTA Text */}
        <p className="text-center text-muted-foreground mt-8">
          Click on any icon to connect with me!
        </p>
      </div>
    </section>
  );
};

export default SocialBeamSection;
