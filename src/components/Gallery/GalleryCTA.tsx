'use client'
import Link from 'next/link'
import React from 'react'

export default function GalleryCTA() {
  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-xl border border-slate-700 shadow-md">
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Gallery of Trying</h3>
      <p className="text-sm text-slate-300 mb-4">
        A curated collection of experiments, quick prototypes and visual notes — the place I try new ideas and iterate fast.
      </p>
      <div>
        <Link
          href="/gallery-of-trying"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium"
        >
          Open the gallery
        </Link>
      </div>
    </div>
  )
}