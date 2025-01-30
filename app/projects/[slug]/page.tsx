import MDXContent from "@/components/MDXContentClient";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export async function getStaticPaths() {
  const projectFolderPath = path.join(process.cwd(), "projects");
  const files = fs.readdirSync(projectFolderPath);
  const paths = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      params: { slug: filename.replace(".mdx", "") },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projectPath = path.join(process.cwd(), "projects", `${slug}.mdx`);
  const markdownFile = fs.readFileSync(projectPath, "utf-8");

  const { content, frontmatter } = await compileMDX<{ title: string; date: string; description: string }>({
    source: markdownFile,
    options: { parseFrontmatter: true },
  });

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

export default function ProjectDetail({ content, frontmatter }: { content: string; frontmatter: any }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <article className="prose dark:prose-invert mx-auto">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <MDXContent content={content} />
      </article>
    </div>
  );
}
