import React, { useState } from "react";
import Products from "../Components/Products/Products";

import ProductCategory from "../Components/Products/ProductCategory";

const Home = ({ searchInput }) => {
  return (
    <div>
      <ProductCategory />
      <Products searchInput={searchInput} />
    </div>
  );
};

export default Home;
