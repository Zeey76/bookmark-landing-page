export default function Tabs({setActiveTab}) {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:max-w-[35rem]">
        <hr className="md:hidden" />
        <h3>
          <button onClick={() => setActiveTab("Tab1")}>Simple Bookmarking</button>
        </h3>
        <hr className="md:hidden" />
        <h3>
          <button onClick={() => setActiveTab("Tab2")}>Speedy Searching</button>
        </h3>
        <hr className="md:hidden" />
        <h3>
          <button onClick={() => setActiveTab("Tab3")}>Easy Sharing</button>
        </h3>
        <hr className="md:hidden" />
      </div>
      <hr className="mt-[0.7rem] hidden md:block max-w-[40rem]" />
    </div>
  );
}
