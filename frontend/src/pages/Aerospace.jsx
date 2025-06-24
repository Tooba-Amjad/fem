import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from '../components/contactform'
const Aerospace = () => {
    const marketsData = [
        "Aerospace",
        "Automotive",
        "Military",
        "Sports & Recreation",
        "Industrial",
        "Medical",
        "Infrastructure / Construction",
        "Energy",
        "Marine"
      ];
     useEffect(() => {
        // Cookie consent script
      
    
        // Trapezoid adjustment script
        document.addEventListener("DOMContentLoaded", function () {
          const cardColumn = document.querySelector(".card-column");
          const trapezoid = document.querySelector(".trapezoid");
    
          if (cardColumn && trapezoid) {
            const cardColumnHeight = cardColumn.offsetHeight;
            trapezoid.style.borderBottomWidth = cardColumnHeight + "px";
          }
        });
      }, []);


  return (
    <>
    <Header
      heroImage="/images/final/aerospace.png"
      heroText="Aerospace"
      showButton={false}
    />
   <Layout2
     imageSrc="/images/final/1742756914226.png"
     imageAlt="Fighter plane"
     heading="Composite Materials for Every Market"
     description="Fem Composites Materials provides advanced composites materials for a wide range of markets and applications. Whether you're looking for high temperature prepregs for industrial use or lightweight ceramic matrix composites "
     markets={marketsData}
     buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"/>
     <AutomotiveSection 
     heading="Automotive"
       description="Fem Composites produces an extensive range of composite prepregs, adhesives, and surface films that provide automobiles and motorcycles with lightweight"
     imageSrc="/images/final/1742756275521.png"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />

<SectorSection
        heading="Aerospace"
        description="Aviation and spaceflight push the boundaries on strength-to-weight ratios, performance in both high temperatures and harsh environments, precision, and guaranteed service life."
        
        imageSrc="/images/final/1742756665370.png"
        imageAlt="Fighter Jet"
        buttonText="LEARN MORE"
      />

<AutomotiveSection 
     heading="Automotive"
       description="Fem Composites produces an extensive range of composite prepregs, adhesives, and surface films that provide automobiles and motorcycles with lightweight"
     imageSrc="/images/aero (3).jpg"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />
<SectorSection
        heading="Aerospace"
        description="Aviation and spaceflight push the boundaries on strength-to-weight ratios, performance in both high temperatures and harsh environments, precision, and guaranteed service life."
        
        imageSrc="/images/background2.jpg"
        imageAlt="Fighter Jet"
        buttonText="LEARN MORE"
      />
      <div className="mt-9" style={{background:'#e1e2e4'}}>
      <ContactFormBootstrap/>
      </div>
    <Footer/>
    </>
  );
};

export default Aerospace;
