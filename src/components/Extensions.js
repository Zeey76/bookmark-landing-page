function Extensions() {
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center p-2 mx-auto">
      <div className="max-w-[30rem]">
        <h2 className="text-2xl text-center mb-1">Download the extension</h2>
        <p className="text-GrayishBlue text-center">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-1.5 justify-center items-center">
          <div className="shadow-lg flex gap-2 flex-col rounded-md p-1.5 items-center">
            <img src="./images/logo-chrome.svg" className="w-5" alt="" />
            <div> 
              <p className="mb-0.5 text-center">Add to Chrome</p>
              <p className="text-center">Minimum version 62</p>
            </div>
            <button className="bg-SoftBlue w-[13rem] pt-0.5 pb-0.5 text-white rounded-md border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
              Add & Install Extension
            </button>
          </div>
          <div className="shadow-lg flex gap-2 flex-col lg:mt-4 rounded-md p-1.5 items-center">
            <img src="./images/logo-firefox.svg" className="w-5" alt="" />
            <div>
              <p className="mb-0.5 text-center">Add to Firefox</p>
              <p className="text-center">Minimum version 55</p>
            </div>
            <button className="bg-SoftBlue w-[13rem] pt-0.5 pb-0.5 text-white rounded-md border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
              Add & Install Extension
            </button>
          </div>
          <div className="shadow-lg flex gap-2 lg:mt-6 flex-col rounded-md p-1.5 items-center">
            <img src="./images/logo-opera.svg" className="w-5" alt="" />
            <div>
              <p className="mb-0.5 text-center">Add to Chrome</p>
              <p className="text-center">Minimum version 46</p>
            </div>
            <button className="bg-SoftBlue w-[13rem] pt-0.5 pb-0.5 text-white rounded-md border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Extensions;
