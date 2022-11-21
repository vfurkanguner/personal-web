import React from "react";
import i18n from "i18next"
import { useTranslation } from "react-i18next";

type Props = {};

export default function Footer({}: Props) {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <footer className="border-t py-4 md:py-10 lg:py-16">
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-4 md:px-6 lg:px-8 text-zinc-200">
        <div className="flex flex-col md:flex-row gap-y-4  justify-between">
          <aside>
            <p className="text-zinc-400 text-base">{t("footer.desc")}
            {' '} 
            <a href="https://github.com/vfurkanguner/personal-web"
              className="hover:text-zinc-100 underline"
              target="_blank"
              rel="noreferrer"
              >
              {t("footer.github.link")}
              </a>
            </p>
            <p className="text-sm ">
              Made with <span className="text-red-500">❤️</span>{" "}
            </p>
          </aside>

          <div className="grid text-xs gap-y-2">
            <select onChange={(e) => changeLanguage(e.target.value)} className="bg-transparent border px-1 py-3 rounded-full">
              <option value="en">
                 English
              </option>
              <option value="tr">Türkçe</option>
            </select>

            <p className="text-zinc-200 mt-4">
              ©{new Date().getFullYear()} V. Furkan Güner.{" "}
              {t("footer.all.rights")}{" "}
            </p>              
          </div>
        </div>
      </div>
    </footer>
  );
}
