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
        <Image
          src={Profile}
          alt="logo"
          width={32}
          height={32}
          className="rounded-full hover:scale-110 transition-all  ring-4 ring-zinc-100 dark:ring-zinc-300/20"
        />
      </Link>
      <ul className="hidden  md:flex justify-between  gap-5   bg-slate-200 dark:bg-zinc-800  rounded-full bg-white/90  text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navigation.map((item) => (
          <li
            key={item.name}
            className={`first-of-type:ml-4  last-of-type:mr-4 p-2 relative hover:scale-110 transition-all   cursor-pointer ${
              isRouteActive(item.href)
                ? "text-indigo-500"
                : "dark:text-zinc-200 text-zinc-900 "
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
          className="shadow dark:bg-zinc-800 w-14 h-10 hover:ring-zinc-600/5 group hover:dark:ring-white/50  rounded-full  items-center flex ring-1 ring-zinc-900/5 dark:ring-white/10  justify-center  "
        >
          {!darkMode ? (
            <MoonIcon className="h-6 w-6 text-zinc-800 dark:text-zinc-400 group-hover:text-zinc-900 group-hover:dark:text-zinc-200" />
          ) : (
            <SunIcon className="h-6 w-6 text-zinc-800 dark:text-zinc-400 group-hover:text-amber-500 group-hover:dark:text-zinc-200 " />
          )}
        </button>
      </div>
    </div>
  );
}
