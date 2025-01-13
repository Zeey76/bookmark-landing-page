import { useState } from "react";
import FaqContent from "./FaqContent";

function Faq() {
  const [openPanel, setOpenPanel] = useState(null);
  function handlePanel(index) {
    setOpenPanel((prev) => (prev === index ? null : index));
  }
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <div className="max-w-[28rem] flex justify-center flex-col">
        <div className="mb-2">
          <h2 className="text-3xl text-center mb-1 font-bold text-VeryDarkBlue">
            Frequently Asked Questions
          </h2>
          <p className="text-GrayishBlue text-center">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div>
          <hr />
          <div className="flex justify-between items-center mt-1 mb-1">
            <h4 className="font-semibold text-VeryDarkBlue">What is a Bookmark?</h4>

            <div>
              <button onClick={() => handlePanel(1)}>
                {openPanel !== 1 ? (
                  <img src="./images/icon-arrow.svg" alt="" />
                ) : (
                  <img src="./images/icon-close.svg" alt="" />
                )}
              </button>
            </div>
          </div>
          {openPanel === 1 && <FaqContent />}
          <hr />
          <div className="flex justify-between items-center mt-[0.8rem] mb-[0.8rem]">
            <h4 className="font-semibold text-VeryDarkBlue">How can i request a new browser?</h4>
            <div>
              <button onClick={() => handlePanel(2)}>
                <img src="./images/icon-arrow.svg" alt="" />
              </button>
            </div>
          </div>
          {openPanel === 2 && <FaqContent />}
          <hr />
          <div className="flex justify-between items-center mt-[0.8rem] mb-[0.8rem]">
            <h4 className="font-semibold text-VeryDarkBlue">Is there a mobile app?</h4>
            <div>
              <button onClick={() => handlePanel(3)}>
                <img src="./images/icon-arrow.svg" alt="" />
              </button>
            </div>
          </div>
          {openPanel === 3 && <FaqContent />}
          <hr />
          <div className="flex justify-between items-center mt-[0.8rem] mb-[0.8rem]">
            <h4 className="font-semibold text-VeryDarkBlue">What about other Chromium browsers</h4>
            <div>
              <button onClick={() => handlePanel(4)}>
                <img src="./images/icon-arrow.svg" alt="" />
              </button>
            </div>
          </div>
          {openPanel === 4 && <FaqContent />}
          <hr />
        </div>
        <button className="self-center mt-3 bg-SoftBlue w-10 pt-0.5 pb-0.5 text-white rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
}
export default Faq;
