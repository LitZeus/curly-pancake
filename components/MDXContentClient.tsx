"use client";

import { useMDXComponents } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

// Custom components for MDX rendering
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

export default function MDXContent({ content }: { content: any }) {
  return <MDXRemote source={content} components={useMDXComponents(components)} />;
}
