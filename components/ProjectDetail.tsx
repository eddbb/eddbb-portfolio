import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectDetail({ project }: { project: any }) {
  if (!project.image) {
    project.image = "/projects/default.webp";
  }
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6">
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
              {project.description}
            </div>
            <div className="bg-foreground text-background text-left w-3xl rounded-2xl p-4">
              <p className="font-bold">Contributions</p>
              {project.description}
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

      

      
      <p className="text-gray-700 mb-4"></p>
      <p className="text-sm text-gray-500 mb-4">
        Technologies: {project.tech.join(", ")}
      </p>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          View Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Live Demo
        </a>
      </div>
    </main>
  );
}
