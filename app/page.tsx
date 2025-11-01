import Underline from "@/components/Underline";

export default function HomePage() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-6 mt-6 text-center">
        <h1 className="text-4xl">Hello, I'm Edvin Blomgren!</h1>
        <Underline />
        <p className="text-center max-w-xl">
          I am a MSc Computer Science student at KTH Royal Institute of
          Technology, specializing in data science, machine learning and
          software development.
        </p>
      </div>
    </div>
  );
}
