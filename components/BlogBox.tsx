/* eslint-disable @next/next/no-img-element */
import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  post: {
    id: string;
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string;
  };
};

export default function BlogBox({ post }: Props) {
  const { t } = useTranslation();
  return (
    <a
      href={`/posts/${post.slug}`}
      key={post.id}
    >
      <article
        className="hover:bg-zinc-800 space-y-4 lg:space-y-0 p-8 group relative flex flex-col lg:flex-row justify-between bg-black rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%] "
      >
        <div className="space-y-4 max-w-sm lg:max-w-xl">
          <span className="text-base text-zinc-300 ">{post.date}</span>
          <h2 className="text-lg font-bold tracking-tight text-zinc-100 sm:text-2xl">
            {post.title}
          </h2>
          <p>
            {post.excerpt}
          </p>
          <button className="px-5 py-1 text-zinc-200  border-2 border-zinc-200 rounded-full">
            {t('common.read.more')}
          </button>
        </div>
        <div className="order-first lg:order-last">
          <img
            src={post.coverImage}
            className="w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-md"
            alt="landview"
          />
        </div>
      </article>
    </a>
  );
}
