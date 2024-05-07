// import React from 'react'

import Image from "next/image";
import React from "react";
export default function HeroComponent() {
  return (
    <>
        <section className=" w-full" >
      <div className="grid max-w-screen-xl px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
            Most famouse in our store, Highly recomend for men
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Mens Apple Watch Series 1 38mm Silver with White Sport Band A1802
            in Aluminum ; Opens a new tab Mens Apple Watch Series 1 38mm Silver
            with White Sport Band A1802 in Aluminum.The lack of a simple security measure makes the Apple Watch an attractive target for thieves and muggers.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center  px-5 py-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  ">
          <Image width={300} height={250}
          className="max-h-96"
            src={"/assets/b1.png"}
            alt="pic"
          />
          <Image width={300} height={250}
          className="max-h-96"
            src={"/assets/b1.png"}
            alt="pic"
          />
        </div>
      </div>
    </section>
    </>
    
  );
}