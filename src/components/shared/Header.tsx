"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialUISwitch } from "../ui/ThemeSwitch";

const paths = [
  { link: "/", pathname: "HOME" },
  { link: "/projects", pathname: "PROJECTS" },
  { link: "/about", pathname: "ABOUT" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-2 z-10">
      <div className="justify-around items-center mt-6 hidden md:flex backdrop:blur-lg">
        <div className="border-4 border-white skew-x-12 inline-flex gap-12 w-auto bg-slate-600/25 backdrop-blur-lg">
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
          <MaterialUISwitch />
        </div>
      </div>
    </nav>
  );
}
