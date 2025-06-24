import React from "react";
import { useNavigate } from "react-router-dom";
import "../sectorsection.css";
import "../style.css";

const SectorSection = ({
  heading,
  description,
  features,
  imageSrc,
  imageAlt,
  buttonText,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <section className="sector-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-column order-2 order-md-1">
            <h2 className="sector-heading">{heading}</h2>
           <p className="sector-description" dangerouslySetInnerHTML={{ __html: description || "" }}></p>

            {features && features.length > 0 && (
              <ul className="features-list">
                {features.map((feature, index) => (
                  <b key={index}><li>{feature}</li></b>
                ))}
              </ul>
            )}
            <button className="btn-learn-more" onClick={handleClick}>
              {buttonText}
            </button>
          </div>

          <div className="col-md-5 image-column order-1 order-md-2">
            <div className="bg-container">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="img-fluid plan-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorSection;
