"use client"

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1", slug: "project-1" },
  { id: 2, title: "Project 2", description: "A brief description of Project 2", slug: "project-2" },
  { id: 3, title: "Project 3", description: "A brief description of Project 3", slug: "project-3" },
  { id: 4, title: "Project 4", description: "A brief description of Project 4", slug: "project-4" },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Card
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/projects/${project.slug}`}>
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?text=${project.title}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

