import Buttons from "../Button";


export default function PortfolioIntro({ children }) {
  return (
    <div className="m-portfolio-intro flex flex-col ml-60 ">
    <div>
      {/* <Image src="/assets/img/.jpg" alt="banner" width={400} height={40} /> */}
      <div className="  banner flex flex-col  justify-center text-center   rounded-lg pt-14 pb-14  text-white">
        <div className="flex flex-row justify-center  w-full  relative intro-div">
          <h1 className="relative text-4xl ">Hello! 👋 I'm Nilankar, an Innovative Cloud Solutions Architect ☁️ </h1>
          
        </div>
        {children}

        {/* <Buttons label="hello" /> */}
      </div>
    </div>
  </div>
  );
}
