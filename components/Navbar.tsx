import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid/";
import Link from "next/link";
import StyledMenu from "./Menu";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';

type Props = {};

export const navigation = [
  { name: "navbar.about", href: "/" },
  {
    name: "navbar.project",
    href: "/projects",
  },
  { name: "navbar.used", href: "/uses" },
  { name: "navbar.photos", href: "/photos" },
];

export default function Navbar({}: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  const isRouteActive = (route: string) => {
    return route === router.pathname;
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
              fillRule="evenodd"
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
      <ul className="hidden  md:flex justify-between  gap-5  bg-black  rounded-full  text-sm font-medium   ring-1 ring-zinc-900/5 backdrop-blur text-zinc-200 ">
        {navigation.map((item) => (
          <li
            key={item.name}
            className={`first-of-type:ml-4  last-of-type:mr-4 p-2 relative hover:scale-110 transition-all   cursor-pointer ${
              isRouteActive(item.href)
                ? "text-zinc-50"
                : "dark:text-zinc-600 text-zinc-600 "
            }`}
          >
            <Link href={item.href}>{t(item.name)}</Link>
            {isRouteActive(item.href) ? (
              <span className="absolute inset-x-1 -bottom-px h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 " />
            ) : null}
          </li>
        ))}
      </ul>

      <div className="inline-flex items-center gap-x-2">
        <div className="lg:hidden ">
          <StyledMenu />
        </div>
      </div>
    </div>
  );
}
