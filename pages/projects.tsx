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
      <div className=" my-16 sm:my-32">
        <div className="max-w-2xl">
          <h1>Pişirdiğimiz bazı şeyler 🍪</h1>
          <p className="mt-6">
            Kendi başıma birçok proje üzerinde çalışıyorum. Fakat hepsini canlıya
            alamıyorum. Bu yüzden bazılarına buradan ulaşabilirsiniz. Kodların
            çoğu açık kaynaklıdır. Eğer ilginizi çeken bir şey varsa
            kodları inceleyebilir ve geliştirmek için katkıda
            bulunabilirsiniz.
          </p>
        </div>

        <aside className="mt-16 sm:mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {projects.map((project) => (
              <li
                key={project.id}
                className="group relative flex flex-col space-y-4 group hover:cursor-pointer"
              >
                <h3 className="mt-6 text-base font-semibold text-zinc-100">
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95  opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                  <a>
                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{project.title}</span>
                  </a>
                </h3>
                <a href={project.href} className="">
                  <p className="relative z-10 mt-2 text-sm text-zinc-400">
                    {project.description}
                  </p>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-200 transition group-hover:text-indigo-500 ">
                    <LinkIcon className="flex-shrink-0 w-4 h-4 mr-2" />
                    <span>github.com</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Layout>
  );
}
