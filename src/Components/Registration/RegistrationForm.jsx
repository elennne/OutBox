import axios from "axios";

import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = (success) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};
    if (formData.fname === "" || formData.fname === null) {
      isValid = false;
      validationErrors.fname = "სახელი აუცილებელია";
    }
    if (formData.lname === "" || formData.lname === null) {
      isValid = false;
      validationErrors.fname = "გვარი აუცილებელია";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "ემაილი აუცილებელია";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "ემაილი აუცილებელია";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "პაროლი აუცილებელია";
    } else if (formData.password.length < 8) {
      isValid = false;
      validationErrors.password = "პაროლი უნდა შეადგენდეს მინიმუმ 8 ასოს";
    }
    if (formData.cpassword === "" || formData.cpassword === null) {
      isValid = false;
      validationErrors.cpassword = "პაროლი აუცილებელია";
    } else if (formData.cpassword.length < 8) {
      isValid = false;
      validationErrors.cpassword = "პაროლი უნდა შეადგენდეს მინიმუმ 8 ასოს";
    } else if (formData.cpassword !== formData.password) {
      isValid = false;
      validationErrors.cpassword = "პაროლები არ ემთხვევა";
    }
    setErrors(validationErrors);
    setValid(isValid);

    return function (dispatch) {
      if (Object.keys(validationErrors).length === 0) {
        axios
          .post("http://localhost:3000/auth/register", formData)
          .then((result) => {
            const { token } = result.data;
            localStorage.setItem("token", token);
            localStorage.getItem("token");
            dispatch({
              payload: Response.data,
            });
            success();
          })
          .catch((err) => console.log(err));
      }
    };
  };

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  return (
    <div className="h-screen w-[93%] flex justify-end ">
      <div className="w-[100%] flex justify-center ">
        <div className=" bg-white w-[60%] h-fit p-5 mt-16 ml-[15%] border rounded-md flex flex-col justify-center items-center ">
          <form className="flex  flex-col" onSubmit={handleSubmit}>
            <label htmlFor="">სახელი:</label>
            <input
              autoComplete=""
              type="text"
              name="fname"
              placeholder="ჩაწერე სახელი"
              onChange={(event) =>
                setFormData({ ...formData, fname: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="text-red-500">{errors.fname}</span>
            )}
            <label htmlFor="">გვარი:</label>
            <input
              autoComplete=""
              type="text"
              name="lname"
              placeholder="ჩაწერე გვარი"
              onChange={(event) =>
                setFormData({ ...formData, lname: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="text-red-500">{errors.lname}</span>
            )}
            <label htmlFor="">ემაილი:</label>
            <input
              autoComplete=""
              type="email"
              name="email"
              placeholder="ჩაწერე  ემაილი"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="text-red-500">{errors.email}</span>
            )}
            <label htmlFor="">პაროლი:</label>
            <input
              autoComplete=""
              type="password"
              name="password"
              placeholder="ჩაწერე პაროლი"
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="text-red-500">{errors.password}</span>
            )}
            <label htmlFor="">გაიმეორეთ პაროლი:</label>
            <input
              autoComplete=""
              type="password"
              name="cpassword"
              placeholder="გაიმეორე პაროლი"
              onChange={(event) =>
                setFormData({ ...formData, cpassword: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="text-red-500">{errors.cpassword}</span>
            )}
            <button
              type="submit"
              className=" mt-5  bg-rose-300 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300"
            >
              რეგისტრაცია
            </button>
            <p>
              ექაუნთი შექმნილი გაქვს? დააჭირე
              <Link to="/login">
                <p className="underline">შესვლა</p>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
