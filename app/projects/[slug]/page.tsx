import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('projects'))
  
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const markdownFile = fs.readFileSync(path.join('projects', `${slug}.mdx`), 'utf-8')
  
  const { data: frontmatter, content } = matter(markdownFile)
  
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
      <article className="prose dark:prose-invert mx-auto">
        <h1>{frontmatter.title}</h1>
        <p className="text-muted-foreground">Published on: {new Date(frontmatter.date).toLocaleDateString()}</p>
        <MDXRemote source={content} />
      </article>
    </div>
  )
}

