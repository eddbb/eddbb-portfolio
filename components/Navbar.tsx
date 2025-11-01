"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, MouseEvent } from "react";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

export default function Navbar() {
  const pathname = usePathname();

  const lineWidths: Record<string, [string, string, string]> = {
    "/": ["10%", "15%", "75%"],
    "/projects": ["20%", "30%", "50%"],
    "/about": ["30%", "45%", "25%"],
    "/contact": ["40%", "60%", "0%"],
  };

  const [leftWidth, middleWidth, rightWidth] = lineWidths[pathname || "/"] || [
    "20%",
    "30%",
    "50%",
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-foreground sticky top-0 z-50">
      <div className="hidden max-w mx-auto px-6 py-4 md:flex justify-center gap-32 text-background">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div
        className={`md:hidden flex flex-col items-center gap-4 text-background overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>

      <div
        className="md:hidden flex flex-col cursor-pointer gap-1 items-center"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <RiArrowUpWideFill className="w-8 h-8 text-background" />
        ) : (
          <RiArrowDownWideFill className="w-8 h-8 text-background" />
        )}
      </div>

      <div className="flex h-1 w-full">
        <div
          className="bg-(--middleground) transition-all duration-500"
          style={{ width: leftWidth }}
        ></div>
        <div
          className="bg-(--middleground-2) transition-all duration-500 rounded-r-full"
          style={{ width: middleWidth }}
        ></div>
        <div
          className="bg-foreground transition-all duration-500"
          style={{ width: rightWidth }}
        ></div>
      </div>
    </nav>
  );
}
