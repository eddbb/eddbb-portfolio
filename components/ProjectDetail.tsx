import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectDetail({ project }: { project: any }) {
  if (!project.image) {
    project.image = "/projects/default.webp";
  }
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 pb-10">
            <h1 className="text-4xl">{project.title}</h1>
            <div className="h-0.5 bg-foreground w-72 rounded-full"></div>
            <p className="text-center max-w-xl">{project.short_description}</p>
            <div className="flex gap-4">
              <a className="flex gap-2 px-4 py-2 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
                href={project.github} target="_blank">
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a className="flex gap-2 px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-800"
                href={project.demo} target="_blank">
                <FaPlay className="w-5 h-5" />
                Demo
              </a>
            </div>
            <div className="bg-foreground text-background text-left w-3xl rounded-2xl p-4">
              <p className="font-bold">Description</p>
              <p className="whitespace-pre-line">{project.description}</p>
            </div>
            <div className="bg-foreground text-background text-left w-3xl rounded-2xl p-4">
              <p className="font-bold">Contributions</p>
              <p className="whitespace-pre-line">{project.contributions}</p>
            </div>
            <div className="bg-foreground text-background text-left w-3xl rounded-2xl p-4">
              <p className="font-bold">Tech Stack</p>
              {project.tech.join(", ")}
            </div>
            <div className="bg-foreground text-background text-left w-3xl rounded-2xl p-4">
              <p className="font-bold">Pictures</p>
              <img src={project.image} alt={project.title} className="w-3xl rounded-xl" />
            </div>
      </div>
    </main>
  );
}
