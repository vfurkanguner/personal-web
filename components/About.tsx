import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="lg:order-first lg:row-span-2">
    <h2 className="text-2xl text-zinc-200 relative after:w-40 after:lg:w-full after:h-px after:absolute after:top-[50%] after:bg-zinc-600 after:ml-2 after:max-w-sm">
      Hakkımda
    </h2>
    <div className="mt-6 space-y-7 text-base text-zinc-300">
      <p>
        Merhaba! Benim adım Furkan ve insanların hayatını kolaylaştıran
        şeyler yapmayı seviyorum. Yazılıma ilk 2015&apos;de HTML& CSS
        öğrenerek başladım. Ondan sonra da JavaScript öğrenerek çeşitli
        uygulamalar üretmeye başladım.
      </p>
      <p>
        2015 yılında çoğunlukla temel HTML ve CSS yaparak kodlama
        öğrenmeye başladım, ancak 2019&apos;da programlama ve web
        geliştirme konusunda ciddileşmeye karar verdim. Tasarım tutkum
        vardı, bu yüzden Figma&apos;yı öğrenmek için de zaman harcadım.
        2020&apos;de kendi start-up şirketimin kurucu ortağı oldum.
      </p>
      <p>
        React ve NextJS gibi JavaScript çerçevelerinin yanı sıra HTML5,
        CSS3 ve Tailwind gibi HTML5 stillendirme dilleri konusunda
        deneyimim var. En sevdiğim teknoloji yığını, NodeJS backendine
        sahip Tailwind/NextJS/Prisma.
      </p>
      <p>En son çalıştığım teknolojiler:</p>
      <ul className="grid grid-cols-2 gap-4 text-sm font-mono">
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          JavaScript
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          TypeScript
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          React
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          NextJS
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          Express
        </li>
        <li className="before:content-['▹'] before:mr-2 before:text-zinc-500 ">
          Prisma
        </li>
      </ul>
    </div>
  </div>
  )
}