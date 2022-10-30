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
      title: "MacBook Air M1  ",
      description:
        "Apple'ın M chipli modelleri gerçekten çok başarılı. Cihazın hızlı olması üretkenliği arttıran faktörlerden.",
      link: "https://www.apple.com/tr/macbook-air-m1/",
    },
    {
      id: 2,
      title: "Viewsonic-VX3276",
      description:
        "32 inçlik bir büyüklüğe sahip. Ekranı ikiye bölerek kullanmak çok faydalı oluyor.",
      link: "https://tinyurl.com/pem48y26",
    },
  ],
  software: [
    {
      id: 1,
      title: "Visual Studio Code",
      description:
        "Kod editörü olarak kullanıyorum. Birçok eklenti ile birlikte kullanıyorum. Eklentiler kod yazarken çok yardımcı oluyor. Hatta bu açıklamayı da Github Co-Pilot ile yazdım.",
      link: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      title: "iTerm2",
      description:
        "Severek kullandığım bir terminal. İçerisinde özelleştirmeler yapabiliyorsunuz. İçine kesinlikle Fig kurun.",
      link: "https://iterm2.com/",
    },
  ],
  design: [
    {
      id: 1,
      title: "Figma",
      description:
        "Ürün tasarlarken vazgeçilmez bir araç. Figma'nın basitliği en güçlü unsuru bence.",
      link: "https://www.figma.com/",
    },
  ],
  productivity: [
    {
      id: 1,
      title: "Notion",
      description:
        "Üretkenliği arttıran bir araç. Notion ile her şeyi organize edebiliyorsunuz. Ayrıca relational db'ler ile birlikte kullanıldığında çok güçlü bir araç.",
      link: "https://www.notion.so/",
    },
  ],
};

export default function Projects({}: Props) {
  return (
    <Layout>
      <div className=" my-16 sm:my-32">
      <header className="max-w-2xl">
        <h1>Severek kullandığım ve önerdiğim  teknolojik zımbırtılar</h1>
        <p className="mt-6">
          I&apos;ve worked on tons of little projects over the years but these are
          the ones that I&apos;m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </header>

      <aside className="mt-16 sm:mt-20">
        <ul className="flex flex-col  space-y-16 ">
          {Object.keys(uses).map((key: string) => {
            const getKey = uses[key as keyof UsesProps];
            return (
              <li
                key={key}
                className="grid space-y-8 grid-cols-1 md:space-y-0 md:grid-cols-3 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <h2 className="text-sm font-semibold text-zinc-100 capitalize">
                  {key}
                </h2>
                <ul className="flex-col flex col-span-2 space-y-6">
                  {getKey.map((use): any => (
                    <li
                      key={use.id}
                      className="group relative flex flex-col space-y-4"
                    >
                      <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                        {use.title}
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-400">
                        {use.description}
                      </p>
                      <p className="group-hover:text-indigo-600 hover:cursor-pointer relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <LinkIcon className="inline-block w-4 h-4 mr-1" />
                        <a
                        href={use.link}
                        target="_blank"
                        rel="noreferrer"
                        >
                          {use.link}
                        </a>
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </aside>
      </div>
    </Layout>
  );
}
