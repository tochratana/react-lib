import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ProductCard = ({ img, title, price, rating, id }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={img} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <NavLink to={`/product/${id}`}>
          <h5 className="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </NavLink>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <CiStar className="text-amber-300" />
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
