import Buttons from "../Button";


export default function PortfolioIntro({ children }) {
  return (
    <div className="m-portfolio-intro flex flex-col ml-60 ">
    <div>
      {/* <Image src="/assets/img/.jpg" alt="banner" width={400} height={40} /> */}
      <div className="  banner flex flex-col  justify-center text-center   rounded-lg   text-white">
        <div className="flex flex-row justify-center border w-full pt-8 relative">
          <h1 className="relative text-4xl ">Hi there,Im fullStack developer </h1>

        </div>
        {children}
        <Buttons label="hello" />
      </div>
    </div>
  </div>
  );
}
