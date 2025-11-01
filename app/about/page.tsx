export default function AboutPage() {
  return (
    <main>
        <div className="flex flex-col items-center gap-6 mt-6">
            <h1 className="text-4xl">About Me</h1>
            <div className="h-0.5 bg-foreground w-72 rounded-full"></div>
            <p className="text-center max-w-xl">
              I am a passionate developer with experience in building web applications.
            </p>
        </div>
    </main>
  );
}