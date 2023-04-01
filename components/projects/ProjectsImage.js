import Image from "next/image";

export default function ProjectsInfo({image,alt}){
    return(
        <Image src={image} alt={alt?alt:"img"} className="w-32  bg-slate-400" />
    )
}