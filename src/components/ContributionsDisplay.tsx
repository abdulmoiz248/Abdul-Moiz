'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const fetchGitHubContributions = async (username: string) => {
  let response = await axios.get(`/api/contribution?username=${username}`)
  if(response.data.sucess){
    return response.data.data
  }
 //counter vercel 504
   response = await axios.get(`/api/contribution?username=${username}`)
  if(response.data.sucess){
    return response.data.data
  }
}

export default function GitHubLeetCodeStats() {
  const [leetCodeCount, setLeetCodeCount] = useState(0)
  const [githubContributions, setGithubContributions] = useState(0)
  const [contributionsData, setContributionsData] = useState<any>(null)
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    fetchGitHubContributions('abdulmoiz248').then((data) => {
      setContributionsData(data)
      setDataReady(true) 
    })
  }, [])

  useEffect(() => {
    if (dataReady && leetCodeCount < 200) {
      const timer = setTimeout(() => setLeetCodeCount((prevCount) => prevCount + 3), 20)
      return () => clearTimeout(timer)
    }
  }, [leetCodeCount, dataReady])

  useEffect(() => {
    if (dataReady && contributionsData && githubContributions < contributionsData.totalContributions) {
      const timer = setTimeout(() => setGithubContributions((prev) => Math.min(prev + 5, contributionsData.totalContributions)), 10)
      return () => clearTimeout(timer)
    }
  }, [githubContributions, dataReady, contributionsData])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Developer Stats
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">GitHub Contributions</h2>
          {contributionsData && (
            <div className="text-5xl font-bold mb-4 text-green-400">
              {githubContributions}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">LeetCode Solved</h2>
          <div className="text-5xl font-bold text-yellow-400">{leetCodeCount}+</div>
        </motion.div>
      </div>
    </div>
  )
}
