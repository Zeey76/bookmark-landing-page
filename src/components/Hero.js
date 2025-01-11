function Hero() {
    return(
        <div className="flex flex-col-reverse justify-center items-center lg:grid md:grid-cols-2 mt-4.5">
            <div className="flex gap-2 flex-col max-w-[28rem] mt-2">
                <h1 className="text-3xl text-center lg:text-left lg:text-[2.7rem]">A Simple Bookmark Manager</h1>
                <p className="text-GrayishBlue text-center lg:text-left text-[1rem]">A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
                <div className="flex gap-1.5 justify-center lg:justify-start">
                    <button className="bg-SoftBlue w-10 pt-0.5 pb-0.5 text-white rounded-sm">Get it on Chrome</button>
                    <button className="bg-GrayishBlue text-VeryDarkBlue  w-10 pt-0.5 pb-0.5 rounded-sm">Get it on Chrome</button>
                </div>
            </div>
            <div className="relative lg:right-[-70px]">
            <img src="./images/illustration-hero.svg"/>
          </div>
            
        </div>
    )
}
export default Hero