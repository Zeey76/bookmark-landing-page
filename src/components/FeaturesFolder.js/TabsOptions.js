export default function Tabs({ setActiveTab, activeTab }) {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:max-w-[39rem]">
        <hr className="md:hidden" />
        <div className="relative w-full">
          <h3
            className={`tab pb-[1.4rem] pt-[1.4rem] text-lg text-gray-500 border-b-[1px] border-GrayishBlue text-center ${
              activeTab === "Tab1" ? "active font-bold" : "font-medium"
            }`}
          >
            <button onClick={() => setActiveTab("Tab1")} className="hover:text-SoftRed">
              Simple Bookmarking
            </button>
          </h3>
        </div>
        <div className="relative w-full">
          <h3
            className={`tab pb-[1.4rem] pt-[1.4rem] text-lg text-gray-500 border-b-[1px] border-GrayishBlue text-center ${
              activeTab === "Tab2" ? "active font-bold" : "font-medium"
            }`}
          >
            <button onClick={() => setActiveTab("Tab2")} className="hover:text-SoftRed">
              Speedy Searching
            </button>
          </h3>
        </div>
        <div className="relative w-full">
          <h3
            className={`tab pb-[1.4rem] pt-[1.4rem] text-lg text-gray-500 border-b-[1px] border-GrayishBlue text-center  ${
              activeTab === "Tab3" ? "active font-bold" : "font-medium"
            }`}
          >
            <button onClick={() => setActiveTab("Tab3")} className="hover:text-SoftRed">Easy Sharing</button>
          </h3>
        </div>
      </div>
    </div>
  );
}
