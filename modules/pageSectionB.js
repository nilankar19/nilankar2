import Link from "../lib1/link";
// import { projectlist } from "../pages/api/profileApi";
import { getImageUrl } from "../lib1/getimageurl";
import Image from "next/image";

import { v4 as uuidV4 } from "uuid";
import { Fragment, useEffect, useState } from "react";
import ProjectsCards from "@/lib1/pagebprojects";
import Welcome from "@/component/welcome";





// function Projectlist() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // fetch data
//     fetch('/api/profile')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   if (data === null) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.description}</p>
//     </div>
//   );
// }

export function PageSectionB() {
  const [projectlist,setProjectlist] = useState([])
  useEffect (()=>{
   const data = async () =>{
    console.log("useeffect");
    await fetch("/api/profile")
     .then((response) => {
       return response.json();
     })
     .then((s) => {
       let res = JSON.parse(s);
       setProjectlist(res.responseApi.user[0].profile);
       console.log("this test",JSON.stringify(res));
     });
    }
    data()
  },[])
  return (
    <>
      <div className={'main2'}>

        <div className="main2-section">
        <ProjectsCards info={projectlist}/>
        </div>



      </div>
    </>
  );
}
