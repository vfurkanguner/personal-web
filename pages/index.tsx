/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";
import { BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: PostType[];
};

type PostType = {
  id: string;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

type AuthorType = {
  name: string;
  picture: string;
};

export default function Home({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>V. Furkan Güner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div className="min-h-screen flex flex-col justify-center space-y-4 ">
          <h2 className="text-xl bg-gradient-to-r  via-blue-600 bg-clip-text from-red-500 to-indigo-600 text-transparent ">
            Merhaba, benim adım
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 lg:text-6xl max-w-4xl">
            V. Furkan Güner
            {"  "}
            <p className="bg-gradient-to-r leading-relaxed via-indigo-600 bg-clip-text from-blue-500 to-red-600  text-transparent">
              Web için bir şeyler üretiyorum.
            </p>
          </h1>

          <p className="max-w-lg tracking-wide">
            I&apos;ve loved making things for as long as I can remember, and
            wrote my first program when I was 6 years old, just two weeks after
            my mom brought home the brand new Macintosh LC 550 that I taught
            myself to type on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 text-zinc-800 dark:text-zinc-200">
          {/* Image */}
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=3840&amp;q=75 3840w"
                src="/mainpic.webp"
                width="800"
                height="800"
                decoding="async"
                data-nimg="future"
                className="aspect-square grayscale hover:grayscale-0 rotate-3 rounded-2xl object-cover dark:bg-zinc-800"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:order-first lg:row-span-2">
            <h2 className="text-xl bg-gradient-to-r  via-blue-600 bg-clip-text from-indigo-600 to-red-600 text-transparent">
              I&apos;m Furkan.{" "}
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              Software developer, founder, and
              {"  "}
              <span className="bg-gradient-to-r via-indigo-600 bg-clip-text from-yellow-500 to-blue-600  text-transparent">
                entrepreneur.
              </span>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-400">
              <p>
                I&apos;ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p>
                I&apos;ve gone through a number of phases in my career, and each
                of them has informed my current work ethos and philosophy. I
                have excelled in a number of project management roles in diverse
                industries, and believe that my number one asset is my ability
                to adapt to any challenge that is thrown my way.
              </p>
              <p>
                I&apos;ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p>
                Today, I&apos;m the founder of Planetaria, where we&apos;re
                working on civilian space suits and manned shuttle kits you can
                assemble at home so that the next generation of kids really can
                make it to orbit — from the comfort of their own backyards.
              </p>
            </div>
          </div>

          {/* Icons */}
          <div className="lg:pl-20">
            <div className="space-y-10">
              <form className="space-y-4  rounded-2xl border  p-6 bg-zinc-800 border-zinc-700/40 relative after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%]">
                <div className="">
                  <span className="inline-flex items-center text-zinc-50">
                    <EnvelopeIcon className="w-5 h-5 mr-2 text-zinc-500" />
                    Stay up to date
                  </span>
                  <p className="text-sm">
                    Get notified when I publish something new, and unsubscribe
                    at any time.
                  </p>
                </div>
                <div className="mt-6 flex">
                  <input
                    className="min-w-0 bg-zinc-900 flex-auto appearance-none rounded-md border border-zinc-900/10 px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none focus:ring-4     focus:border-indigo-500 focus:ring-indigo-400/10 sm:text-sm"
                    placeholder="Email address"
                  />
                  <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-black font-semibold text-zinc-100   hover:bg-zinc-900 active:bg-zinc-700 active:text-zinc-100/70 ml-4 flex-none">
                    Join
                  </button>
                </div>
              </form>

              <div className="rounded-2xl border bg-zinc-800 border-zinc-700/40 p-6 relative after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%]">
                <h3 className="text-base tracking-tight items-center inline-flex text-zinc-100">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-zinc-500" />
                  <span className="relative z-10">Work</span>
                </h3>

                <ul>
                  <li className="mt-2 text-sm flex gap-4 text-zinc-400 ">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <img
                        src="https://i.pravatar.cc/300"
                        alt=""
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Soldd</p>
                      <p className="font-light">Founder & Frontend developer</p>
                    </div>

                    <span>2020-Present</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 space-y-4 ">
          <h3 className="text-2xl font-medium">Yazdıklarım</h3>
          {allPosts.map((post) => {
            return (
              <article
                key={post.id}
                className="space-y-4 lg:space-y-0 p-8 group relative flex flex-col lg:flex-row justify-between bg-black rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-indigo-600 after:top-[50%] after:left-0 after:-translate-y-[50%] "
              >
                <div className="space-y-4 max-w-sm lg:max-w-xl">
                  <span className="text-base text-zinc-300 ">{post.date}</span>
                  <h2 className="text-lg font-bold tracking-tight text-zinc-100 sm:text-2xl">
                    <a
                      href={`/posts/${post.slug}`}
                      className="hover:underline hover:text-zinc-300"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <button className="px-5 py-1 text-zinc-200  border-2 border-zinc-200 rounded-full">
                    Read More
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
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "id",
  ]);

  return {
    props: { allPosts },
  };
};
