"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialUISwitch } from "../ui/ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const paths = [
  { link: "/", pathname: "HOME" },
  { link: "/projects", pathname: "PROJECTS" },
  { link: "/about", pathname: "ABOUT" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`sticky top-2 z-10 transition-all duration-300 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <div className="justify-around items-center mt-6 hidden sm:flex backdrop:blur-lg">
        <div
          className={`border-4 border-slate-700 dark:border-slate-300 skew-x-12 inline-flex gap-12 w-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded p-1 transition-all duration-300 shadow-md ${
            scrolled ? "shadow-lg shadow-indigo-500/20" : ""
          }`}
        >
          {paths.map((path) => {
            // alert(pathname)
            const isActive = path.link === pathname ? true : path.link === "/projects" && pathname.startsWith("/project") ? true : false;
            const navMenuClass = isActive
              ? "bg-indigo-100 text-slate-900 dark:bg-indigo-900 dark:text-slate-100"
              : "text-slate-700 dark:text-slate-200";
            return (
              <Link
                className={navMenuClass}
                href={path.link}
                key={path.link}
                aria-label={`Navigate to ${path.pathname}`}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="nav-menu">{path.pathname}</div>
              </Link>
            );
          })}
        </div>
        <div className="transition-all duration-300 hover:scale-110">
          <MaterialUISwitch
            checked={theme === "dark" ? true : false}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          />
        </div>
      </div>
    </nav>
  );
}
