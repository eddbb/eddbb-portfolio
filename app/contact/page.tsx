import Underline from "@/components/Underline";

export default function ContactPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h1 className="text-4xl">Contact Me</h1>
        <Underline />
        <p className="text-center max-w-xl">
          If you'd like to get in touch, feel free to reach out!
        </p>
      </div>
    </main>
  );
}
