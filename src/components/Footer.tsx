'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
//import { submitMessage } from '../actions/submit-message'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="flex items-center justify-center">
        {pending ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
      </span>
    </motion.button>
  )
}

export default function StylishContactFooter() {
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(formData: FormData) {
    // const result = await submitMessage(formData)
    // if (result.success) {
    //   setMessage('')
    //   setFeedback(result.message)
    //   setTimeout(() => setFeedback(''), 5000)
    // } else {
    //   setFeedback(result.message)
    // }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Speak Your Mind, Anonymously
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your thoughts, unfiltered and untraced. Share what's on your mind.
        </motion.p>
        <form action={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your anonymous message here..."
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 ease-in-out"
              rows={5}
              required
            ></textarea>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SubmitButton />
            <AnimatePresence>
              {feedback && (
                <motion.p
                  className="text-green-400 text-lg flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <CheckCircle className="mr-2 w-5 h-5" />
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </form>
      </div>
    </footer>
  )
}

