import Image from "next/image"

export default function Main({children}){

    return (

      <div className="main flex flex-col p-2 h-full w-full border overflow-hidden relative">
        {children}
      </div>
    );
}