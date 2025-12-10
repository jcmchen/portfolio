import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  img: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="flex flex-col">
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          className="object-contain w-full h-auto mb-2"
        />
        <h3 className="text-base hover:underline">
          {project.title} — {project.year}
        </h3>
      </div>
    </Link>
  );
}

