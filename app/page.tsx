"use client"

import { BackgroundAnimation } from '@/components/background-animation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Camera, FileText, Github, Linkedin, Mail, Pencil, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1", slug: "project-1" },
  { id: 2, title: "Project 2", description: "A brief description of Project 2", slug: "project-2" },
  { id: 3, title: "Project 3", description: "A brief description of Project 3", slug: "project-3" },
  { id: 4, title: "Project 4", description: "A brief description of Project 4", slug: "project-4" },
]

export default function Page() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-background" />
        <BackgroundAnimation />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero Section */}
          <motion.div className="text-center space-y-4" {...fadeInUp}>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Creative Developer
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Building beautiful, interactive experiences with code. Passionate about design, animation, and user experience.
            </motion.p>
            <motion.div 
  className="flex items-center justify-center gap-4 pt-4"
  {...fadeInUp}
  transition={{ delay: 0.4 }}
>
  {[
    { icon: Github, href: "https://github.com/LitZeus", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/tejasathalye", label: "LinkedIn" },
    { icon: Mail, href: "mailto:me.tejasathalye@gmail.com", label: "Email" },
  ].map(({ icon: Icon, href, label }, index) => (
    <motion.div
      key={href}
      whileHover={{ scale: 1.2, y: -5 }}  // Apply scaling and slight vertical translation
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.0001 + index * 0.2 }}
    >
      <Link
        href={href}
        className="p-2 rounded-full transition-all duration-300"
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
      </Link>
    </motion.div>
  ))}
</motion.div>

          </motion.div>

          {/* Featured Work Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6" 
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={`/placeholder.svg?text=${project.title}`}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <Card className="overflow-hidden border-none bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  {...fadeInUp}
                  transition={{ delay: 1 }}
                >
                  {[
                    "React", "Next.js", "TypeScript", "Node.js",
                    "Tailwind CSS", "GraphQL", "PostgreSQL", "AWS"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border hover:border-primary transition-colors duration-300 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div 
            className="space-y-4" 
            {...fadeInUp}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-center">My Hobbies</h2>
            <div className="flex justify-center gap-8">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://example.com/photography" target="_blank" rel="noopener noreferrer" className="text-center hover:text-primary transition-colors duration-300">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="font-semibold">Photography</h3>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://example.com/portraits" target="_blank" rel="noopener noreferrer" className="text-center hover:text-primary transition-colors duration-300">
                  <Pencil className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="font-semibold">Pencil Portraits</h3>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="relative space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-lg bg-gradient-to-b from-background/50 to-background/30 border backdrop-blur-sm" 
            {...fadeInUp}
            transition={{ delay: 1.4 }}
          >
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <motion.h2 
                className="text-3xl font-bold"
                style={{ y: textY }}
              >
                Let's Create Something Amazing
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground"
                style={{ y: textY }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Link href="/contact" className="gap-2">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <FileText className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

