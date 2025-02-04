"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="py-6 w-full bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-center items-center h-16">
        <p className="text-sm text-muted-foreground bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
          © {new Date().getFullYear()} Tejas • Built with passion
        </p>
      </div>
    </motion.footer>
  )
}
