
import CTASection from "@/components/CTASection";
import HobbiesSection from "@/components/HobbiesSection";
import { MagicCard } from "@/components/MagicCard";
import SkillsSection from "@/components/SkillsSection";
import Socials from "@/components/Socials";
import fs from "fs";
import { ArrowUpRight } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";

type Frontmatter = {
  title: string;
  date: string;
  description: string;
};


async function getProjects() {
  try {
    const projectFolderPath = path.join(process.cwd(), "projects");
    const files = fs.readdirSync(projectFolderPath);
    const projectFiles = files.filter((filename) => filename.endsWith(".mdx"));

    const projects = await Promise.all(
      projectFiles.map(async (filename) => {
        const filePath = path.join(projectFolderPath, filename);
        const markdownFile = fs.readFileSync(filePath, "utf-8");

        const { frontmatter } = await compileMDX<Frontmatter>({
          source: markdownFile,
          options: { parseFrontmatter: true },
        });

        if (!frontmatter) {
          console.error(`Missing frontmatter in file: ${filename}`);
        }

        return {
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description,
          filename: filename.replace(".mdx", ""),
        };
      })
    );

    // Return the first 4 projects as they appear in the folder
    return projects.slice(0, 4);
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
              Tejas Athalye
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tech enthusiast building AI, Web & Web3, & automation solutions with a hacker's mindset.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Socials />
            </div>
          </div>

          {/* Featured Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.filename}>
                <MagicCard className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <Link href={`/projects/${project.filename}`}>
                    <div className="p-0">
                      <div className="aspect-video relative w-full h-[240px]"> {/* Added fixed height */}
                        <Image
                          src="/api/placeholder/800/450" // Using placeholder API instead
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex justify-between items-end">
                            <div className="max-w-[80%]"> {/* Added max-width to prevent text overflow */}
                              <h3 className="font-semibold text-lg mb-1 text-white">{project.title}</h3>
                              <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </MagicCard>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <SkillsSection />

          {/* Hobbies Section */}
          <HobbiesSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </div>
    </div>
  );
}