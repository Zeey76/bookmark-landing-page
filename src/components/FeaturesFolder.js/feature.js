
export default function Feature ({title, tab, content}) {
    return(
        <div className="gap-5 flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:max-w-[22rem] ">
            <img src={`./images/illustration-features-tab-${tab}.svg`} />
          </div>
          <div className="flex gap-1 flex-col max-w-[22rem] mt-[-2rem]">
            <h1 className="text-2xl text-center lg:text-left">
              {title}
            </h1>
            <p className="text-GrayishBlue text-center lg:text-left text-[1rem]">
              {content}
            </p>
            <div className="flex gap-1.5 justify-center lg:justify-start">
              <button className="bg-SoftBlue w-10 pt-0.5 pb-0.5 text-white rounded-sm">
                More Info
              </button>
            </div>
          </div>
        </div>
    )
}