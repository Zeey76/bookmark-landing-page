import { useState } from "react";

function Header({setShowNavBar}) {
  const [active, setActive] = useState("login");
  return (
    <div className="flex justify-between pt-2.5 items-center w-[80%] mx-auto">
      <img src="./images/logo-bookmark.svg" alt="" />
      {/* For Large Screens */}
      <div className="hidden lg:flex ">
        <button
          className={`uppercase pt-[0.6rem] pb-[0.6rem] rounded-md w-7 text-VeryDarkBlue font-normal hover:text-SoftRed ${
            active === "features"
              ? "bg-SoftRed shadow-md text-white hover:bg-white border-2 border-SoftRed"
              : ""
          }`}
          onClick={() => setActive("features")}
        >
          Features
        </button>
        <button
          className={`uppercase pt-[0.6rem] pb-[0.6rem] rounded-md w-7 text-VeryDarkBlue font-normal hover:text-SoftRed ${
            active === "pricing"
              ? "bg-SoftRed shadow-md text-white hover:bg-white border-2 border-SoftRed"
              : ""
          }`}
          onClick={() => setActive("pricing")}
        >
          Pricing
        </button>
        <button
          className={`uppercase pt-[0.6rem] pb-[0.6rem] rounded-md w-7 text-VeryDarkBlue font-normal hover:text-SoftRed ${
            active === "contact"
              ? "bg-SoftRed shadow-md text-white hover:bg-white border-2 border-SoftRed"
              : ""
          }`}
          onClick={() => setActive("contact")}
        >
          Contact
        </button>
        <button
          className={`uppercase pt-[0.6rem] pb-[0.6rem] rounded-md w-7 text-VeryDarkBlue font-normal hover:text-SoftRed ${
            active === "login"
              ? "bg-SoftRed shadow-md text-white hover:bg-white border-2 border-SoftRed"
              : ""
          }`}
          onClick={() => setActive("login")}
        >
          Login
        </button>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setShowNavBar(true)}>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Header;
