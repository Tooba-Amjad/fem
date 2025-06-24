import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutSection from "../components/about";

const Homepage = () => {
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
      heroImage="/images/final/4463.jpg"
      heroText="Leader in Advanced {br} Composite Materials"
      showButton={true}
    />

   <AboutSection/>
      {/* What We Do Section */}
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
              <div className="column-img-container">
          <div className="column-img">
            <img src="/images/pattern-2-01.png" id="" alt="" />
          </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="testimonial-content">
                <div className="quote-wrapper">
                  <img
                    src="images/qoute.png"
                    alt="Quote Left"
                    className="quote-left"
                  />
                  <p className="testimonial-text">
                  Fem Composites has been an invaluable resource in providing unique resin solutions for our specialty textile products. Their willingness to collaborate and deliver when time is of the essence is a rarity in today’s composites market. We look forward to continuing this innovation-rooted relationship well into the future.
                  </p>
                  <img
                    src="images/qoute.png"
                    alt="Quote Right"
                    className="quote-right"
                  />
                </div>
                <p className="author">
                  <strong>Luke</strong>
                  <br />
                  Vice President - Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="news-events-section">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4 mx-9">
            <h2 className="text-center">News &amp; Events</h2>
            <button className="explore-button me" style={{ right: "90px" }}>
              VIEW MORE
            </button>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/final/1742756906255.png"
                  className="card-img-top card-image"
                  alt="News Image"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Aerospace Composites for Aircraft Interiors: Primary Considerations
                  </h5>
                  <p className="card-text" style={{ textAlign: "left" }}>
                    Lightweight yet durable composites are the backbone of aircraft interior design. Without access to components...
                  </p>
                  <div className="arrow">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="images/final/1742808036254.png"
                  className="card-img-top card-image"
                  alt="News Image"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    How Composites and Prepregs Figure Into Launch Vehicle Design
                  </h5>
                  <p className="card-text" style={{ textAlign: "left" }}>
                    Getting a space vehicle off the ground is no easy task. And of course, it...
                  </p>
                  <div className="arrow">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/final/1742758079835.png"
                  className="card-img-top card-image"
                  alt="News Image"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Reducing Vibration Fatigue With Advanced Aerospace Composites
                  </h5>
                  <p className="card-text" style={{ textAlign: "left" }}>
                    As one of the largest composite material suppliers in the world, Fem Composites is highly...
                  </p>
                  <div className="arrow">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Homepage;
