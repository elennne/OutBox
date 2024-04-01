import React, { useEffect, useState } from "react";
import useProductStore from "../hooks/store";

const Cart = () => {
  const { cart, setCart, removeFromCart, updateCartItemQuantity } =
    useProductStore();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (storedCart.length > 0) {
      setAddedToCart(true);
      setCart(storedCart);
    } else {
      setAddedToCart(false);
    }
  }, [setCart]);

  const increaseQuantity = (productId) => {
    updateCartItemQuantity(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find((product) => product.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      updateCartItemQuantity(productId, -1);
    } else {
      removeFromCart(productId);
    }
  };

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="h-screen flex justify-end">
      <div className="w-[95%] flex flex-col items-center justify-start mt-10 flex-wrap">
        {addedToCart && cart.length > 0 ? (
          cart.map((product, i) => (
            <div
              className="w-[80%] border border-black rounded-md flex items-center justify-evenly flex-wrap"
              key={i}
            >
              <img
                className="w-20 h-20 object-contain bg-white"
                src={product.image}
                alt={product.title}
              />
              <h2 className="font-bold text-lg flex justify-center items-center flex-wrap">
                {product.title}
              </h2>
              <p>ფასი: {product.price}₾</p>
              <p>რაოდენობა: {product.quantity}</p>
              <div>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-red-600 rounded-lg text-white px-2 py-1 "
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="bg-green-600 rounded-lg text-white px-2 py-1 ml-2 "
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-600 rounded-lg text-white px-2 py-1 ml-2"
              >
                კალათიდან წაშლა
              </button>
            </div>
          ))
        ) : (
          <p>კალათაში არ არის პროდუქტები დამატებული. </p>
        )}
        {addedToCart && cart.length > 0 && (
          <div className="mt-4">ჯამური ფასი: {totalPrice.toFixed(1)}₾</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
