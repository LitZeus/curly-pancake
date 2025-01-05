"use client"

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'absolute rounded-full bg-primary/10 dark:bg-primary/20'
      
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      const startX = Math.random() * container.offsetWidth
      const startY = Math.random() * container.offsetHeight
      star.style.left = `${startX}px`
      star.style.top = `${startY}px`
      
      container.appendChild(star)

      const duration = Math.random() * 3 + 2
      const endX = Math.random() * container.offsetWidth
      const endY = Math.random() * container.offsetHeight

      const animation = star.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0 },
          { opacity: 1, offset: 0.1 },
          { opacity: 1, offset: 0.9 },
          { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          easing: 'linear',
          iterations: Infinity
        }
      )

      return () => {
        animation.cancel()
        container.removeChild(star)
      }
    }

    const starCount = 50
    const cleanupFunctions = Array.from({ length: starCount }, createStar)

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])

  return (
    <motion.div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

