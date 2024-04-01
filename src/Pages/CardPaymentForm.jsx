import React from "react";

function CardPaymentForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-bold mb-4">ბარათით გადახდა</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="cardNumber"
              className="text-sm font-medium text-gray-700"
            >
              ბარათის ნომერი
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="**** **** **** ****"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cardName"
              className="text-sm font-medium text-gray-700"
            >
              ბარათის სახელი
            </label>
            <input
              id="cardName"
              type="text"
              placeholder="მაგ: გიორგი ჩაგვავა"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="expiry"
              className="text-sm font-medium text-gray-700"
            >
              ვადა
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="MM/YY"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cvv" className="text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
             
              type="text"
              placeholder="***"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-300 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300"
          >
            გადახდა
          </button>
        </form>
        <p id="message" className="text-center mt-6"></p>
      </div>
    </div>
  );
}

export default CardPaymentForm;
