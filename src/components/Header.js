function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src="./images/logo-bookmark.svg" />
      {/* For Large Screens */}
      <div className="hidden lg:flex gap-2.5">
        <button className="uppercase text-VeryDarkBlue">Features</button>
        <button className="uppercase text-VeryDarkBlue">Pricing</button>
        <button className="uppercase text-VeryDarkBlue">Contact</button>
        <button className="uppercase text-VeryDarkBlue">Login</button>
      </div>
      <div className="block lg:hidden">
      <img src="./images/icon-hamburger.svg"/>
      </div>
    </div>
  );
}
export default Header;
