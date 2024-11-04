import Link from 'next/link';
 import { useState } from "react";

import React from 'react';

export default function DownloadSection({ children }) {



      const [isDownloading, setIsDownloading] = useState(false);

      const handleDownload = () => {
        setIsDownloading(true);
        fetch("https://nilankar.vercel.app/#")
          .then((response) => response.blob())
          .then((blob) => {
            const now = Date.now();
            const dateString = new Date(now).toLocaleDateString();

            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Nilankar_${dateString}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            setIsDownloading(false);
          });
      };









  return (
    <div className="download flex flex-col ml-60 mt-5">
      <div className="download-btn-sec flex flex-row justify-between p-1 pl-8 pr-8 bg-gray-100 rounded-lg">
        <div className="downlad-btn-p flex flex-row w-2/3 p-2">
          <button
            className="glow-on-hover flex justify-center  mr-3   items-center"
            onClick={handleDownload}
          >
            <span className="mr-2 ml-2">
              {isDownloading ? "Downloading..." : "Download resume"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 10l7 7 7-7" />
            </svg>
          </button>

          <button
            className=" glow-on-hover"
            onClick={() =>
              window.location.assign("https://www.github.com/nilankar19")
            }
          >
            {isDownloading ? "Nav/gihub..." : "github"}
          </button>
        </div>

        <div className="flex flex-row justify-evenly ">
          <button className="btn-download-sec  bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            _
          </button>
          <button className="btn-download-sec bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            ^
          </button>
          <button className="btn-download-sec bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            _
          </button>
        </div>
      </div>
    </div>
  );
}
