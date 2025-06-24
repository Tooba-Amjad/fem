import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from '../components/contactform'
import TestimonialSection from '../components/client_feedback'
import AboutSection from "../components/about";
import Video from "../components/video";
const Products = () => {
    const marketsData = [
 "Fracture Toughness",
"Lightweight",
"Extreme Temperature",
"Corrosion Resistant"
      ];
     useEffect(() => {
        // Cookie consent script
        window.onload = function () {
          document.querySelector(".cookie-consent").style.display = "block";
        };
        const buttons = document.querySelectorAll(".cookie-consent button");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            document.querySelector(".cookie-consent").style.display = "none";
          });
        });
    
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
      heroImage="/images/final/1742741522308.png"
      heroText="Products"
      showButton={false}
    />
   <AutomotiveSection
     
     imageSrc="/images/final/1742740853062.png"
     imageAlt="Fighter plane"
     heading="Ceramic Matrix Composites"
     description="Fem Composites is the world’s leading producer of Oxide-Oxide Ceramic Matrix Composite (Ox-Ox CMC) pre-preg materials. Ox-Ox CMCs are gaining significant traction for high-temperature, oxidation-sensitive components, especially in aerospace, hypersonics, and energy sectors. We are at the forefront of expanding CMC applications into new industries, including oil and gas refinery pipes, refractory ovens, and other high-temperature products requiring exceptional strength and extended lifecycles."
     markets={marketsData}
     buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"/>
     <SectorSection 
     heading="Composite Prepregs"
       description="Axiom produces an extensive range of composite prepregs, adhesives, and surface films that provide automobiles and motorcycles with lightweight"
       features={marketsData}
       imageSrc="/images/final/2150913791.jpg"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />


<AutomotiveSection 
     heading="Film Adhesives"
       description="Metal and composite bonding adhesives, surfacing and lightning strike films, and other bonding solutions."
        imageSrc="/images/final/1742757279155.png"
     imageAlt="Car Image"

     buttonText="LEARN MORE"
     />
       <Video/>
<SectorSection
        heading="Honeycomb Core"
        description=" Fem Composities manufactures Aerospace and Commercial Grade Nomex® Honeycomb to suit most aerospace and commercial applications."
        
        imageSrc="/images/final/1742740619567.png"
        imageAlt="Fighter Jet"
        buttonText="LEARN MORE"
      />
    
      <div className="mt-9" style={{background:'#e1e2e4'}}>

      <ContactFormBootstrap/>
      <TestimonialSection/>
      <AboutSection/>
      </div>
    <Footer/>
    </>
  );
};

export default Products;
