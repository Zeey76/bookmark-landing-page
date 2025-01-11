function Features() {
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center">
      <div className="max-w-[30rem]">
        <h2 className="text-2xl text-center mb-1">Features</h2>
        <p className="text-GrayishBlue text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:max-w-[35rem]">
          <hr className="md:hidden" />
          <h3>Simple Bookmarking</h3>
          <hr className="md:hidden" />
          <h3>Speedy Searching</h3>
          <hr className="md:hidden" />
          <h3>Easy Sharing</h3>
          <hr className="md:hidden" />
        </div>
        <hr className="mt-[0.7rem] hidden md:block max-w-[40rem]" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="gap-5 flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:max-w-[22rem] ">
            <img src="./images/illustration-features-tab-1.svg" />
          </div>
          <div className="flex gap-1 flex-col max-w-[22rem]">
            <h1 className="text-2xl text-center lg:text-left">
              Bookmark in one click
            </h1>
            <p className="text-GrayishBlue text-center lg:text-left text-[1rem]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className="flex gap-1.5 justify-center lg:justify-start">
              <button className="bg-SoftBlue w-10 pt-0.5 pb-0.5 text-white rounded-sm">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
