export default function Tabs({ setActiveTab, activeTab }) {
  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:max-w-[39rem]">
        <hr className="md:hidden" />
        {tabs.map((tab, index) => {
          return (
            <div className="relative w-full">
              <h3
                className={`tab pb-[1.4rem] pt-[1.4rem] text-lg text-gray-500 border-b-[1px] border-GrayishBlue text-center ${
                  activeTab === index ? "active font-bold" : "font-medium"
                }`}
              >
                <button
                  onClick={() => setActiveTab(index)}
                  className="hover:text-SoftRed"
                >
                  {tab}
                </button>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
