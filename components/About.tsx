import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

export default function About({}: Props) {
  const { t } = useTranslation();
  return (
    <div className="lg:order-first lg:row-span-2">
    <h2 className="text-2xl text-zinc-200 relative after:w-40 after:lg:w-full after:h-px after:absolute after:top-[50%] after:bg-zinc-600 after:ml-2 after:max-w-sm">
      {t('about')}
    </h2>
    <div className="mt-6 space-y-7 text-base text-zinc-300">
      <p>
      {t('about.paragraph.one')}
      </p>
      <p>
      {t('about.paragraph.two')}
      </p>
      <p>
      {t('about.paragraph.three')}
      </p>
      <p>{t('about.latest.tech')}</p>
      <ul className="grid grid-cols-2 gap-4 text-sm font-mono">
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          JavaScript
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          TypeScript
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          React
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          NextJS
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          Express
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          Prisma
        </li>
      </ul>
    </div>
  </div>
  )
}