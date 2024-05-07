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
                    {products.map((product: ProductType) => {
                        return (
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
                                    category={""}
                                    quantity={0}
                                    id={0}
                                />
                            </Link>
                        );
                    })}
                    {/* {users?.map((user: UserType) => (
          <UserCard
            key={user.id}
            lastname={user.lastname}
            email={user.email}
          />
        ))} */}
                </Suspense>
            </div>
        </>
    );
}

// async function fetchData() {
//   const data = await fetch("https://dummyjson.com/products")
//   const res = await data.json()
//   return res.products;
// }

// export default async function Home() {
//   const products = await fetchData()

//   return (
//     <>
//       <div className="mt-10 flex justify-center flex-wrap gap-5">
//         <Suspense fallback={<LoadingComponent />}>
//           {products.map((product: ProductType) => {
//             return (
//               <Link href={`/product/${product.id}`} key={product.id}>
//                 <CardComponent
//                   title={product.title}
//                   thumbnail={product.thumbnail} seller={""} name={""} price={""}                />
//               </Link>
//             );
//           })}
//         </Suspense>
//       </div>
//     </>
//   );
// }
