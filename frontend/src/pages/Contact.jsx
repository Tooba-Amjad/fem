import React , {useEffect} from 'react';
import '../Contactpg.css';
import Header from '../components/header';
import ContactFormBootstrap from '../components/contactform';
import Footer from '../components/footer';
const Contact = () => {
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
    heroImage="/images/final/2148814172.png"
    heroText="Contact"
    showButton={false}
  />
    <section className="contact-section-us">
      <div className="contact-content-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our products, services or need answers
          regarding a specific application, please contact us. You may also reach
          out to us with any questions on existing orders or for technical support
          from our engineers. We are always available to answer your questions and
          help ensure the success of any project that uses our materials and
          products.
        </p>
        <a
          href="/path-to-your-product-guide.pdf"
          className="product-guide-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Our Product Guide
        </a>
      </div>

      <div className="contact-map-container">
        {/* Example embedded Google Map. Replace with your own map embed link */}
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.4203692107254!2d-117.88730558522537!3d33.74132758069498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7aaec700001%3A0xf42c5bd3a0f2b75c!2sSanta%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1614689392549!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
        <div className="contact-info-us">
          <h6>Fem Composites, Inc.</h6>
          <p>Raboisen 38
          20095 Hamburg</p>
          <p>
            <strong>Phone:</strong> +49 40 334 609 780<br/>
            
          </p>
        </div>
      </div>
    </section>
    <div className="mt-9" style={{background:'#e1e2e4'}}>

    <ContactFormBootstrap/>
    </div>
    <section className="what-we-do">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-column">
             
              
              <div className="text-content">
          <div className="han">
                <h2 className="mb-4">What We Do</h2>
                <img src="/images/pattern-07.png" alt="" />
                </div>
                <p> Fem Composites, Inc. is a premier producer of advanced composite materials, specializing in ceramic matrix composites (CMCs), prepregs, honeycomb core, film adhesives, and other related composite products. Our aim is to provide superior quality materials backed by exceptional customer service and innovative design. </p> <p> We take pride in our agility and versatility, partnering closely with clients around the globe in aerospace, military, automotive, industrial, sports, and medical sectors to create cutting-edge, next-generation solutions. </p> <p> Fem Composites, Inc. is proudly AS9100D and ISO 9001:2015 certified, underscoring our commitment to the highest standards, while continuously expanding our capabilities and global reach. </p>
                <button className="explore-button">MORE ABOUT US</button>
              </div>
            </div>
            <div className="col-md-6 card-column">
              {/* <div className="trapezoid"></div> */}
              <div className="card1 mb-4" style={{ marginTop: "30px" }}>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="images/final/1742741522308.png"
                      className="card-img"
                      alt="Composite Prepregs"
                      style={{ height: "200px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">COMPOSITE PREPREGS</h5>
                      <p className="card-text">
                        Matrix coated composites that service advanced material applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="images/final/1742757281215.png"
                      className="card-img"
                      alt="Adhesives &amp; Formulations"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ textAlign: "center" }}
                      >
                        ADHESIVES &amp; FORMULATIONS
                      </h5>
                      <p className="card-text">
                        Specialty bonding solutions and an innovative approach to meeting customer needs through creative chemistry.
                      </p>
                    </div>
                  </div>
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

export default Contact;
