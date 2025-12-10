"use client";

import { MDXProvider } from "@mdx-js/react";

const components = {
  img: (props: any) => (
    <img {...props} className="rounded-lg shadow-md my-4 mx-auto" />
  ),
  a: (props: any) => (
    <a
      {...props}
      className="text-[rgb(50,116,216)] hover:underline hover:text-blue-700"
    />
  ),
  h1: (props: any) => (
    <h1 {...props} className="text-4xl font-bold my-6 text-gray-900" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-semibold my-4 text-gray-800" />
  ),
  p: (props: any) => (
    <p {...props} className="text-lg leading-relaxed my-4 text-gray-700" />
  ),
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </MDXProvider>
  );
}
