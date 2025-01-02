import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all">
            <Link href={`/blog/${post.id}`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

