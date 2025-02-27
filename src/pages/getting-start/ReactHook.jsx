import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "@/features/product/productSlice";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import ProductCard from "@/components/card/ProductCard";

const ReactHook = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(data);
  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="text-blue-900 text-3xl font-bold">Products Page</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading &&
          skeleton.map((index) => <ProductCardSkeleton key={index} />)}
        {!isLoading &&
          data?.products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              img={product.thumbnail}
              price={product.price}
              rating={product.rating}
            />
          ))}
      </section>
    </main>
  );
};

export default ReactHook;
