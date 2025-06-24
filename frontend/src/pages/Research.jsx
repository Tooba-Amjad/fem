import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from '../components/contactform'

const Research = () => {
   
        const leftColumn = [
         "AX-7800: Water-based CMC prepreg for high-temp applications (up to 1800°F).",  
"AX-2116: 350°F curing film adhesive for high peel strength, ideal for metal/composite bonding."  ,
"AX-3170: Cyanate ester fiberglass prepreg for structural parts (up to 700°F)." , 
"AX-5201XL: Epoxy carbon prepreg for vacuum bag processing, ensuring excellent surface quality.",  
"AX-7810UD & AX-7900UD: Solvent-based CMC unidirectional prepreg & AFP tape for automated high-temp processing." , 
"CerFace™ AX-8810: Oxide ceramic surfacing film with alumina paper reinforcement."  ,
"AX-8900BMC-CM: Oxide ceramic bulk molding compound with 3M™ Nextel™ chopped fibers.",  
"AX-2135: 350°F curing modified epoxy film adhesive for composite bonding." ,

        ];
      
        const rightColumn = [
        "AX-5280 & AX-6280: Toughened BMI carbon prepreg for high-temp laminating & bonding (up to 450°F/232°C)", "AX-3281 & AS-5281: High-performance BMI matrix carbon prepreg for tooling (up to 400°F/205°C)", "AX-2190M/FR: 250°F (121°C) curing foaming epoxy film adhesive for splicing & edge bonding of honeycomb cores", "AX-7810: Solvent-based CMC prepreg for high-temp applications (up to 1800°F)", "AX-2116: 250°F or 350°F curing film adhesive for high peel strength metal/composite bonding", "AX-3170 & AX-5170: Cyanate ester prepreg for structural parts requiring up to 700°F continuous service", "AX-5201XL: Epoxy carbon prepreg for vacuum bag processing with a flexible cure cycle & excellent surface quality"
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
      heroImage="/images/final/1742812834890.png"
      heroText="Research Development"
      showButton={false}
    />
   <Layout2
     imageSrc="/images/final/1742807649846.png"
     imageAlt="Fighter plane"
     heading="Research Development"
     description="Our R&D leads in advanced composite technologies, with cutting-edge facilities in Henderson, Nevada, and Istanbul, Turkey. We unite experts across research and production, from design to mass production. Beyond conventional resins, we offer custom formulations tailored to your needs."
    
     buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"/>
    
      <section className="container my-5">
      <h2 className="text-center fw-bold">Noteworthy Developments</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <ul className="list-unstyled">
            {leftColumn.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-danger fs-5 me-2">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">
            {rightColumn.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-danger fs-5 me-2">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <section className="why-fem-composities">
  <h2 style={{textAlign:'center'}}>Why Fem Composities</h2>
<div className="container-fluid">
        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className="icon">
                <img src="/images/hp-products-ico.png" alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/1742753823451.png"
                  alt="Product"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>Cutting Edge Manufacturing</h1>
                <p>
                Our state-of-the-art facilities produce advanced composite materials trusted by leaders in aerospace, hypersonics, electric vehicles, air mobility, and green energy.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className="icon">
                <img src="/images/hp-research-ico.png" alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/female-mechanic-holding-spare-pa.png"
                  alt="Quality"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>
                Innovation Through Skill & Knowledge
                </h1>
                <p>
                Fem Composites' experts in chemistry, material science, and engineering drive innovation, staying ahead with ongoing training and the latest techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className="icon">
                <img src="/images/hp-quality-ico.png " alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/1742807666158.png"
                  alt="Research & Development"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>
                QUALITY Control
                </h1>
                <p>
                ISO 9001:2015 and AS9100D certified, Fem Composites ensures top-tier quality, giving customers confidence in our materials for critical applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
</section>
    <Footer/>
    </>
  );
};

export default Research;
