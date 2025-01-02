"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Github, Linkedin, Mail, Pencil, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div className="text-center space-y-4" {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
            Creative Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building beautiful, interactive experiences with code. Passionate about design, animation, and user experience.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Featured Work Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...fadeInUp}>
          {[1, 2, 3, 4].map((project) => (
            <Card
              key={project}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <Link href={`/project/${project}`}>
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?text=Project${project}`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Project {project}</h3>
                          <p className="text-sm text-muted-foreground">
                            Brief project description
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div {...fadeInUp}>
          <Card className="overflow-hidden border-none bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "React", "Next.js", "TypeScript", "Node.js",
                  "Tailwind CSS", "GraphQL", "PostgreSQL", "AWS"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border hover:border-primary transition-colors duration-300 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div className="space-y-4" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-center">My Hobbies</h2>
          <div className="flex justify-center gap-8">
            <Link href="https://example.com/photography" target="_blank" rel="noopener noreferrer" className="text-center hover:text-primary transition-colors duration-300">
              <Camera className="w-12 h-12 mx-auto mb-2" />
              <h3 className="font-semibold">Photography</h3>
            </Link>
            <Link href="https://example.com/portraits" target="_blank" rel="noopener noreferrer" className="text-center hover:text-primary transition-colors duration-300">
              <Pencil className="w-12 h-12 mx-auto mb-2" />
              <h3 className="font-semibold">Pencil Portraits</h3>
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center space-y-4" {...fadeInUp}>
          <h2 className="text-2xl font-bold">Let's Create Something Amazing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact" className="gap-2">
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

