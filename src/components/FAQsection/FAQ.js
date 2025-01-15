import { useState } from "react";
import FaqContent from "./FaqContent";

function Faq() {
  const [openPanel, setOpenPanel] = useState(null);
  function handlePanel(index) {
    setOpenPanel((prev) => (prev === index ? null : index));
  }
  const questions = [
    "What is a Bookmark?",
    "How can i request a new browser?",
    "Is there a mobile app?",
    "What about other Chromium browsers",
  ];
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <div className="max-w-[30rem] flex justify-center flex-col">
        <div className="mb-2">
          <h2 className="text-3xl text-center mb-1 font-bold text-VeryDarkBlue">
            Frequently Asked Questions
          </h2>
          <p className="text-GrayishBlue text-center text-[1.1rem]">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div>
          <hr />
          {questions.map((question, index) => {
            return (
              <>
                <Questions
                  handlePanel={handlePanel}
                  question={question}
                  openPanel={openPanel}
                  index={index}
                />
                <hr />
              </>
            );
          })}
        </div>
        <button className="self-center mt-3 bg-SoftBlue w-7 rounded-md pt-[0.8rem] pb-[0.8rem] text-sm font-medium text-white shadow-md border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
          More Info
        </button>
      </div>
    </div>
  );
}

function Questions({ handlePanel, question, openPanel, index }) {
  return (
    <>
      <div
        className="flex justify-between items-center mt-1 mb-1 cursor-pointer"
        onClick={() => handlePanel(index)}
      >
        <h4 className="font-semibold text-VeryDarkBlue text-[1.1rem] hover:text-SoftRed w-full">
          {question}
        </h4>
        <div>
          <button>
            {openPanel !== index ? (
              <img src="./images/icon-arrow.svg" alt="" />
            ) : (
              <ArrowUp />
            )}
          </button>
        </div>
      </div>
      {openPanel === index && <FaqContent />}
    </>
  );
}

function ArrowUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-180"
      width="18"
      height="12"
    >
      <path
        fill="none"
        stroke="hsl(0, 94%, 66%)"
        stroke-width="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  );
}
export default Faq;
