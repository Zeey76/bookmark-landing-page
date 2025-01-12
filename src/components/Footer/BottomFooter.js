export default function BottomFooter() {
  return (
    <div className="bg-VeryDarkBlue p-2">
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-center w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <img src="./images/logo-bookmark.svg" />

          <button className="uppercase text-white">Features</button>
          <button className="uppercase text-white">Pricing</button>
          <button className="uppercase text-white">Contact</button>
        </div>

        <div className="flex gap-2">
          <img src="./images/icon-facebook.svg" />
          <img src="./images/icon-twitter.svg" />
        </div>
      </div>
    </div>
  );
}
