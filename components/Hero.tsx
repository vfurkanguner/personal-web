import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h2 className="text-xl bg-gradient-to-r  via-blue-600 bg-clip-text from-red-500 to-indigo-600 text-transparent ">
        Merhaba, benim adım
      </h2>
      <h1 className="text-4xl font-bold tracking-tight leading-snug lg:leading-normal text-zinc-100 lg:text-6xl max-w-4xl">
        V. Furkan Güner
        {"  "}
        <p className="bg-gradient-to-r  via-indigo-600 bg-clip-text from-blue-500 to-red-600  text-transparent">
          Web için bir şeyler yapıyorum.
        </p>
      </h1>

      <p className="max-w-lg tracking-wide">
        Dijital deneyimler oluşturma (ve bazen tasarlama) konusunda çalışan bir
        yazılım geliştiricisiyim. Problem çözmekten ve yeni ürünler ortaya
        çıkarmaktan keyif alıyorum. Aynı zamanda Soldd adlı bir start-up&apos;da
        kurucuyum.
      </p>
    </div>
  );
}
