import React from 'react'
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';


type Props = {}

export default function Email({}: Props) {
  const { t } = useTranslation();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Daha sonra eklenecek :)");
      };
  return (
    <form
    onSubmit={handleSubmit}
    className="space-y-4  rounded-2xl border  p-6 bg-zinc-800 border-zinc-700/40 relative after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%]"
  >
    <div className="">
      <span className="inline-flex items-center text-zinc-50">
        <EnvelopeIcon className="w-5 h-5 mr-2 text-zinc-500" />
        {t('email.section.title')}
      </span>
      <p className="text-sm">
      {t('email.section.desc')}
      </p>
    </div>
    <div className="mt-6 flex">
      <input
        className="min-w-0 text-zinc-50 bg-zinc-900 flex-auto appearance-none rounded-md border border-zinc-900/10 px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none focus:ring-4     focus:border-indigo-500 focus:ring-indigo-400/10 sm:text-sm"
        placeholder={t('email.section.placeholder') || "Email"} //typescript 
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-black font-semibold text-zinc-100   hover:bg-zinc-900 active:bg-zinc-700 active:text-zinc-100/70 ml-4 flex-none"
      >
        {t('email.section.button')}
      </button>
    </div>
  </form>
  )
}