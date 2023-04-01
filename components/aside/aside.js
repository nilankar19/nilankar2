import ImageVideo from "../imagevideo"
import Slider from "../other/slider"

export default function AsideNav(){

    return (
        <div className="aside flex-col p-2 w-60 h-full fixed ">

            <div className="flex flex-col justify-start border bg-white">
                <div className="bg-black">
                <ImageVideo imgSrc='assets/img/nilankar.jpg' />
                <Slider />
                </div>
            <ul className="flex flex-col h-60 mt-5 mb-40 p-2 text-start justify-around bg-slate-300 font-light">
                <li className="flex flex-row">projects</li>
                <li className="flex flex-row">projects</li>
                <li className="flex flex-row">projects</li>
                <li className="flex flex-row">projects</li>
            </ul>


            </div>
        </div>
    )
}