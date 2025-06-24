import React from "react";
import { useNavigate } from "react-router-dom";
import "../markets.css"; // optional external CSS file

const MarketSection = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  markets,
  buttonText,
  link,  // Add link prop here
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <section className="composite-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Column: Text, List, Button */}
          <div className="col-md-7">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-description">{description}</p>
            <ul className="markets-list">
              {markets.map((market, index) => (
                <b key={index}><li>{market}</li></b>
              ))}
            </ul>
            <button className="action-button" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
