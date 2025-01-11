function Faq() {
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <div className="max-w-[28rem] flex justify-center flex-col">
        <div className="mb-2">
          <h2 className="text-2xl text-center mb-1">
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
            <h4>What is a Bookmark?</h4>
            <div>
              <img src="./images/icon-arrow.svg" />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-1 mb-1">
            <h4>How can i request a new browser?</h4>
            <div>
              <img src="./images/icon-arrow.svg" />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-1 mb-1">
            <h4>Is there a mobile app?</h4>
            <div>
              <img src="./images/icon-arrow.svg" />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-1 mb-1">
            <h4>What about other Chromium browsers</h4>
            <div>
              <img src="./images/icon-arrow.svg" />
            </div>
          </div>
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
