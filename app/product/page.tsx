import { Metadata } from "next";
import { Suspense } from "react";
import LoadingComponent from "../Loading";
import { BASE_API } from "@/constants/Base-uri";
import { ProductType } from "@/type/ProductType";
import Link from "next/link";

import CardProductComponent from "@/components/cards/CardProductComponent";

export const metadata: Metadata = {
    title: "Products",
    description: "This is Product page shop",
    keywords: ["shop", "ecommerce", "sell"],
};

// async function fetchUsers() {
//   const users = await fetch("https://jsonplaceholder.org/users", {
//     cache: "no-store"
//   });
//   const res = await users.json();
//   return res;
// }

async function fetchProducts() {
    const products = await fetch(`${BASE_API}products`, {
        cache: "no-store",
    });
    const rest = await products.json();
    return rest.results;
}

export default async function Home() {
    //const users = await fetchUsers();
    const products = await fetchProducts();

    return (
        <>
            {" "}
            <h1 className="max-w-screen-xl mx-auto text-4xl font-bold mt-9 ">
                Products
            </h1>
            <div className="max-w-screen-xl mx-auto my-6 grid sm:grid-cols-2 max-sm:p-16 max-sm:mx-6 md:grid-cols-3  lg:grid-cols-4 gap-6 ">
                <Suspense fallback={<LoadingComponent />}>
                    {products.map((product: ProductType) =>  (
                            <Link
                                href={`/product/${product.id}`}
                                key={product.id}
                            >
                                <CardProductComponent
                                    name={product.name}
                                    image={product.image}
                                    seller={product.seller}
                                    price={product.price}
                                    desc={product.desc}
                                    category={product.category}
                                    quantity={product.quantity}
                                    id={product.quantity}
                                />
                            </Link>
                        )
                    )}
                </Suspense>
            </div>
        </>
    );
}

