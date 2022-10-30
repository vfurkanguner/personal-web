/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout";
import images from "../constants/images";
import classNames from "../utils/classNames";

type Props = {};

export default function photos({}: Props) {
  return (
    <Layout>
        <div className=" my-16 sm:my-32">
      <div className="space-y-4 max-w-xl">
        <h1>Çektiğim bazı fotoğraflar</h1>
        <p>
            Fotoğrafçılıktan çok anlamıyorum, ancak bazı fotoğraflarımı paylaşmak istedim. Özellikle tarihi dokuları olan şehirleri gezmeyi ve fotoğraflamayı çok seviyorum.   
        </p>
      </div>
      <figcaption className="mt-16 lg:mt-20">
        {/* <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"> */}
        <div className="-my-4 gap-4 py-4 sm:gap-6 columns-2 lg:columns-3">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={classNames(
                "grayscale relative hover:grayscale-0  w-full my-6  group",
                index % 2 === 0 ? "aspect-square" : " aspect-video"
              )}
            >
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                src={image.src}
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="future"
                className={classNames(
                  "grayscale group-hover:scale-105 transition-all group-hover:grayscale-0  w-full h-full object-cover rounded-lg"
                )}
              />
              <span className="hidden group-hover:flex text-white text-lg group-hover:scale-110 absolute  transition top-[50%] left-[50%] rounded-lg  -translate-y-[50%] -translate-x-[50%] bg-black px-4 py-2">
                {image.title}
              </span>
            </div>
          ))}
        </div>
      </figcaption>
        </div>
    </Layout>
  );
}
