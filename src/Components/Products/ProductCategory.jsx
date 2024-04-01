import React, { useEffect } from "react";
import useProductStore from "../../hooks/store";

const ProductCategory = () => {
  const { productCategory, fetchProductCategory } = useProductStore();

  useEffect(() => {
    fetchProductCategory();
  }, []);

  return (
    <div>
      <div className=" h-fit text-white flex flex-wrap gap-5 py-2 justify-center items-center">
        {productCategory.map((product) => (
          <button
            className="border border-black rounded-md p-2 text-black"
            key={product.id}
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
