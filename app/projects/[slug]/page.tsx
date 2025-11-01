import projects from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>; 
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; 

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
