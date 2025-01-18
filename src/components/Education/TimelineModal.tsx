import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'

interface TimelineModalProps {
  event: {
    title: string
    year: number
    details?: string
    image?: string
    link:string
  }
  onClose: () => void
}

export default function TimelineModal({ event, onClose }: TimelineModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <Link href={event.link}
         className="text-2xl font-bold mb-2 text-white">{event.title}</Link>
        <p className="text-blue-500 font-semibold mb-4">{event.year}</p>
        {event.image && (
          <div className="mb-4 flex justify-center">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={300}  // Adjusted back to smaller size
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        {event.details && (
          <p className="text-gray-300">{event.details}</p>
        )}
      </motion.div>
    </motion.div>
  )
}
