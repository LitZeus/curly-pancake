import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('projects'))
  
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const markdownFile = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8')
  
  const { data: frontmatter, content } = matter(markdownFile)
  
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <article className="prose dark:prose-invert mx-auto">
        <h1>{frontmatter.title}</h1>
        <MDXRemote source={content} />
      </article>
    </div>
  )
}

