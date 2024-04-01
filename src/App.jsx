import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import SingleProductPage from "./Pages/SingleProduct";
import RegistrationForm from "./Components/Registration/RegistrationForm";
import Footer from "./Pages/Footer";
import Favorites from "./Pages/Favorites";
import CardPaymentForm from "./Pages/CardPaymentForm";

function App({ isLoggedIn }) {
  const [searchInput, setSearchInput] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className=" bg-rose-200">
      <Router>
        <Header isLoggedIn={isLoggedIn} handleSearchInput={handleSearchInput} />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home searchInput={searchInput} />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<CardPaymentForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
