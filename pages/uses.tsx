import React from "react";
import { LinkIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";

type Props = {};

interface Workstation {
  title: string;
  link: string;
  description: string;
  id: number;
}

interface Software {
  title: string;
  link: string;
  description: string;
  id: number;
}

interface Design {
  title: string;
  link: string;
  description: string;
  id: number;
}

interface Productivity {
  title: string;
  link: string;
  description: string;
  id: number;
}
interface UsesProps {
  workstation: Array<Workstation>;
  software: Array<Software>;
  design: Array<Design>;
  productivity: Array<Productivity>;
}

const uses: UsesProps = {
  workstation: [
    {
      id: 1,
      title: "MacBook Pro",
      description: "My main workstation.",
      link: "https://www.apple.com/macbook-pro-13/",
    },
    {
      id: 2,
      title: "Dell XPS 13",
      description: "My secondary workstation.",
      link: "https://www.dell.com/en-us/shop/dell-laptops/xps-13-laptop/spd/xps-13-9310-laptop",
    },
  ],
  software: [
    {
      id: 1,
      title: "Visual Studio Code",
      description: "My code editor of choice.",
      link: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      title: "iTerm2",
      description: "My terminal of choice.",
      link: "https://iterm2.com/",
    },
  ],
  design: [
    {
      id: 1,
      title: "Figma",
      description: "My design tool of choice.",
      link: "https://www.figma.com/",
    },
  ],
  productivity: [
    {
      id: 1,
      title: "Notion",
      description: "My note-taking app of choice.",
      link: "https://www.notion.so/",
    },
    {
      id: 2,
      title: "Bear",
      description: "My note-taking app of choice.",
      link: "https://bear.app/",
    },
  ],
};

export default function Projects({}: Props) {
  return (
    <Layout>
      <header className="max-w-2xl">
        <h1>Software I use, gadgets I love, and other things I recommend.</h1>
        <p className="mt-6">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </header>

      <aside className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 space-y-16">
          {Object.keys(uses).map((key: string) => {
            const getKey = uses[key as keyof UsesProps];
            return (
              <li
                key={key}
                className="grid space-y-8 md:space-y-0 md:grid-cols-3 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 capitalize">
                  {key}
                </h2>
                <ul className="flex-col flex col-span-2 space-y-6">
                  {getKey.map(
                    (use): any => (
                      <li
                        key={use.id}
                        className="group relative flex flex-col space-y-4"
                      >
                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          {use.title}
                        </h3>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {use.description}
                        </p>
                        <p className="group-hover:text-green-600 hover:cursor-pointer relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <LinkIcon className="inline-block w-4 h-4 mr-1" />
                          {use.link}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </aside>
    </Layout>
  );
}
