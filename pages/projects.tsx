import { LinkIcon } from "@heroicons/react/24/solid";
import React from "react";
import Layout from "../components/Layout";

type Props = {};

const projects = [
  {
    title: "Next.js + Tailwind CSS Starter",
    description: "A starter template for Next.js with Tailwind CSS.",
    href: "",
    id: 1,
  },
  {
    title: "Next.js + Tailwind CSS Starter",
    description: "A starter template for Next.js with Tailwind CSS.",
    href: "",
    id: 2,
  },
  {
    title: "Next.js + Tailwind CSS Starter",
    description: "A starter template for Next.js with Tailwind CSS.",
    href: "",
    id: 3,
  },
];

export default function Projects({}: Props) {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1>Things I’ve made trying to put my dent in the universe.</h1>
        <p className="mt-6">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>

      <aside className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group relative flex flex-col space-y-4 group hover:cursor-pointer"
            >
              <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <a>
                  <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.title}</span>
                </a>
              </h3>
              <a href={project.href} className="">
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-green-500 dark:text-zinc-200">
                  <LinkIcon className="flex-shrink-0 w-4 h-4 mr-2" />
                  <span>github.com</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </Layout>
  );
}
