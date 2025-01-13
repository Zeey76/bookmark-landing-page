function Hero() {
  return (
    <div className="flex flex-col-reverse justify-center items-center lg:grid md:grid-cols-2 mt-4.5 w-[80%] mx-auto">
      <div className="flex gap-2 flex-col max-w-[28rem] mt-2">
        <h1 className="text-3xl text-center lg:text-left lg:text-[2.7rem] font-bold text-VeryDarkBlue">
          A Simple Bookmark Manager
        </h1>
        <p className="text-GrayishBlue text-center lg:text-left text-[1rem]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-buttons flex gap-1.5 justify-center lg:justify-start ">
          <button className="bg-SoftBlue w-9 text-sm pt-[0.7rem] pb-[0.7rem] font-semibold shadow-md text-white rounded-sm border-2 border-transparent hover:bg-white hover:text-SoftBlue hover:border-SoftBlue">
            Get it on Chrome
          </button>
          <button className="bg-neutral-100 font-semibold text-sm text-VeryDarkBlue shadow-md w-9 pt-[0.7rem] pb-[0.7rem] rounded-sm border-2 border-transparent hover:bg-white  hover:border-VeryDarkBlue">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="relative lg:right-[-70px]">
        <img src="./images/illustration-hero.svg" alt="" />
      </div>
    </div>
  );
}
export default Hero;
