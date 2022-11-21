import React from 'react'
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../public/soldd.jpeg";
import { useTranslation } from 'react-i18next';

type Props = {}

export default function Work({}: Props) {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl border bg-zinc-800 border-zinc-700/40 p-6 relative after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%]">
    <h3 className="text-base tracking-tight items-center inline-flex text-zinc-100">
      <BriefcaseIcon className="w-5 h-5 mr-2 text-zinc-500" />
      <span className="relative z-10">{t('experience')}</span>
    </h3>

    <ul>
      <li className="mt-2 text-sm flex gap-4 text-zinc-400 ">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-1">
          <Image
            src={Logo}
            alt=""
            className="w-7 h-7 rounded-full"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold">Soldd</p>
          <p className="font-light">Founder & Frontend developer</p>
        </div>

        <span>2020-{t('experience.present')}</span>
      </li>
    </ul>
  </div>
  )
}