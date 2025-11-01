import Underline from "@/components/Underline";

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h1 className="text-4xl">About Me</h1>
        <Underline />
        <p className="text-center max-w-xl">
          I am a passionate developer with experience in data science, machine
          learning, software development, and web development. I enjoy creating
          efficient and innovative solutions to complex problems. In my free
          time, I like to explore new technologies.
        </p>
      </div>
    </main>
  );
}
