import { useState } from "react";
import Feature from "./feature";
import FeaturesHeading from "./FeaturesHeading";
import Tabs from "./TabsOptions";

function Features() {
  const [activeTab, setActiveTab] = useState("Tab1")
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <FeaturesHeading/>
      <Tabs setActiveTab={setActiveTab}/>
      <div className="w-full flex justify-center items-center">
        {activeTab === "Tab1" && <Feature
          tab={1}
          title={"Bookmark in one click"}
          content={
            "Organize your bookamrks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites"
          }
        />}
        {activeTab === "Tab2" && <Feature
          tab={2}
          title={"Intelligent search"}
          content={
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks"
          }
        />}
        {activeTab === "Tab3" && <Feature
          tab={3}
          title={"Share your bookmarks"}
          content={
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button"
          }
        />}
      </div>
    </div>
  );
}
export default Features;
