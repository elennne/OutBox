import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMap,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="bg-gradient-to-l from-rose-600 to-blue-950 w-[93%] py-12 px-6 flex flex-wrap justify-evenly items-start">
        <div>
          <h1 className="text-white text-lg font-semibold mb-4">ნავიგაცია</h1>
          <div>
            <p>კომპანიის შესახებ</p>
            <p>წესები და პირობები</p>
            <p>ორპორატიული გაყიდვები</p>
            <p>მიწოდების სერვისი</p>
            <p>კარიერა</p>
          </div>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold mb-4">გადახდები</h1>
          <div>
            <p>გადახდის მეთოდები</p>
            <p>გარანტია</p>
            <p>განვადება</p>
            <p>ნივთის დაბრუნება</p>
          </div>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold mb-4">გამოგვყევი</h1>
          <div>
            <div className="flex items-center">
              <FaFacebook className="text-white mr-2" />
              <p className="text-white">Facebook</p>
            </div>
            <div className="flex items-center">
              <FaYoutube className="text-white mr-2" />
              <p className="text-white">Youtube</p>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-white mr-2" />
              <p className="text-white">Instagram</p>
            </div>
            <div className="flex items-center">
              <FaTiktok className="text-white mr-2" />
              <p className="text-white">Tiktok</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold mb-4">კონტაქტი</h1>
          <div>
            <div className="flex items-center">
              <FaMailBulk className="text-white mr-2" />
              <p className="text-white">info@outbox.ge</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-white mr-2" />
              <p className="text-white">+995 (32) 2 00 46 02</p>
            </div>
            <div className="flex items-center">
              <FaMap className="text-white mr-2" />
              <p className="text-white">ფილიალები</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
