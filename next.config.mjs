"use client"

import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from "react"
import { ModeToggle } from './mode-toggle'

const Tab = ({ children, href, isActive, setPosition }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-10"
    >
      <Link
        href={href}
        className={cn(
          "block px-3 py-1.5 text-xs sm:text-sm md:text-base transition-colors hover:text-primary",
          isActive ? "text-primary font-medium" : "text-muted-foreground"
        )}
      >
        {children}
      </Link>
    </li>
  )
}

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-full rounded-full bg-accent"
      style={{ top: 0 }}
    />
  )
}

export default function Header() {
  const pathname = usePathname()
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    if (latest <= 10) {
      setAtTop(true)
    } else {
      setAtTop(false)
    }
  })

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 flex items-center justify-center w-full z-50 p-2 sm:p-4 md:p-6"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full border backdrop-blur-lg shadow-[0_0_1rem_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_rgba(255,255,255,0.1)]",
          atTop ? "bg-background/80" : "bg-background/60"
        )}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }))
        }}
      >
        <div className="flex items-center justify-between">
          <ul className="relative flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Tab
                key={href}
                href={href}
                isActive={pathname === href}
                setPosition={setPosition}
              >
                {label}
              </Tab>
            ))}
            <Cursor position={position} />
          </ul>
          <div className="flex items-center gap-2 sm:gap-3 ml-4">
            <ModeToggle />
          </div>
        </div>
      </motion.nav>
    </motion.header>
  )
}

