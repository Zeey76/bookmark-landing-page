function Header() {
  return (
    <div className="flex justify-between items-center w-[80%] mx-auto">
      <img src="./images/logo-bookmark.svg" alt="" />
      {/* For Large Screens */}
      <div className="hidden lg:flex gap-2.5">
        <button className="uppercase text-VeryDarkBlue">Features</button>
        <button className="uppercase text-VeryDarkBlue">Pricing</button>
        <button className="uppercase text-VeryDarkBlue">Contact</button>
        <button className="uppercase text-VeryDarkBlue">Login</button>
      </div>
      <div className="block lg:hidden">
        <img src="./images/icon-hamburger.svg" alt="" />
      </div>
    </div>
  );
}
export default Header;
