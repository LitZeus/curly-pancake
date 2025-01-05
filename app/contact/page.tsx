"use client"

import { useEffect, useRef } from 'react'
import { createSidebar } from '@typeform/embed'
import '@typeform/embed/build/css/sidebar.css'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { open, close } = createSidebar('YOUR_TYPEFORM_ID', {
      hidden: true,
      onReady: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none'
        }
      },
    })

    open()

    return () => {
      close()
    }
  }, [])

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      ></motion.div>
    </div>
  )
}

