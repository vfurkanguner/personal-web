/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Hero from "../components/Hero";
import About from "../components/About";
import Email from "../components/Email";
import Work from "../components/Work";
import BlogBox from '../components/BlogBox';

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
      <div className="mb-16 sm:mb-32">
        <Hero />

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
          <About />

          {/* Icons */}
          <div className="lg:pl-20">
            <div className="space-y-10">
              <Email />
              <Work />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 space-y-4 ">
          <h3 className="text-2xl font-medium">Yazdıklarım</h3>
          {allPosts.map((post) => {
            return (
              <BlogBox key={post.id} post={post} />
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
