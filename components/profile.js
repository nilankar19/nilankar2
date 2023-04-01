
import { useRef, useState,useEffect } from "react";
import Image from "next/image";
import  {responseApi} from "../pages/api/profile";
import s from '../public/assets/img/nilankar.jpg'





export default function UserProfile({state}) {
  

  // const [isOpen, setIsOpen] = useState(state);
  const divRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        state(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);

    return (
      <>

        <div ref={divRef} id="profileDashboard" className={`p_Div border w-3/12`} >
          <div className={`userSection`}>
            <div className={`flex flex-row p-2 text-sm text-center bg-gray-50 rounded-md`}>
              <div className={`p_Div_userIcon ml-5`}>
                <Image
                  className={``}
                  src={s}
                  id="Avatar"
                  width={32}
                  height={32}
                  alt="sd"
                />
              </div>
              <div className={`flex flex-col text-start ml-5`}>
                <div>{responseApi.user[0].profile.displayName}</div>
                <div>{responseApi.user[0].profile.email}</div>
              </div>
            </div>
            <div className={`section_2`}>
              <div>Account Settings</div>
              <div>feedback</div>
              <div>Get help</div>
              <div>privacy policy</div>
              <div>Sign Out</div>
            </div>
          </div>
        </div>
      </>
    );

}