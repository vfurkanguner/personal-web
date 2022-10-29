import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { navigation } from "./Navbar";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex w-full justify-center shadow dark:bg-zinc-800  px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:ring-zinc-600/5 group hover:dark:ring-white/50  rounded-full  items-center ring-1 ring-zinc-900/5 dark:ring-white/10 "
        >
          Menu
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-zinc-800 dark:text-zinc-200"
            aria-hidden="true"
          />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full  justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  flex flex-col transform overflow-hidden rounded-2xl bg-transparent p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between mb-8">
                    <span>Navigation</span>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-200  text-sm font-medium text-zinc-900 hover:bg-zinc-400 hover:dark:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-2">
                    <ul className="grid">
                      {navigation.map((nav) => (
                        <li key={nav.name} className="font-mono py-6 pl-4 text-4xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 dark:from-indigo-600 dark:to-blue-500 hover:text-transparent hover:bg-clip-text lg:text-7xl transition-all hover:scale-105 text-zinc-900 dark:text-zinc-200 font-semibold cursor-pointer">
                          <Link href={nav.href}>{nav.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
