"use client";

import { LightModeIcon } from "@/content/icons/LightModeIcon";
import { DarkModeIcon } from "@/content/icons/DarkModeIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
      className="cursor-pointer focus-visible:ring-2 focus:outline-none p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out"
    >
      {resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
