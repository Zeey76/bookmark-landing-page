import { useState } from "react";
import FeatureContent from "./feature";
import FeaturesHeading from "./FeaturesHeading";
import Tabs from "./TabsOptions";

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <FeaturesHeading />
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="w-full flex justify-center items-center">
        {activeTab === 0 && (
          <FeatureContent
            tab={1}
            title={"Bookmark in one click"}
            content={
              "Organize your bookamrks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites"
            }
          />
        )}
        {activeTab === 1 && (
          <FeatureContent
            tab={2}
            title={"Intelligent search"}
            content={
              "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks"
            }
          />
        )}
        {activeTab === 2 && (
          <FeatureContent
            tab={3}
            title={"Share your bookmarks"}
            content={
              "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button"
            }
          />
        )}
      </div>
    </div>
  );
}
export default Features;
