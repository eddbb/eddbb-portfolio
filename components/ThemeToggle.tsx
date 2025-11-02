"use client";

import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
import { RiResetLeftFill } from "react-icons/ri";

const THEMES = [
  "light",
  "light-inverted",
  "pink",
  "pink-inverted",
  "purple",
  "purple-inverted",
  "brown",
  "brown-inverted",
  "green",
  "green-inverted",
] as const;
type Theme = (typeof THEMES)[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = THEMES.includes(saved as Theme)
      ? (saved as Theme)
      : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = () => {
    if (!theme) return;
    const currentIndex = THEMES.indexOf(theme);
    const next = THEMES[(currentIndex + 1) % THEMES.length];
    setTheme(next);
  };

  if (!theme) return null;

  return (
    <div className="flex gap-4 text-background">
      <button
        onClick={nextTheme}
        className="rounded bg-foreground px-3 py-2 cursor-pointer hover:shadow-[0_4px_6px_1px_var(--middleground),0_2px_4px_1px_var(--middleground)]"
      >
        Change Theme
      </button>
      <button
        onClick={() => setTheme("light")}
        className="rounded bg-foreground px-3 py-2 cursor-pointer hover:shadow-[0_4px_6px_1px_var(--middleground),0_2px_4px_1px_var(--middleground)]"
      >
        <RiResetLeftFill />
      </button>
    </div>
  );
}
