import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";


const Career = () => {
 
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
      heroImage="/images/final/47061.jpg"
      heroText="Careers"
      showButton={false}
    />
 <section className="py-5 " >
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6 text-center">
           
           <img
             src="/images/final/2148514872.jpg"
             alt="Team discussing work in a lab"
             className="img-fluid "
           />
         </div>
         <div className="col-md-6 mb-4 mb-md-0">
  <h1>Build Your Career at Fem Composites!</h1>
  <p>Grow with Fem Composites and shape the future of advanced materials!</p>
  <p>
    We are an innovative composite materials company dedicated to providing cutting-edge solutions.
    As we expand, we seek talented professionals to join our dynamic team.
  </p>
  <p>
    Enjoy competitive pay, comprehensive benefits, and exciting career growth opportunities.
  </p>
  <p>Explore the table below for current job openings and descriptions.</p>
</div>

          
          {/* Image Column */}
          
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Career;
