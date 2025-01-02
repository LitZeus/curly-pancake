"use client"

import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-center w-full z-50 p-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="px-6 py-3 rounded-full border bg-background/80 backdrop-blur-lg shadow-[0_0_1rem_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_rgba(255,255,255,0.1)] relative"
      >
        <div className="flex items-center justify-between md:justify-center">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className={`flex flex-col md:flex-row items-center gap-8 ${mobileMenuOpen ? 'absolute top-full left-0 right-0 mt-2 p-4 bg-background/80 backdrop-blur-lg rounded-lg border' : 'hidden md:flex'}`}>
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
                  "relative text-sm transition-colors hover:text-primary",
                  pathname === href ? "text-primary font-medium" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
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
            <div className="md:flex items-center gap-3 pl-3 md:border-l">
              <ModeToggle />
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  )
}

