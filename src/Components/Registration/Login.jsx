import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: email,
        password: password,
      });
      const { access_token, refresh_token } = response.data;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error:", error);
      setLoginError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md flex flex-col justify-center items-center"
      >
        {isLoggedIn ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col justify-center items-center flex-wrap gap-3">
              <p className="font-bold">
                გილოცავთ, წარმატებით გაიარეთ ავტორიზაცია
              </p>
              <Link to="/">
                <p className=" text-rose-600 hover:text-rose-300 transition duration-300">
                  მთავარ გვერდზე დაბრუნება
                </p>
              </Link>
            </div>
            <button
              className=" bg-rose-300 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300"
              onClick={handleLogout}
            >
              გამოსვლა
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 flex-wrap">
              <label htmlFor="email">ემაილი</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-80 px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <label htmlFor="password">პაროლი</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-80 px-3 py-2 border rounded-md focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
            </div>
            {loginError && <p className="text-red-500">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-rose-300 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300"
            >
              შესვლა
            </button>
            <Link to="/registration">
              <p className="underline">გაიარე რეგისტრაცია</p>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
