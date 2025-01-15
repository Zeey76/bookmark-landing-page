import useActive from "../CustomHooks/useActive";

function Header({ setShowNavBar }) {
  const { active, handleActive } = useActive();
  const navItems = ["features", "pricing", "contact", "login"];
  return (
    <div className="flex justify-between pt-2.5 items-center w-[80%] mx-auto">
      <img src="./images/logo-bookmark.svg" alt="" />
      {/* For Large Screens */}
      <div className="hidden lg:flex ">
        {navItems.map((item, index) => {
          return (
            <button
              key={item}
              className={`uppercase pt-[0.6rem] pb-[0.6rem] rounded-md w-7 text-VeryDarkBlue font-normal hover:text-SoftRed ${
                active === index
                  ? "bg-SoftRed shadow-md text-white hover:bg-white border-2 border-SoftRed"
                  : ""
              }`}
              onClick={() => handleActive(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setShowNavBar(true)}>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Header;
