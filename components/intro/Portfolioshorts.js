import Image from 'next/image'
import React from 'react'

import p from "../../public/assets/img/nilankar_latest.png"
const PortfolioShorts = ({ info, image }) => {
  return (
    <div className="mportfolio-shorts flex items-center justify-center ml-60 py-8 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image src={p} alt="Profile" className=" rounded-lg shadow-lg mb-8 md:mb-0" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">{""}</h2>
            <p className="text-gray-600 mb-4">{info}</p>
            <div class="p-4">
              <p class="mb-4"><span class="font-semibold">Google Cloud Platform (GCP) Expertise:</span> Proficient in designing and implementing scalable solutions on GCP to meet diverse business needs.</p>
              <p class="mb-4"><span class="font-semibold">VPS Configuration:</span> Skilled in setting up and configuring Virtual Private Servers (VPS) for optimal performance and security.</p>
              <p class="mb-4"><span class="font-semibold">eCommerce Platform Optimization:</span> Experienced in optimizing eCommerce platforms like Shopify and Wix to enhance user experience and drive sales.</p>
              <p class="mb-4"><span class="font-semibold">DevOps Mastery:</span> Proven track record in implementing DevOps methodologies to streamline development processes and improve collaboration between teams.</p>
              <p class="mb-4"><span class="font-semibold">Automation with Jenkins:</span> Experienced in setting up Jenkins pipelines for continuous integration and deployment, reducing manual effort and enhancing efficiency.</p>
              <p class="mb-4"><span class="font-semibold">Infrastructure Orchestration with Ansible:</span> Proficient in using Ansible for automating infrastructure provisioning, configuration management, and application deployment.</p>
              <p class="mb-4"><span class="font-semibold">Business Growth and Efficiency:</span> Committed to leveraging cloud technologies to drive business growth, increase operational efficiency, and achieve strategic objectives.</p>
          </div>

            {/* <div className="flex items-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">View Portfolio</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioShorts
