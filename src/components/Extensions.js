function Extensions() {
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center p-2 mx-auto">
      <div className="max-w-[30rem]">
        <h2 className="text-2xl text-center mb-1">Download the extension</h2>
        <p className="text-GrayishBlue text-center">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-1.5 justify-center items-center">
          <Extension version={62} extension={"chrome"} />
          <Extension version={55} extension={"firefox"} />
          <Extension version={46} extension={"opera"} />
        </div>
      </div>
    </div>
  );
}

function Extension({ version, extension }) {
  return (
    <div
      className={`shadow-lg flex gap-2 relative flex-col rounded-md p-1.5 items-center ${
        extension === "firefox" ? "lg:mt-3" : ""
      } ${extension === "opera" ? "lg:mt-6" : ""}`}
    >
      <img src={`./images/logo-${extension}.svg`} className="w-5" alt="" />
      <div>
        <p className="mb-0.5 text-center">
          Add to {extension.charAt(0).toUpperCase() + extension.slice(1)}
        </p>
        <p className="text-center">Minimum version {version}</p>
      </div>
      <img src="./images/bg-dots.svg" alt="" className="absolute bottom-5.5" />
      <button className="bg-SoftBlue w-[13rem] mt-[1.3rem] pt-0.5 pb-0.5 text-white rounded-md border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
        Add & Install Extension
      </button>
    </div>
  );
}
export default Extensions;
