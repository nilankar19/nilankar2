import Image from "next/image"
export default function Main({data}){



    return (
      <div className="flex flex-col p-2 h-full w-full border relative">
        <div className="flex flex-col ml-60   border">
          <div>
            {/* <Image src="/assets/img/.jpg" alt="banner" width={400} height={40} /> */}
            <div className="banner flex flex-col  justify-center text-center   rounded-lg   text-white">
              <div className="flex flex-row justify-center border w-full pt-8 relative">
                <h1 className="relative text-4xl">Hi there,Im fullStack developer </h1>

              </div>
              <div className="border w-32  relative">
                <h1 className="relative">Hi there </h1>
                <h1 className="relative">Hi there </h1>
                <h1 className="relative">Hi there </h1>
                <h1 className="relative">Hi there </h1>
                <h1 className="relative">Hi there </h1>
                <h1 className="relative">Hi there </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}