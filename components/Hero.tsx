import React from "react";
import { useTranslation } from 'react-i18next';

type Props = {};

export default function Hero({}: Props) {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h2 className="text-xl bg-gradient-to-r  via-blue-600 bg-clip-text from-red-500 to-indigo-600 text-transparent ">
        {t('hero.hello')}
      </h2>
      <h1 className="text-4xl font-bold tracking-tight leading-snug lg:leading-normal text-zinc-100 lg:text-6xl max-w-4xl">
        {t('hero.name', { name: "V. Furkan Güner"} )}
        {"  "}
        <p className="bg-gradient-to-r  via-indigo-600 bg-clip-text from-blue-500 to-red-600  text-transparent">
          {t('hero.title')}
        </p>
      </h1>

      <p className="max-w-lg tracking-wide">
        {t('hero.desc')}
      </p>
    </div>
  );
}
