"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {  Sparkles, Terminal, ArrowRight } from "lucide-react"
import Link from "next/link"



const SkillIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 cursor-pointer"
  >
    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-lg">
      <Icon className="w-7 h-7 text-blue-300" />
    </div>
    <span className="text-sm text-white/70 font-light">{label}</span>
  </motion.div>
)

export default function About() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-[#0b0b1f] to-black text-white flex items-center justify-center relative overflow-hidden p-6">
      {/* Floating sparkles / particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Loading Animation */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 text-blue-400 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
        transition={{ duration: 0.9, ease: [0.45, 0, 0.55, 1] }}
        className="max-w-3xl w-full text-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl relative"
      >
       

        <motion.h2
          className="text-lg text-white/70 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Terminal className="inline w-5 h-5 text-blue-400 mr-1" />
          Full-Stack Developer & AI Specialist
        </motion.h2>

        <motion.p
          className="text-white/80 leading-relaxed text-base mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          I’m Abdul Moiz — a full-stack dev and problem solver crafting sleek, scalable, and smart digital systems.
          From blazing-fast NestJS APIs to AI pipelines that think for themselves — I build tech that transforms ideas
          into reality.
        </motion.p>

      

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="pt-6 border-t border-white/10 flex flex-col items-center gap-3"
        >
          <Link
            href="/gallery-of-trying"
            className="mt-3 group flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <span className="underline underline-offset-4 decoration-blue-400 group-hover:decoration-purple-400 group-hover:animate-pulse">
              Gallery of Trying
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <motion.p
            className="text-xs text-white/50 mt-3 leading-relaxed max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Step into the Gallery of Trying — a living archive of experiments, happy accidents, and near misses.
            Every ‘failure’ here is a step closer to mastery — proof that trying is where the magic starts.
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  )
}
