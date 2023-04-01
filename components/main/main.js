import Image from "next/image"

export default function Main({children}){

    return (

      <div className="flex flex-col p-2 h-full w-full border overflow-hidden relative">
        {children}
      </div>
    );
}