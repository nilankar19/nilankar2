import { useState } from "react";
import Nav from "./header/nav"
import NavItem from "./header/navitem"
import UserProfile from "./profile";

export default function Header(){
    const [isShowing,setIsShowing] = useState(false);
    const [isUserSigned,setUserSigned] = useState(false) //from connectAuth

    return (
      <div className="flex flex-col h-16 p-2 w-full divide-slate-50 shadow-md">
        <div className="flex flex-row justify-between">
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
    );
}