function TopFooter() {
  return (
    <div className="bg-SoftBlue mt-6 pt-3 pb-3">
      <div className="max-w-[25rem] text-white mx-auto flex gap-[1.3rem] items-center justify-center flex-col">
        <p className="uppercase text-md tracking-[0.3rem] font-medium">35,000+ Already Joined</p>
        <p className="text-2xl text-center md:text-[2rem] leading-tight font-medium">
          Stay up-to-date with what we're doing
        </p>
        <div className="flex flex-col md:flex-row gap-1">
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-[0.7rem] rounded-sm w-[15rem]"
          />
          <button className="bg-SoftRed shadow-sm w-full md:w-[8rem] pt-0.5 pb-0.5 text-white rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopFooter;
