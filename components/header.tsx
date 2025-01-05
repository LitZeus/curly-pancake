"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-center w-full z-50 p-2 sm:p-4 md:p-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full border bg-background/80 backdrop-blur-lg shadow-[0_0_1rem_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_rgba(255,255,255,0.1)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative text-xs sm:text-sm md:text-base transition-colors hover:text-primary px-1 py-0.5",
                  pathname === href ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {pathname === href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-px w-full bg-primary"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 ml-4">
            <ModeToggle />
          </div>
        </div>
      </motion.nav>
    </header>
  )
}

