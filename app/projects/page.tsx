import { MagicCard } from "@/components/MagicCard"; // Assuming MagicCard is in this path
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const components = {
  Image: (props: any) => (
    <Image
      {...props}
      width={800}
      height={450}
      alt={props.alt || ""}
      className={`${props.className || ""} max-w-full h-auto`}
    />
  ),
  img: (props: any) => (
    <Image
      {...props}
      width={800}
      height={450}
      alt={props.alt || ""}
      className={`${props.className || ""} max-w-full h-auto`}
    />
  ),
};

// Fetch all projects from the 'projects' directory
export async function generateStaticParams() {
  const projectFolderPath = path.join(process.cwd(), "projects");
  const files = fs.readdirSync(projectFolderPath);

  // Ensure we only consider `.mdx` files
  return files.filter((filename) => filename.endsWith(".mdx"));
}

// Get the metadata for the project
export async function generateMetadata() {
  return {
    title: "Projects",
    description: "Browse through the projects",
  };
}

// Display all projects
export default async function ProjectsPage() {
  const projectFolderPath = path.join(process.cwd(), "projects");
  const files = fs.readdirSync(projectFolderPath);

  // Filter to get only `.mdx` files
  const projectFiles = files.filter((filename) => filename.endsWith(".mdx"));

  // Read each project and compile it
  const projects = await Promise.all(
    projectFiles.map(async (filename) => {
      const filePath = path.join(projectFolderPath, filename);
      const markdownFile = fs.readFileSync(filePath, "utf-8");

      const { content, frontmatter } = await compileMDX<{ title: string; date: string; description: string }>({
        source: markdownFile,
        options: { parseFrontmatter: true },
      });

      return {
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        content,
        filename: filename.replace(".mdx", ""),
      };
    })
  );

  // Render the list of projects as cards
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-4xl font-semibold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.filename} href={`/projects/${project.filename}`} passHref>
            <MagicCard className="group hover:scale-105 transition-all bg-white shadow-lg rounded-xl p-6">
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Published on: {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p className="mt-2 text-base text-gray-700">{project.description}</p>
              </div>
            </MagicCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
