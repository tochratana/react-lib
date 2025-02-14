import CardProduct from "../../components/demo/CardProduct";
// import CardProduct from "@/components/demo/CardProduct.js";
import React from "react";

const Fetch = () => {
  // console.log("Hello");
  return (
    <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardProduct />
    </div>
  );
};

export default Fetch;
