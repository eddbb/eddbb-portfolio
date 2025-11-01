import { FaGithub, FaPlay } from "react-icons/fa";
import Underline from "./Underline";

export default function ProjectDetail({ project }: { project: any }) {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 px-6 pb-10">
        <h1 className="text-4xl text-center">{project.title}</h1>
        <Underline />
        <p className="text-center max-w-xl">{project.short_description}</p>
        <div className="flex gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              className="flex gap-2 px-4 py-2 bg-gray-600 text-white rounded-2xl hover:bg-gray-800 transition"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          ) : (
            <div className="flex gap-2 px-4 py-2 bg-gray-600 text-white rounded-2xl cursor-not-allowed opacity-40">
              <FaGithub className="w-5 h-5" />
              GitHub
            </div>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              className="flex gap-2 px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-800 transition"
            >
              <FaPlay className="w-5 h-5" />
              Demo
            </a>
          ) : (
            <div className="flex gap-2 px-4 py-2 bg-green-600 text-white rounded-2xl cursor-not-allowed opacity-40">
              <FaPlay className="w-5 h-5" />
              Demo
            </div>
          )}
        </div>

        <div className="bg-foreground text-background text-left md:w-3xl w-full rounded-2xl p-4">
          <p className="font-bold">Description</p>
          <p className="whitespace-pre-line">{project.description}</p>
        </div>
        {project.contributions ? (
          <div className="bg-foreground text-background text-left md:w-3xl w-full rounded-2xl p-4">
            <p className="font-bold">Contributions</p>
            <p className="whitespace-pre-line">{project.contributions}</p>
          </div>
        ) : null}
        <div className="bg-foreground text-background text-left md:w-3xl w-full rounded-2xl p-4">
          <p className="font-bold">Tech Stack</p>
          {project.tech.join(", ")}
        </div>
        {project.image ? (
          <div className="bg-foreground text-background text-left md:w-3xl w-full rounded-2xl p-4">
            <p className="font-bold">Pictures</p>
            <img
              src={project.image}
              alt={project.title}
              className="md:w-3xl rounded-xl"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
