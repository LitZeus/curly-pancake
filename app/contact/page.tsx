"use client"

import { useEffect, useRef } from 'react'
import { createSidebar } from '@typeform/embed'
import '@typeform/embed/build/css/sidebar.css'

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
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      <div ref={containerRef}></div>
    </div>
  )
}

