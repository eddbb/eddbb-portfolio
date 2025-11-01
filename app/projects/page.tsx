export default function ProjectsPage() {
  return (
    <main>
        <div className="flex flex-col items-center gap-6 mt-6">
            <h1 className="text-4xl">My Projects</h1>
            <div className="h-0.5 bg-foreground w-72 rounded-full"></div>
            <p className="text-center max-w-xl">
              Here are some of the projects I've been working on recently.
            </p>
        </div>
    </main>
  );
}