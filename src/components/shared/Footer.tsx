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
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <>
      <nav className="sticky bottom-2 z-10">
        <div className="justify-around items-center mt-6 sm:hidden flex">
          <div className="border-4 border-black dark:border-white rounded-full inline-flex w-11/12 justify-between overflow-hidden bg-slate-600/25 backdrop-blur-lg p-1">
            {paths.map((path) => {
              const isActive = path.link === pathname ? true : false;
              const navMenuClass = isActive ? "bg-white text-black" : "";
              return (
                <Link className={`${navMenuClass} ${path.style}`} href={path.link} key={path.link}>
                  <div className={`nav-menu ${path.style}`}>{path.pathname}</div>
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
    </>
  );
}
