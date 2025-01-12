export default function Tabs({setActiveTab, activeTab}) {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:max-w-[35rem]">
      <hr className="md:hidden" />
        <h3>
          <button onClick={() => setActiveTab("Tab1")}>Simple Bookmarking</button>
        </h3>
        <hr className={`md:hidden  ${activeTab === "Tab1" ? "bg-SoftRed h-[2px]"  : ""}`}/>
        <h3>
          <button onClick={() => setActiveTab("Tab2")}>Speedy Searching</button>
        </h3>
        <hr className={`md:hidden  ${activeTab === "Tab2" ? "bg-SoftRed h-[2px]"  : ""}`}/>
        <h3>
          <button onClick={() => setActiveTab("Tab3")}>Easy Sharing</button>
        </h3>
        <hr className={`md:hidden  ${activeTab === "Tab3" ? "bg-SoftRed h-[2px]"  : ""}`}/>
      </div>
      <div className="flex ">
      <hr className={`mt-[0.7rem] hidden md:block w-[13rem] h-[0.5px] ${activeTab === "Tab1" ? "bg-SoftRed h-[2px]"  : ""}`} />
      <hr className={`mt-[0.7rem] hidden md:block w-[13rem] h-[0.5px] ${activeTab === "Tab2" ? "bg-SoftRed h-[2px]"  : ""}`} />
      <hr className={`mt-[0.7rem] hidden md:block w-[13rem] h-[0.5px] ${activeTab === "Tab3" ? "bg-SoftRed h-[2px]"  : ""}`} />
      </div>
    </div>
  );
}
