import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from '../components/contactform'
const Quality = () => {
    const marketsData = [
        "Resin content (various methods)",
        "Gel time",
        "Volatile content",
        "Laminate thickness & hardness",
        "Laminate void content",
        "Flow percentage",
        "Weight variation",
        "Expansion ratio"
      ];
      const chemical = [
        "Particle analysis",
        "Humidity conditioning",
        "Viscometry",
        "RDS / Dynamic viscosity",
        "DSC / Calorimetry",
        "FTIR / Chemical analysis",
        "Moisture content",
        "Extraction & filtration",
        "Muffle furnace testing"
      ];
      const composite = [
        "Autoclave curing (up to 400°F & 200 psi)",
        "Vacuum bag curing (6 ovens)",
        "CMC / Sintering (3 furnaces)",
        "Multi-opening platen presses (6 presses, up to 2ft x 2ft)",
        "Laminate & honeycomb sandwich prototype production",
        "Specimen finishing & machining (CNC, water jet, grinders, routers)"
      ];
      const mechanicalTesting = [
        "Tensile, tensile shear, and flatwise tensile strength & modulus",
        "Open hole compression",
        "Flexural & interlaminar shear strength & modulus",
        "Honeycomb sandwich flexural & shear stress (3 or 4-point load)",
        "Climbing drum peel, T-peel, and bell peel tests",
        "High-temp testing (up to 600°F for PMC, 2200°F for CMC)",
        "MTS & United test equipment with environmental systems"
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
      heroImage="/images/final/1742808030836.png"
      heroText="Quality Testing  "
      showButton={false}
    />
   
    
     <AutomotiveSection 
     heading="Physical Testing"
       description="Our advanced testing facilities ensure rigorous evaluation of product characteristics, providing clients with complete confidence in performance. Our capabilities include:"
       features={marketsData}
     imageSrc="/images/final/17670.jpg"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />

<SectorSection
        heading="Chemical Testing"
        description="Ensuring precise chemical composition is crucial for product suitability. Our rigorous testing includes:"
        features={chemical}
        imageSrc="/images/final/2148581901.jpg"
        imageAlt="Fighter Jet"
        buttonText="LEARN MORE"
      />

<AutomotiveSection 
     heading="Composite Curing"
       description="Our curing facilities ensure precise temperature and timing control for optimal composite performance. Key capabilities include:"
       features={composite}
     imageSrc="/images/final/1742741376726.png"
     imageAlt="Car Image"
     buttonText="LEARN MORE"
     />
<SectorSection
        heading="Mechanical Testing"
        description="
Our advanced mechanical testing ensures the reliability and performance of composite materials. Key capabilities include:"
        features={mechanicalTesting}
        imageSrc="/images/final/1742812793685.png"
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

export default Quality;
