import ProductTable from "@/components/table/ProductTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center text-center max-w-screen-xl mx-auto ">
      <h1 className="font-bold text-[25px]">Product Data</h1>
     <ProductTable/>
   
    
      {/* <UserTable /> */}
    </div>
  );
};

export default page;