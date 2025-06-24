import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from '../components/contactform'
import '../aboutpg.css';
import '../style.css';
import Video from '../components/video'
const About = () => {
    
     useEffect(() => {
      
    
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
      heroImage="/images/final/2148814172.png"
      heroText="About Us"
      showButton={false}
    />
    <div className="container-fluid my-9">
   <Layout2
     imageSrc="/images/final/female-mechanic-holding-spare-pa.png"
     imageAlt="Fighter plane"
     heading="About Fem Composites"
     description="Fem Composites, a leader in advanced composite solutions, is a dynamic manufacturer dedicated to delivering high-quality prepregs, adhesives, and ancillary composite products with a strong focus on customer service and innovative design. p>  Our industry-leading agility and flexibility set us apart, enabling us to collaborate closely with clients worldwide in aerospace, military, automotive, industrial, sports, and medical sectors to develop cutting-edge, next-generation solutions. "
    
     buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"/>

</div>

<section className="py-5 bg-light text-center">
      <h2 className="fw-bold mb-4" style={{color:'black'}}>Key Differentiators</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled text-start">
              <li className="mb-2">
                <span className=" fw-bold">●</span> Extensive product qualifications
              </li>
              <li className="mb-2">
                <span className=" fw-bold">●</span> Focused on technical and operational responsiveness
              </li>
              <li className="mb-2">
                <span className=" fw-bold">●</span> Deep relationships and proven track record of performance
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled text-start">
              <li className="mb-2">
                <span className=" fw-bold">●</span> Proprietary formulations & materials manufacturing processes
              </li>
              <li className="mb-2">
                <span className=" fw-bold">●</span> Engineering & product development know-how
              </li>
              <li className="mb-2">
                <span className=" fw-bold">●</span> Leverage agile frameworks to provide a robust synopsis
              </li>
            </ul>
          </div>
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
                  src="/images/final/1742808042559.png"
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
                  src="/images/final/1742807677508.png"
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
                  src="/images/final/1742812793685.png"
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
<section className="brands-section">
  <div className="container-fluid p-0">
    <img
      src="/images/brands.png"
      alt="Brands"
      className="img-fluid w-100"
    />
  </div>
</section>

    <Video/>
    <SectorSection
        heading="Fem Composites Philosophy"
        description="
At Fem Composites, we prioritize exceptional customer care, serving both new and long-standing partners. Many of our clients are industry leaders relying on our materials for safety-critical applications, reinforcing our commitment to quality.

We are also dedicated to our stakeholders, communities, and the environment. With a transparent and ethical approach, we uphold compliance with industry standards and sustainability initiatives, including our recent Carbon Neutrality Certification, contributing to a more sustainable future."
        
        imageSrc="/images/final/742756886753.png"
        imageAlt="Fighter Jet"
        buttonText="CONTACT US"
      />
    <Footer/>
    </>
  );
};

export default About;
