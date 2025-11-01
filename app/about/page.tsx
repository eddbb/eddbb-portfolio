import Underline from "@/components/Underline";

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h1 className="text-4xl">About Me</h1>
        <Underline />
        <p className="text-center max-w-xl">
          I am a passionate developer with experience in building web
          applications.
        </p>
      </div>
    </main>
  );
}
