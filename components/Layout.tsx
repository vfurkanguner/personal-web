import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="fixed inset-0 flex justify-center sm:px-8 sm:pr-4 overflow-y-scroll">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full   dark:border-zinc-300/20">
            <header className="mx-auto max-w-2xl lg:max-w-5xl pt-4 px-4 md:px-6 lg:px-8">
              <Navbar />
            </header>

            <main className="mx-auto max-w-2xl lg:max-w-5xl px-4 md:px-6 lg:px-8 my-16 sm:my-32">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
