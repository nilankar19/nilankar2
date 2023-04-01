import { createElement, useEffect, useState } from "react";

let images = [
  "https://nilankar19.github.io/imgApi2/img3232/p1.png",
  "https://nilankar19.github.io/imgApi2/img3232/p6.png",
  "https://nilankar19.github.io/imgApi2/img3232/p4.png",
];

function imageElm({ urls }) {
  // console.log("Urls imageelem", urls);

  let zindex = ["-100", "-150", "-200","-250"];
  const slideClass = ["slide1","slide2","slide3"];
  // let slideimgid = ["imgId0","imgId1","imgId2"];
  let slideimgid = [];
  urls.map((url, index) => {
    let slideimgidtext = "imgId" + index;
    slideimgid.push(slideimgidtext);
    const newImg = document.createElement("img");
    newImg.className = "slide" + " " + slideClass[index];
    newImg.id = slideimgidtext;
    newImg.src = url;
    newImg.style.display = "block";
    newImg.style.transition = "2s";
    // newImg.style.zIndex = zindex[index];
    newImg.alt = "slide" + index;
    // newImg.style.position="fixed"
    newImg.style.animation = "2s "

    // Get the existing img element and its parent container

    const imageContainer = document.querySelector("#slide-container");

    // Append the new img element after the existing one
    imageContainer.appendChild(newImg);

    let setintervalCount = 0;
    let w = 0;
    let t = 0;
    let state = 2;
    let currentIndex = 0;

setInterval(() => {
  let ws = w.toString();
  let cl = slideimgid[currentIndex];
  let i = document.getElementById(cl);
  i.style.width = ws + "%";

  currentIndex++;
  if (currentIndex >= slideimgid.length) {
    currentIndex = 0;
    slideimgid.map((id,index)=>{
      document.getElementById(id).style.width="100%";
    });
  }
}, 4000);

  });

}

const workerfnc_Slider = (data, callback) => {
  const worker = new Worker("/worker.js", { type: "module" });

  worker.onmessage = (event) => {
    const result = event.data;

    callback(result);
  };

  worker.postMessage({ images });

  return () => worker.terminate();
};

export default function Slider(props) {
  const [initial_Img, set_Initial_Img] = useState(null);

  useEffect(() => {
    workerfnc_Slider({ images }, (result) => {
      set_Initial_Img(true);

      if (Object.keys(result)[0] == "images") {
        // console.log("workerfnc_Slider", result);
        imageElm({ urls: result.images });
      }
    });
  }, []);

  return (
    <>
    <div className="slider  bg-black overflow-hidden  ">
      <div className=" bg-black  ">
      <div id="slide-container" className="bg-black flex flex-row overflow-hidden justify-start  ">
        {/* <img
          src=""
          alt=""
          className="bg-img"
          id="bg-img1"
          style={{ display: "block" }}
        /> */}
      </div>
      </div>
      </div>
    </>
  );
}
