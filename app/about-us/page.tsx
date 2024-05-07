import React from "react";
import styles from "./AboutUs.module.css"
import { Metadata} from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About us",
  description: "This is about us shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
 
  return (
    <>

    <section className=" dark:bg-gray-900 ">
    <div className="gap-8 items-center  py-4  sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-36 md:grid md:grid-cols-2 lg:px-6 xl:py-6 xl:px-0">
            <div className="mt-4 md:mt-0 ">
                <h2 className="mb-4 text-4xl  font-bold roboto-regular text-gray-700  ">Welcome</h2>
                <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">Welcome to IVSHOPS, where innovation meets convenience in the world of online shopping. Founded on the principles of providing exceptional customer experiences and embracing technological advancements, we are committed to revolutionizing the way you shop online.</p>
                
            </div>
           <div className="flex gap-8">
              <Image   src={"https://i.pinimg.com/564x/4f/c9/af/4fc9af7e8add7e43c3aeae309abde842.jpg"} className="shadow-lg rounded-md" width={250} height={250} alt=""/>  
              <Image   src={"https://i.pinimg.com/564x/6f/d4/39/6fd4391713c827d1931c3364feddfbce.jpg"} className="shadow-lg rounded-md" width={250} height={250} alt=""/>  
            </div>  
        </div>
        {/* <div className="gap-8 items-center  py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-36 md:grid md:grid-cols-2 lg:px-6 xl:py-6 xl:px-0">
            <div className="mt-4 md:mt-0 ">
                <h2 className="mb-4 text-4xl  font-bold roboto-regular  dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-[#8244FF] from-[#F926AE] ">Welcome to E-Coding</h2>
                <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">Greeting for everyone Welcome from E-Coding. E-Coding is the website e-learning that have courses can help you. You can find courses that quality in E-Coding. we will provide you course more. You can buy course in E-Coding. It will help you a lot.</p>
                
            </div>
           <Image   src={"https://i.pinimg.com/564x/70/5c/e0/705ce0d683f5e123b4af898e82d516b5.jpg"} className="rounded-lg" width={600} height={600} alt=""/>    
        </div> */}
       </section>
       <div className=" dark:bg-gray-900">
            <div className="gap-8 items-center py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-12 md:grid md:grid-cols-2 lg:px-6 xl:py-3 xl:px-0">
                {/* <img className="w-full hidden md:block" src="../images/computer game.png" alt="vision image"> */}
                <div className="flex gap-8">
                <Image   src={"https://i.pinimg.com/564x/4f/c9/af/4fc9af7e8add7e43c3aeae309abde842.jpg"} width={250} height={250} alt=""/>  
                <Image   src={"https://i.pinimg.com/564x/6f/d4/39/6fd4391713c827d1931c3364feddfbce.jpg"} width={250} height={250} alt=""/>  
              </div>  
                {/* <Image className="w-full hidden md:block" src={"/assets/computer game.png"} height={500} width={500} alt="" /> */}
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl  font-bold roboto-regular text-gray-700  ">Our Vision </h2>
                    <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">our vision is to redefine the online shopping experience, setting new standards of convenience, personalization, and sustainability. We envision a platform where every click brings joy, every interaction feels tailored, and every purchase contributes positively to the world.</p>
                    
                </div>
               
                <Image className="w-full block md:hidden" src={"/assets/computer game.png"} height={500} width={500} alt="" />
                {/* <img className="w-full block md:hidden" src="../images/d:\E-Coding\images\computer game.png" alt="vision image"> */}
                
            </div>
        </div>

        {/* <section className=" dark:bg-gray-900 ">
            <div className="gap-8 items-center py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-12 md:grid md:grid-cols-2 lg:px-6 xl:py-3 xl:px-0">           
                <Image className="w-full rounded-lg hidden md:block " src={"https://i.pinimg.com/564x/b6/31/ed/b631ed1eb4ffbfa48e3c8b61263b7c7a.jpg"}  height={300} width={500} alt="" />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl  font-bold roboto-regular text-gray-700 ">Our Vision</h2>
                    <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">our vision is to redefine the online shopping experience, setting new standards of convenience, personalization, and sustainability. We envision a platform where every click brings joy, every interaction feels tailored, and every purchase contributes positively to the world.</p>
                    
                </div>
               
                <Image className="w-full block md:hidden" src={"/assets/computer game.png"} height={500} width={500} alt="" />                
            </div>
        </section> */}
    </>
  );
};

export default page;
