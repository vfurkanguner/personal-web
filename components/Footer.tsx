import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="border-t py-4 md:py-10 lg:py-16">
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-4 md:px-6 lg:px-8 text-zinc-800 dark:text-zinc-200">
        <div className="flex flex-col md:flex-row gap-y-4  justify-between">
          <div className="grid text-xs gap-y-2">
            <p className="text-zinc-900" >©{new Date().getFullYear()} V. Furkan Güner. All rights reserved. </p>
          </div>
          <aside>
            <p className="text-sm ">
                Made with{" "}
                <span className="text-red-500">
                ❤️
                </span>{" "}
            </p>

          </aside>
        </div>
      </div>
    </footer>
  );
}
