import { useState } from "react";

function TopFooter() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleChange(email) {
    setEmail(email);
  }

  function handleSubmit() {
    setIsValid(validateEmail(email));
  }

  return (
    <div className="bg-SoftBlue mt-6 pt-3 pb-3">
      <div className="max-w-[25rem] text-white mx-auto flex gap-[1.3rem] items-center justify-center flex-col">
        <p className="uppercase text-md tracking-[0.3rem] font-medium">
          35,000+ Already Joined
        </p>
        <p className="text-2xl text-center md:text-[2rem] leading-tight font-medium">
          Stay up-to-date with what we're doing
        </p>
        <div className="flex flex-col items-start md:flex-row gap-1">
          <div>
            <div
              className={`p-[0.7rem] rounded-sm w-[17rem] bg-white text-VeryDarkBlue flex justify-between items-center border-2 border-transparent ${
                !isValid ? "border-SoftRed" : ""
              }`}
            >
              <input
                type="email"
                value={email}
                className="focus:outline-none w-[13rem]"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Enter your email address"
              />
              {!isValid && <img src="./images/icon-error.svg" alt="error" />}
            </div>
            {!isValid && (
              <div className="block text-sm bg-SoftRed p-0.5 rounded-b-md text-white w-[17rem] pt-[0.3rem] pb-[0.3rem]">
                Whoops, make sure it's an email
              </div>
            )}
          </div>

          <button
            className="bg-SoftRed shadow-sm w-full md:w-[8rem] pt-0.5 pb-0.5 text-white rounded-md border-2 border-transparent hover:border-SoftRed hover:bg-white hover:text-SoftRed"
            onClick={handleSubmit}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopFooter;
