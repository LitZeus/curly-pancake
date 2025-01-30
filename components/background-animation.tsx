"use client"

import { Meteors } from "@/components/magicui/meteors"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function BackgroundAnimation() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`} />
      <Meteors number={20} />
    </div>
  )
}

