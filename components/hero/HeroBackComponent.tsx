import React from "react";
import Image from "next/image";

export default function HeroBackComponent() {
  return (
        <>
        <div className=" dark:bg-gray-900 ">
            <div className="gap-8 items-center  py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-36 md:grid md:grid-cols-2 lg:px-6 xl:py-6 xl:px-0">
                <div className="mt-4 md:mt-0 ">
                    <h2 className="mb-4 text-4xl  font-bold roboto-regular text-gray-700  ">Private Policy </h2>
                    <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">Our return policy allows for returns within 30 days of the purchase date. Items must be returned in new and unused condition, with all original tags and labels attached</p>
                    
                </div>
               <div className="flex gap-8">
                  <Image   src={"/assets/b.jpg"} width={250} height={250} alt="image"/>  
                  <Image   src={"/assets/love.jpg"} width={250} height={250} alt="imgag"/>  
                </div>  
            </div>
           </div>
        </>
      );
}