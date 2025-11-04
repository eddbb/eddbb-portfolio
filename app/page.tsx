import Underline from "@/components/Underline";
import ThemeToggle from "@/components/ThemeToggle";
import ContactLinks from "@/components/ContactLinks";

export default function HomePage() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-6 mt-6 px-6 pb-10">
        <h1 className="text-4xl text-center">Hello, I'm Edvin Blomgren!</h1>
        <Underline />
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8 items-center">
          <img
            src="/me/home-2.webp"
            alt="Edvin Blomgren"
            className="h-50 w-50 rounded-full border-2 border-foreground object-cover text-center"
          />
          <div className="flex flex-col items-center md:items-start gap-3 max-w-sm">
            <p className="text-center">
              I am a MSc Computer Science student at KTH Royal Institute of
              Technology, specialising in data science, machine learning and
              software development.
            </p>
            <ContactLinks />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
