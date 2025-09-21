"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import { Github, Code, Trophy, Star, GitBranch, Zap } from "lucide-react"

const fetchGitHubContributions = async (username: string) => {
  let response = await axios.get(`/api/contribution?username=${username}`)
  if (response.data.sucess) {
    return response.data.data
  }
  //counter vercel 504
  response = await axios.get(`/api/contribution?username=${username}`)
  if (response.data.sucess) {
    return response.data.data
  }
}

interface ContributionsData {
  totalContributions: number
}

export default function GitHubLeetCodeStats() {
  const [leetCodeCount, setLeetCodeCount] = useState(0)
  const [githubContributions, setGithubContributions] = useState(0)
  const [contributionsData, setContributionsData] = useState<ContributionsData | null>(null)
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    fetchGitHubContributions("abdulmoiz248").then((data) => {
      setContributionsData(data)
      setDataReady(true)
    })
  }, [])

  useEffect(() => {
    if (dataReady && leetCodeCount < 270) {
      const timer = setTimeout(() => setLeetCodeCount((prevCount) => prevCount + 3), 20)
      return () => clearTimeout(timer)
    }
  }, [leetCodeCount, dataReady])

  useEffect(() => {
    if (dataReady && contributionsData && githubContributions < contributionsData.totalContributions) {
      const timer = setTimeout(
        () => setGithubContributions((prev) => Math.min(prev + 5, contributionsData.totalContributions)),
        40,
      )
      return () => clearTimeout(timer)
    }
  }, [githubContributions, dataReady, contributionsData])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text">
              Developer Stats
            </h1>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-purple-400" />
            </motion.div>
          </div>
          <p className="text-gray-400 text-lg">Tracking progress across platforms</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Github className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                    GitHub Contributions
                  </h2>
                  <p className="text-gray-400 text-sm">This year</p>
                </div>
              </div>

              {contributionsData && (
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-6xl font-bold text-green-400 mb-2"
                  >
                    {githubContributions}
                  </motion.div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">Commits, PRs, and Issues</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min((githubContributions / (contributionsData.totalContributions || 1)) * 100, 100)}%`,
                      }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <Code className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                    LeetCode Solved
                  </h2>
                  <p className="text-gray-400 text-sm">Problems completed</p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-6xl font-bold text-yellow-400 mb-2"
                >
                  {leetCodeCount}+
                </motion.div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">Algorithmic challenges</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((leetCodeCount / 255) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Real-time Updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
