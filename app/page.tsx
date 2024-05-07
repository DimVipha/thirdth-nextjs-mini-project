import { Suspense } from "react";
import { BASE_API } from "@/constants/Base-uri";
import { Button } from "flowbite-react";
import { ProductType } from "@/type/ProductType";
import Link from "next/link";

import CardProductComponent from "@/components/cards/CardProductComponent";
import HeroComponent from "@/components/hero/HeroComponent";
import LoadingComponent from "./Loading";
import CategoryCard from "@/components/cards/CategoryCard";
import HeroBackComponent from "@/components/hero/HeroBackComponent";

async function fetchProducts() {
    const products = await fetch(`${BASE_API}products`, {
        cache: "no-store",
    });
    const res = await products.json();
    const rest = res.results;
    return rest;
}

export default async function Home() {
    // const sellerName ="Chhunhy Chhem"
    //  //const users = await fetchUsers();
    //const products = await fetchProducts(sellerName);
    const products = await fetchProducts();
    return (
        <>
            <HeroComponent />
            <h1 className="mx-5 mb-5 max-w-screen-xl md:mx-auto text-4xl font-bold mt-9">
                Products
            </h1>
            {/* <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-screen-xl justify-center mx-auto gap-5 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">       */}
            <div className="max-w-screen-xl mx-auto  grid sm:grid-cols-2 max-sm:p-16 max-sm:mx-6 md:grid-cols-3  lg:grid-cols-4 gap-6 ">
                <Suspense fallback={<LoadingComponent />}>
                    {products.map((product: ProductType) => {
                        return (
                            <Link
                                href={`/product/${product.id}`}
                                key={product.id}
                            >
                                <CardProductComponent
                                    image={product.image}
                                    seller={product.seller}
                                    name={product.name}
                                    desc={product.desc}
                                    price={product.price}
                                    category={""}
                                    quantity={0}
                                    id={0}
                                />
                            </Link>
                        );
                    })}
                </Suspense>
            </div>
            {/* <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
            <CategoryCard/>
             </div> */}
            <HeroBackComponent />
        </>
    );
}
