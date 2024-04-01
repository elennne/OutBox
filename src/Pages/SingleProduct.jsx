import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { productId } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/product/${productId}`
      );
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="ml-[7%] w-[93%] flex justify-center items-center flex-wrap my-24">
        {singleProduct ? (
          <div className="p-3 border-2 border-red-900 flex justify-evenly flex-wrap items-center h-full">
            <img
              className="border-2 border-black w-[40%] h-[30%]"
              src={singleProduct.image}
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold">{singleProduct.title}</h1>
              <p>{singleProduct.description}</p>
              <span className="font-bold text-green-700">
                {singleProduct.price}₾
              </span>
              <div className="flex gap-3">
                <button>
                  <FaHeart size={"2rem"} className="hover:text-red-600" />
                </button>
                <button className="border border-red-800 px-3 pb-2 pt-1 bg-red-800 text-white rounded">
                  ყიდვა
                </button>
                <button>
                  <FaCartArrowDown
                    size={"2rem"}
                    className="hover:text-yellow-200"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>something went wrong</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
