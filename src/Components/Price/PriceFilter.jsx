import React, { useState } from "react";
import Input from "../Input";

const PriceFilter = ({ products, onPriceFilter }) => {
  const filterProducts = (price) => {
    let minPrice, maxPrice;
    switch (price) {
      case "all":
        minPrice = Number.MIN_SAFE_INTEGER;
        maxPrice = Number.MAX_SAFE_INTEGER;
        break;
      case "under200":
        minPrice = 0;
        maxPrice = 200;
        break;
      case "under450":
        minPrice = 200;
        maxPrice = 450;
        break;
      case "over500":
        minPrice = 500;
        maxPrice = Number.MAX_SAFE_INTEGER;
        break;
      default:
        return products;
    }
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  };

  const handlePriceFilter = (event) => {
    const price = event.target.value;
    const filteredPrice = filterProducts(price);
    onPriceFilter(filteredPrice);
  };

  return (
    <div className="flex flex-wrap justify-end items-center my-10">
      <div className="flex  justify-center gap-4 items-start  w-[100%] p-5 ">
        <div className=" w-fit p-2 rounded-md bg-rose-400  hover:bg-rose-600 transition duration-300">
          <button value="all" onClick={handlePriceFilter}>
            ყველა
          </button>
        </div>
        <div className=" w-fit p-2 rounded-md bg-rose-400  hover:bg-rose-600 transition duration-300">
          <button value="under200" onClick={handlePriceFilter}>
            200 დაბლა
          </button>
        </div>
        <div className=" w-fit p-2 rounded-md bg-rose-400  hover:bg-rose-600 transition duration-300">
          <button value="under450" onClick={handlePriceFilter}>
            450 დაბლა
          </button>
        </div>
        <div className=" w-fit p-2 rounded-md bg-rose-400  hover:bg-rose-600 transition duration-300">
          <button value="over500" onClick={handlePriceFilter}>
            500 მაღლა
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
