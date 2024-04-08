"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
    { link: "/", pathname: "HOME" },
    { link: "/projects", pathname: "PROJECTS" },
    { link: "/about", pathname: "ABOUT" },
  ];
  

export default function Footer() {
    const pathname = usePathname()
  return (
    <nav className="sticky bottom-2 z-10 backdrop:blur-lg">
      <div className="justify-around items-center mt-6 md:hidden flex">
        <div className="border-4 border-white rounded-full inline-flex w-11/12 justify-between overflow-hidden">
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
        {/* <div className=" absolute bottom-10 right-0">
          <div>theme switch</div>
        </div> */}
      </div>
    </nav>
  );
}
