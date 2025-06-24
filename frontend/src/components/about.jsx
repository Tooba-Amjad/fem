import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="container-fluid about-us">
        <h2>About Fem Composites</h2>
        <img src="/images/Pattern_9.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* Card 1 */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            onClick={() => navigate("/products")}
            style={{ cursor: "pointer" }}
          >
            <div className="card">
              <div className="icon">
                <img src="/images/hp-products-ico.png" alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/1742741857950.png"
                  alt="Product"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>PRODUCTS</h1>
                <p>
                  Explore our range of products featuring ceramic matrix composites, composite prepregs, film adhesives, honeycomb cores, and a variety of other advanced composite materials.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            onClick={() => navigate("/company/research")}
            style={{ cursor: "pointer" }}
          >
            <div className="card">
              <div className="icon">
                <img src="/images/hp-research-ico.png" alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/1742812987531.png"
                  alt="Research"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>
                  RESEARCH & DEVELOPMENT
                </h1>
                <p>
                  Explore our technical expertise, innovative R&amp;D initiatives, and the wide range of collaborative opportunities available by partnering with the Fem Composites R&amp;D Team.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            onClick={() => navigate("/company/quality_testing")}
            style={{ cursor: "pointer" }}
          >
            <div className="card">
              <div className="icon">
                <img src="/images/hp-quality-ico.png" alt="Icon Description" />
              </div>
              <div className="image-container">
                <img
                  src="/images/final/1742741320164.png"
                  alt="Quality"
                  className="card-image"
                />
              </div>
              <div className="card-text mt-5">
                <h1 style={{ fontSize: "1.5rem" }}>
                  QUALITY
                </h1>
                <p>
                  Review our quality certifications and discover our curing capabilities along with our extensive suite of testing services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
