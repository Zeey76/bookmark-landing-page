import FeatureContent from "./feature";
import FeaturesHeading from "./FeaturesHeading";
import Tabs from "./TabsOptions";
import useActive from "../CustomHooks/useActive";

function Features() {
  const { active, handleActive } = useActive();
  return (
    <div className="flex flex-col mt-6 gap-3 justify-center items-center w-[80%] mx-auto">
      <FeaturesHeading />
      <Tabs handleActive={handleActive} active={active} />
      <div className="w-full flex justify-center items-center">
        {active === 0 && (
          <FeatureContent
            tab={1}
            title={"Bookmark in one click"}
            content={
              "Organize your bookamrks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites"
            }
          />
        )}
        {active === 1 && (
          <FeatureContent
            tab={2}
            title={"Intelligent search"}
            content={
              "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks"
            }
          />
        )}
        {active === 2 && (
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
