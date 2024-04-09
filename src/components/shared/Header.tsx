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
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <nav className="sticky top-2 z-10">
      <div className="justify-around items-center mt-6 hidden sm:flex backdrop:blur-lg">
        <div className="border-4 border-black dark:border-white skew-x-12 inline-flex gap-12 w-auto bg-slate-600/25 backdrop-blur-lg rounded p-1">
          {paths.map((path) => {
            const isActive = path.link === pathname ? true : false;
            const navMenuClass = isActive ? "bg-white text-black" : "";
            return (
              <Link className={navMenuClass} href={path.link} key={path.link}>
                <div className="nav-menu">{path.pathname}</div>
              </Link>
            );
          })}
        </div>
        <div>
          <MaterialUISwitch
            checked={theme === "dark" ? true : false}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </nav>
  );
}
