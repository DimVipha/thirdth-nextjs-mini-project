"use client";
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Image,
} from "@nextui-org/react";
import { ProductType } from "@/type/ProductType";
import { BsCart4 } from "react-icons/bs";
import { addToCart } from "@/redux/feature/cart/cartSlice";

export default function CardProductComponent({
    name,
    image,
    desc,
    price,
}: ProductType) {
    return (
        <Card shadow="sm" className="border-collapse-2 p-0 rounded-sm">
            <CardBody className="overflow-visible rounded-none m-0 ">
                <Image
                    width="100%"
                    alt="image"
                    src={image}
                    className="w-full rounded-sm object-cover h-[200px]"
                />
            </CardBody>
            <CardFooter className="text-small m-0 py-0 w-full ">
                <div className=" w-full">
                    <h1 className="text-xl m-0 font-bold">{name}</h1>
                    <h3 className="text-lg font-medium">${price}</h3>
                    {/* <h3 className="text-3xl text-orange-500">
                            <BsCart4 />
                        </h3> */}
                    <Button className="border-2 mb-4 mt-1 rounded-sm  bg-black text-gray-200 hover:bg-gray-100 hover:border-2 hover:text-black text-center w-full font-medium  py-3">
                        Add to Cart
                    </Button>
                </div>
            </CardFooter>
        </Card>
        //     <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        //   <CardHeader className="absolute z-10 top-1 flex-col items-start">
        //   <Image
        //     removeWrapper
        //     alt="Card example background"
        //     className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        //     src={image}
        //   />
        //   </CardHeader>

        //   <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        //     <div>
        //       <p className="text-black text-tiny">Available soon.</p>
        //       <p className="text-black text-tiny">Get notified.</p>
        //     </div>
        //     <Button className="text-tiny" color="primary" radius="full" size="sm">
        //       Notify Me
        //     </Button>
        //   </CardFooter>
        // </Card>
    );
}
