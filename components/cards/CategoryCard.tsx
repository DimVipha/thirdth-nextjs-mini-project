import React from "react"

export default function CategoryCard() {
    const list = [
        {
            title: "Clothes",
        },
        {
            title: "Beuaty ",
        },
        {
            title: "Skin Care",
        },
        {
            title: "Make up",
        }
    ];
  return (
    <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="max-w-sm">
            {list.map((item, index) => (
                <div key={index} className=" p-16 rounded-md shadow-md mb-4 border-gray-500 border-t-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    {/* <p className="text-lg text-gray-600">
                        {item.description}
                    </p> */}
                </div>
            ))}
        </div>
    </div>
  )
}