import Underline from "@/components/Underline";
import ContactLinks from "@/components/ContactLinks";

export default function ContactPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 px-6 pb-10">
        <h1 className="text-4xl">Contact Me</h1>
        <Underline />
        <p className="text-center max-w-xl">
          If you'd like to get in touch, feel free to reach out!
        </p>
        <ContactLinks />
      </div>
    </main>
  );
}
