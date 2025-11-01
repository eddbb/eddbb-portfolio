"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const lineWidths: Record<string, [string, string, string]> = {
    "/": ["10%", "15%", "75%"],
    "/projects": ["20%", "30%", "50%"],
    "/about": ["30%", "45%", "25%"],
    "/contact": ["40%", "60%", "0%"],
  };

  const [leftWidth, middleWidth, rightWidth] =
    lineWidths[pathname || "/"] || ["20%", "30%", "50%"];

  return (
    <nav className="w-full bg-foreground sticky top-0 z-50">
      <div className="max-w mx-auto px-6 py-4 flex justify-center gap-32 text-background">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
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
