import React, { useEffect } from "react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid/";
//TODO photo will be improved
import Profile from "../public/profile.jpeg";
import Link from "next/link";
import StyledMenu from "./Menu";
import { useRouter } from "next/router";

type Props = {};

export const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Projects",
    href: "/projects",
  },
  { name: "Uses", href: "/uses" },
];

export default function Navbar({}: Props) {
  const [darkMode, setDarkMode] = React.useState(true);
  const router = useRouter();

  const isRouteActive = (route: string) => {
    return route === router.pathname;
  };

  const onToggleDarkMode = () => {
    const html = document.querySelector("html");
    if (html?.classList.contains("dark")) {
      html.classList.remove("dark");
      setDarkMode(false);
    } else {
      html?.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="flex items-center justify-between relative">
      <Link href="/">
        <div className="rounded-full hover:scale-110 transition-all  border border-black">
          <svg
            className="rounded-full"
            width="32px"
            height="32px"
            viewBox="0 0 80 80"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
                <stop stopColor="#06f9c4" offset="0%"></stop>
                <stop stopColor="#c406f9" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fill-rule="evenodd"
            >
              <rect
                id="Rectangle"
                fill="url(#g)"
                x="0"
                y="0"
                width="80"
                height="80"
              ></rect>
            </g>
          </svg>
        </div>
      </Link>
      <ul className="hidden  md:flex justify-between  gap-5   bg-black dark:bg-black  rounded-full  text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-200 dark:ring-white/10">
        {navigation.map((item) => (
          <li
            key={item.name}
            className={`first-of-type:ml-4  last-of-type:mr-4 p-2 relative hover:scale-110 transition-all   cursor-pointer ${
              isRouteActive(item.href)
                ? "text-zinc-50"
                : "dark:text-zinc-600 text-zinc-600 "
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
            {isRouteActive(item.href) ? (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0" />
            ) : null}
          </li>
        ))}
      </ul>

      <div className="inline-flex items-center gap-x-2">
        <div className="lg:hidden ">
          <StyledMenu />
        </div>

        <button
          type="button"
          onClick={onToggleDarkMode}
          className="bg-black dark:bg-black w-14 h-10 hover:ring-zinc-600/5 group hover:dark:ring-white/50  rounded-full  items-center flex ring-1 ring-zinc-900/5 dark:ring-white/10  justify-center  "
        >
          {!darkMode ? (
            <MoonIcon className="h-6 w-6 text-zinc-200 dark:text-zinc-200 group-hover:text-zinc-100 group-hover:dark:text-zinc-200" />
          ) : (
            <SunIcon className="h-6 w-6 text-amber-500 dark:text-amber-500 group-hover:text-amber-500 group-hover:dark:text-zinc-200 " />
          )}
        </button>
      </div>
    </div>
  );
}
