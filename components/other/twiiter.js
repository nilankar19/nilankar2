import Script from "next/script";
import { useState,useEffect } from "react";

 export default function Twitter(params) {





  const [libExist, setlibExist] = useState(false);



         //first update line 149 as your requirenment
        //pros:- this /learn page render fast
       //cons:- after loading script ,it renders whole twitter data at once so we have to wait minimum 2s
      //future implementation ?? instead of waiting to render twitter data we can show loding gif


      useEffect(()=>{
        const script = document.createElement('script');
        script.src="https://platform.twitter.com/widgets.js"
        script.async = true
        script.onload = () =>{
          setlibExist(true)
        }
        document.body.appendChild(script)
      },[])



  return (
    <div className="z-50">
      <div
        className="loading-icon"
        id="loadingIcon"
        style={{ display: libExist ? "none" : "block" }}
      >

      </div>

      <div className="near-item-header ">
        <div className="tile">
          <a
            className="twitter-timeline"
            data-width="420"
            data-height="720"
            data-theme="light"
            href={
              libExist
                ? "https://twitter.com/Nilankar_?ref_src=twsrc%5Etfw"
                : ""
            }
          ></a>
        </div>
      </div>
    </div>
  );
}