import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const projectFolderPath = path.join(process.cwd(), "projects");
    const files = fs.readdirSync(projectFolderPath);
    
    const projectFiles = files.filter((filename) => filename.endsWith(".mdx"));

    const projects = await Promise.all(
      projectFiles.map(async (filename) => {
        const filePath = path.join(projectFolderPath, filename);
        const markdownFile = fs.readFileSync(filePath, "utf-8");

        const { frontmatter } = await compileMDX<{ title: string; date: string; description: string }>({
          source: markdownFile,
          options: { parseFrontmatter: true },
        });

        return {
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description,
          filename: filename.replace(".mdx", ""),
        };
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}