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
      heroImage="/images/Mask-Group-1.jpg"
      heroText="Cremics"
      showButton={false}
    />
   <AutomotiveSection
     imageSrc="/images/img.jpg"
     imageAlt="Fighter plane"
     heading="Ceramic Matrix Composites"
     description="Axiom Materials is the world’s largest producer of Oxide-Oxide Ceramic Matrix Composite pre-preg materials. Ox-Ox CMCs have significant application momentum as high temperature oxidation-sensitive components, particularly in the aerospace, hypersonics, and energy industries. We are leading the expansion of CMCs into new industrial applications in oil and gas refinery pipes, refractory ovens, and other high temperature products requiring a combination of high strength and longer lifecycles."
     markets={marketsData}
     buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"/>
     <SectorSection 
     heading="Automotive"
       description="Axiom produces an extensive range of composite prepregs, adhesives, and surface films that provide automobiles and motorcycles with lightweight"
       features={marketsData}
       imageSrc="/images/img2.jpg"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />


<AutomotiveSection 
     heading="Automotive"
       description="Axiom produces an extensive range of composite prepregs, adhesives, and surface films that provide automobiles and motorcycles with lightweight"
     imageSrc="/images/t20_BmWdBY.jpg"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />
<SectorSection
        heading="Aerospace"
        description="Aviation and spaceflight push the boundaries on strength-to-weight ratios, performance in both high temperatures and harsh environments, precision, and guaranteed service life."
        
        imageSrc="/images/spors-and-rec-composite-materials.jpg"
        imageAlt="Fighter Jet"
        buttonText="LEARN MORE"
      />
      <div className="mt-9" style={{background:'#e1e2e4'}}>
<Video/>
      <ContactFormBootstrap/>
      <TestimonialSection/>
      <AboutSection/>
      </div>
    <Footer/>
    </>
  );
};

export default Products;
