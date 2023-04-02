import Header from "@/components/header";
import Nav from "@/components/header/nav";
import NavItem from "@/components/header/navitem";
import UserProfile from "@/components/profile";
import Projects from "@/components/projects/Projects";
import ProjectCards from "@/components/projects/ProjectsCard";
import { useState } from "react";
import { responseApi } from "./api/profile";
export default function ProjectsPage(params) {
    const [isShowing,setIsShowing] = useState(false);
  return (
    <div className="bg-slate-800">
      <h1 className="text-green-500 text-center font-bold text-5xl pt-20 pb-20 font-mono">
      Undertakings
      </h1>
      <div className="flex felx-row justify-evenly absolute w-full top-36">
      
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>

        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
      <div className="">
   {/* header */}

   <div className="flex flex-col h-16 p-2 w-full divide-slate-50 shadow-md">
        <div className="flex flex-row justify-between text-white">
          <Nav>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/blogs">Blogs</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/linktree">Linktree</NavItem>
          </Nav>

          <div>API</div>
          <div>
            <img
              className={`userIcon rounded-2xl align-middle`}
              onClick={() => setIsShowing(!isShowing)}
              src="assets/icon/user.svg"
              alt="sd"
            />
          </div>
          <div className="absolute right-0 top-16  bg-slate-300">
            {isShowing && <UserProfile state={setIsShowing} />}
          </div>
        </div>
      </div>

      </div>
      <div className=" p-9">
        <ProjectCards projectslist={responseApi.user[0].profile.projectlist} />
      </div>
    </div>
  );
}
