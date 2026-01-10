"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialUISwitch } from "../ui/ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const paths = [
  { link: "/", pathname: "HOME", style: "rounded-full" },
  { link: "/projects", pathname: "PROJECTS", style: "rounded" },
  { link: "/about", pathname: "ABOUT", style: "rounded-full" },
];

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="sticky bottom-2 z-10">
        <div className="justify-around items-center mt-6 sm:hidden flex">
          <div className="border-4 border-slate-700 dark:border-slate-300 rounded-full inline-flex w-11/12 justify-between overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-1 shadow-lg shadow-indigo-500/20">
            {paths.map((path) => {
              const isActive = path.link === pathname ? true : path.link === "/projects" && pathname.startsWith("/project") ? true : false;
              const navMenuClass = isActive
                ? "bg-indigo-100 text-slate-900 dark:bg-indigo-900 dark:text-slate-100"
                : "text-slate-700 dark:text-slate-200";
              return (
                <Link
                  className={`${navMenuClass} ${path.style}`}
                  href={path.link}
                  key={path.link}
                  aria-label={`Navigate to ${path.pathname}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className={`nav-menu ${path.style}`}>
                    {path.pathname}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="transition-all duration-300 hover:scale-110">
            <MaterialUISwitch
              checked={theme === "dark" ? true : false}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
