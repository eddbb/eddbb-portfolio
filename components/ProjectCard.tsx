import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  if (!project.image_header) {
    project.image_header = "/projects/default.webp";
  }
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="w-lg rounded-2xl overflow-hidden hover:shadow-[0_4px_6px_1px_var(--middleground),0_2px_4px_1px_var(--middleground)] transition relative">
        <img
          src={project.image_header}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-2 left-2 bg-foreground rounded-md text-background">
          <h2 className="text-sm font-bold p-1">{project.status}</h2>
        </div>

        <div className="p-4 bg-foreground text-background rounded-t-lg -mt-6 relative z-10">
          <h3 className="text-xl mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.short_description}</p>
          <div className="text-sm text-(--middleground-2)">
            {project.tech.slice(0, 3).join(", ")} and more...
          </div>
        </div>
      </div>
    </Link>
  );
}
