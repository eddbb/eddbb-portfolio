import Underline from "@/components/Underline";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h1 className="text-4xl">Contact Me</h1>
        <Underline />
        <p className="text-center max-w-xl">
          If you'd like to get in touch, feel free to reach out!
        </p>
        <div className="flex gap-4">
          <a href="mailto:edvin.blomgren@hotmail.com" target="_blank">
            <MdEmail className="inline w-6 h-6 mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/edvin-blomgren-2a157980/"
            target="_blank"
          >
            <FaLinkedin className="inline w-6 h-6 mr-2" />
          </a>
          <a href="https://github.com/eddbb" target="_blank">
            <FaGithub className="inline w-6 h-6 mr-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
