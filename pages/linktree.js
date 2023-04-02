import Header from "@/components/header";
import Link from "next/link";
export default function Linktree() {
  return (
    <div>
         <h1 className="text-green-500 text-center font-bold text-5xl pt-10 pb-20 font-mono">
        LINKS
      </h1>

        <Header />
      <div className="mlinktree-card flex felx-row justify-start">

        <div className="card-linktree card-linktree1  flex flex-col justify-between text-blue-400 m-10 p-10">
           <span className="bg-black rounded-md text-cyan-50  w-fit mb-2 pl-2 pr-2 ">social</span>
          <a   href="https://github.com/nilankar19">
           https://github.com/nilankar19
          </a>

          <a href="https://twitter.com/Nilankar_">
          https://twitter.com/Nilankar_
          </a>

          <a href=" https://www.linkedin.com/in/nilankar-03a574266">
          https://www.linkedin.com/in/nilankar-03a574266
          </a>



        </div>

        <div className=" card-linktree card-linktree2 flex flex-col justify-between text-blue-400 m-10 p-10">
        <span className="bg-black rounded-md text-cyan-50  w-fit mb-2 pl-2 pr-2">projects</span>
          <a href="https://nilankar19.github.io/password_generator-p3/">
            https://nilankar19.github.io/password_generator-p3/
          </a>

          <a href="https://nilankar19.github.io/image_resizer-p2/">
            https://nilankar19.github.io/image_resizer-p2/
          </a>

          <a href="https://blockchain-awesome-dot-p6.vercel.app/">
            https://blockchain-awesome-dot-p6.vercel.app/
          </a>

          <a href="https://authentication-nilankar19.vercel.app/">
          https://authentication-nilankar19.vercel.app/
          </a>
        </div>
        {/* <div className="card-linktree card-linktree3 flex flex-col justify-between text-blue-400 m-10 p-10">
        <span className="bg-black rounded-md text-cyan-50 w-fit mb-2 pl-2 pr-2">Other_Fav</span>
          <a href="https://nilankar19.github.io/password_generator-p3/">
            https://nilankar19.github.io/password_generator-p3/
          </a>

          <a href="https://nilankar19.github.io/image_resizer-p2/">
            https://nilankar19.github.io/image_resizer-p2/
          </a>

          <a href="https://blockchain-awesome-dot-p6.vercel.app/">
            https://blockchain-awesome-dot-p6.vercel.app/
          </a>

          <a href="https://authentication-sepia-sigma.vercel.app/">
            https://authentication-sepia-sigma.vercel.app/
          </a>
        </div> */}
      </div>
    </div>
  );
}
