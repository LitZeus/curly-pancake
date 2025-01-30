"use client"

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2023-01-15",
    description: "Learn the basics of Next.js and how to set up your first project."
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    date: "2023-02-22",
    description: "Dive deep into Tailwind CSS and learn how to create stunning designs quickly."
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    date: "2023-03-30",
    description: "Explore the world of React Hooks and how they can simplify your code."
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    date: "2023-04-18",
    description: "Learn best practices for creating web applications that are accessible to all users."
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
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
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Link href={`/blog/${post.id}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
                      <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
                      <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

