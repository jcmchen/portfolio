// export default function ProjectDetail({ params }) {
//   const { slug } = params;

//   // 模擬作品資料庫
//   const projectData = {
//     "morphing-wood": {
//       title: "Morphing Wood",
//       description: "A humidity-responsive morphing wood prototype.",
//       img: "/images/p1.jpg",
//     },
//     "energy-retrofit": {
//       title: "Energy Retrofit",
//       description: "A study on sustainable building retrofits.",
//       img: "/images/p2.jpg",
//     },
//     "data-visualization": {
//       title: "Data Visualization",
//       description: "Interactive visualization of urban housing data.",
//       img: "/images/p3.jpg",
//     },
//   };

//   const project = projectData[slug];

//   if (!project) return <h1>Project Not Found</h1>;

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
//       <img src={project.img} alt={project.title} className="rounded-lg mb-6" />
//       <p className="text-lg">{project.description}</p>
//     </div>
//   );
// }

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";
// import ProjectContent from "@/components/ProjectContent";

// export default async function ProjectPage({ params }: { params: { slug: string } }) {
//   const filePath = path.join(process.cwd(), "content/projects", `${params.slug}.mdx`);
//   const fileContents = fs.readFileSync(filePath, "utf-8");

//   const { content, data } = matter(fileContents);
//   const mdxSource = await serialize(content);

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
//       <ProjectContent source={mdxSource} />
//     </div>
//   );
// }

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import ProjectContent from "@/components/ProjectContent";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/app/projects", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <ProjectContent source={mdxSource} />
    </div>
  );
}


