import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Underline from "@/components/Underline";

export default function ProjectsPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 pb-10">
        <h1 className="text-4xl">My Projects</h1>
        <Underline />
        <p className="text-center max-w-xl">
          Here are some of the projects I've been working on recently.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
