import { responseApi } from "@/pages/api/profile";
import { v4 as uuidV4 } from "uuid";
import React, { useState } from "react";

let activeId = [];
let cardId = [];
// const columnVisiblity = (id) => {
//   activeId.push(id);
//   activeId.forEach((elem) => {
//     document.getElementById(elem).style.display = "none";
//     // let pid = document.querySelector(`[data-pid="${elem}"]`);
//     // pid.style.display = "none";
//     // console.log(pid.style.display)
//   });
//   let elem = document.getElementById(id);
//   elem.style.display = "block";
// //   let pid = document.querySelector(`[data-pid="${id}"]`);
// //   pid.style.display = "block";
// };
export function Card({plist}) {
  // const handleClick = (event) => {
  //   let target = event.target;
  //   while (target.tagName !== "LI") {
  //     target = target.parentNode;
  //   }
  //   console.log(target);
  //   const id = target.getAttribute('data-id');
  //   columnVisiblity(id)

  //   console.log(`UUID value: ${id}`,id);
  // }
  // const handleClick = (event) => {
  //   let target = event.target;
  //   while (target.tagName !== "LI") {
  //     target = target.parentNode;
  //   }
  //   console.log(target);
  //   const id = target.getAttribute("data-id");
  //   columnVisiblity(id);

  //   // get the data-pid of the corresponding CardDetails component
  // };
  // console.log(plist);
  let cardList = plist.map((card) => {
    let uuId = uuidV4();
    let cardLink = card.url

    cardId.push(uuId);
    return (
      <li
        key={uuId}
        className={"mproject-list flex flex-col border mr-4 cursor-pointer rounded-md"}
        onClick={(e) => window.location.assign(cardLink)}
      >
        <div className="flex p-li  flex-col border rounded-md bg-blue-300 w-60">
          <div className="rounded-md">
            {card.imageId ? <img src={card.imageId} className="rounded-md" alt="userIcon" /> : null}
          </div>
          <div className="accordionColumn text-left font-mono pl-2 pt-3">
            <h2>{card.projectName}</h2>

            {/* <div id={uuId} className="flex  flex-col blo bg-slate-400">
              Additional content here
            </div> */}
          </div>
        </div>
      </li>
    );
  });

  return <ul className={"projectli flex flex-row justify-between pb-8  overflow-x-scroll"}>{cardList}</ul>;
}


export default function ProjectCards({ projectslist }) {
    let list = projectslist;
    // console.log(list);
  return (
    <div className="mt-12">
      <div className="bg-slate-800 p-2">
       <span className="welcome-sub ml-4 text-start " >PROJECTs</span>

      <Card plist={list}/>
      </div>
    </div>
  );
}
