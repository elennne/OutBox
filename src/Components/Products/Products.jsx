import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProductStore from "../../hooks/store";
import PriceFilter from "../Price/PriceFilter";

const Products = ({ searchInput }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart, addItemToCart } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:3000/product", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handlePriceFilter = (filteredPrice) => {
    setFilteredProducts(filteredPrice);
  };

  const handleCart = (product) => {
    addItemToCart(product);
  };

  return (
    <div className="ml-[7%]  w-[93%] h-screen">
      <PriceFilter products={products} onPriceFilter={handlePriceFilter} />
      <div className="flex justify-center gap-10">
        {filteredProducts.map((product) => (
          <div
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-md  flex flex-col items-center justify-between w-60 h-80 mb-1"
            key={product.id}
          >
            <div className="w-[100%] h-[60%]">
              <img
                className="w-[100%] h-[100%] object-contain bg-white "
                src={product.image}
                alt={product.title}
              />
            </div>
            <h2 className="mb-1">{product.title}</h2>
            <span className="mb-1">{product.price}₾</span>

            <div className="flex gap-3">
              <button>
                <FaHeart size={"2rem"} className="hover:text-red-600" />
              </button>

              <Link to={`/product/${product.id}`}>
                <button className="px-3 py-2 text-center border border-transparent border-opacity-0 hover:border-fuchsia-500 ">
                  More
                </button>
              </Link>
              <button onClick={() => handleCart(product)}>
                <FaCartArrowDown
                  size={"2rem"}
                  className="hover:text-yellow-200"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
