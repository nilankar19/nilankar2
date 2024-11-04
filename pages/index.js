import Head from "next/head";


import { useState, useEffect } from "react";




import Header from "@/components/header";
import AsideNav from "@/components/aside/aside";
import Main from "@/components/main/main";
import PortfolioIntro from "@/components/intro/PortfolioIntro";
import Skill from "@/components/intro/Skill";
import DownloadSection from "@/components/Download";
import Projects from "@/components/projects/Projects";
import ProjectCards from "@/components/projects/ProjectsCard";
import { responseApi } from "./api/profile";
import Welcome from "@/components/other/welcome";
import Slider from "@/components/other/slider";
import Layout from "@/components/Layout";
import Darkmode from "@/components/Darkmode";
import SocialMedia from "@/components/socialmedia";
import PortfolioShorts from "@/components/intro/Portfolioshorts";

let intro_info = "Hi! I'm Nilankar, an Innovative Cloud Solutions Architect ☁️. My passion lies in crafting cutting-edge solutions within cloud environments, specializing in Google Cloud Platform (GCP), VPS setup, and optimizing eCommerce platforms like Shopify and Wix. I thrive on implementing efficient DevOps practices and fine-tuning infrastructure for maximum performance. My dedication? Utilizing cloud technologies to fuel business growth and streamline operations. Let's connect and explore the possibilities together! 🚀"
export default function Home() {
  const [profile, setprofile] = useState(false);
  const profileStatus = async () => {};
  let page_zindex = ['200',"-199","-198"]
  //setTarget elment at higher z-index





  return (
    <>
      <div>
        <Head>
          <title>Nilankar porfolio</title>
          <meta name="description" content="Nilankar portfolio" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.o"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Slider /> */}

        <Header></Header>
        <AsideNav></AsideNav>
        <Main>
          <PortfolioIntro>
            <Skill />
          </PortfolioIntro>
         <PortfolioShorts info={intro_info} />

          // <DownloadSection></DownloadSection>

          <Projects>
           
            <ProjectCards projectslist={responseApi.user[0].profile.projectlist} />
          </Projects>


          <Layout>
           <Welcome />
           <SocialMedia />

          </Layout>


        </Main>

        {/* <PageSectionA />*/}

        {/* <PageSectionB />  */}


        {/* <homesection className={styles.main2}></homesection> */}
      </div>
    </>
  );
}
