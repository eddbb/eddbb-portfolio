import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <div className="flex gap-4 items-center justify-center w-full">
      <a
        href="mailto:edvin.blomgren@hotmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
      >
        <MdEmail className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/edvin-blomgren-2a157980/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/eddbb"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
}
