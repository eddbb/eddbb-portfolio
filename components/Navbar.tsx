"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="w-full bg-foreground sticky top-0 z-50">
        <div className="max-w mx-auto px-6 py-4 flex justify-center gap-32 text-background">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/projects" className="">
            Projects
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
        </div>
      </nav>
    );

}