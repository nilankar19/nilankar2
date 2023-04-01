
import { useState } from "react";
import Image from "next/image";
import  {userProfile} from "../pages/api/profileApi";
import s from '../public/assets/img/nilankar.jpg'





export default function UserProfile(props) {
  let userIcon = userProfile[0];

    const [state,setState] = useState(true);
    return (
      <>
        <div id="profileDashboard" className={`p_Div border w-3/12`}>
          <div className={`userSection`}>
            <div className={`section_1`}>
              <div className={`p_Div_userIcon`}>
                <Image
                  className={``}
                  src={s}
                  id="Avatar"
                  width={32}
                  height={32}
                  alt="sd"
                />
              </div>
              <div className={`p_Div_userEmail`}>
                <div>{userProfile[0].displayName}</div>
                <div>{userProfile[0].email}</div>
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