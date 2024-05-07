import { describe } from "node:test";
import { title } from "process";
import { FaPlus ,FaMinus } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { Button, image } from "@nextui-org/react";
export type ParamProps = {
    params: {
        id: number;
    };
};

async function getDetail(id: number) {
    const productDetail = await fetch(
        `https://store.istad.co/api/products/${id}/`
    );
    return productDetail.json();
}

export async function generateMetadata({ params }: any) {
    const id = params.id;
    const product = await getDetail(id);
    return {
        title: product?.title,
        describe: product.description,
        openGraph: {
            images: product.thumbnail,
        },
    };
}

async function page({ params }: ParamProps) {
    const id = params.id;
    const productDetail = await getDetail(id);
    return (
        // <div className="max-w-screen-xl rounded-xl bg-gray-100 gap-8 mt-16 p-8 mx-auto flex justify-between">
        <div className=" w-[80vw]  flex items-center mx-auto shadow-md  bg-white py-8 pt-0 my-8 rounded-lg ">
            <Image
                src={productDetail.image}
                alt={""}
                width={550}
                height={300}
                className="rounded-lg max-h-80 pl-10 object-cover"
            />
            <div className="w-1/2  pl-16">
                <div className="flex gap-4 h-18 mt-3 items-center">
                    <Image
                        className="rounded-full"
                        width={60}
                        height={60}
                        src={"/assets/profiles.jpg"}
                        alt=""
                    />
                    <h1>{productDetail.seller}</h1>
                </div>
                <div className=" mt-4 ">
                    <h1 className="text-3xl pb-4">{productDetail.name}</h1>
                    {/* <p className="text-3xl pt-4">${productDetail.price}</p> */}
                    <p>{productDetail.desc}</p>
                    <Button className="bg-blue-500 text-white mt-3">
                        Buy Now
                    </Button>
                    <section className="flex justify-between items-center add-to-cart">
                        <div className="w-full" >
                            <h3 className="text-lg font-medium mt-4 mb-3">
                                Qauntity{" "}
                            </h3>
                            <nav aria-label=" Page navigation example" className="w-full flex justify-between items-center">
                                <ul className="flex items-center -space-x-px h- text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg "
                                        >
                                          <span className="text-xl"><FaMinus /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-4 h-12 bg-white  border border-gray-300 hover:bg-gray-100  text-xl font-bold "
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-12  text-gray-500 bg-white border border-gray-300 rounded-e-lg "
                                        >
                                            <span className="text-xl"><FaPlus /></span>
                                        </a>
                                    </li>
                                </ul>
                                <h2 className="price text-lg font-medium"> ${productDetail.price}</h2>
                            </nav>
                           
                        </div>
                    </section>
                    <section className="mt-4">
                        <div className="border-2 rounded-lg text-center font-medium bg-white py-3">
                            Add to Cart
                        </div>
                        <div className=" border-2 bg-blue-500 rounded-lg  text-center mt-2 flex justify-center items-center">
                            <a
                                href="#"
                                className=" py-3  rounded-lg mr-3 font-medium text-white "
                            >
                                buy with{" "}
                                <strong className="text-xl">Shop</strong>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default page;
