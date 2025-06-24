import React from "react";
import "../automotive.css";
import { useNavigate } from "react-router-dom";

const AutomotiveSection = ({
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
    <section className="auto-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 left-col">
            <div className="auto">
              <img src={imageSrc} alt={imageAlt} className="img-fluid plane-img" />
            </div>
          </div>

          <div className="col-md-7 right-col">
            <div className="cover">
              <h2 className="auto-heading">{heading}</h2>
              <img src="/images/pattern-2-01.png" alt="" />
            </div><p className="auto-description" dangerouslySetInnerHTML={{ __html: description || "" }}></p>


            {features && features.length > 0 && (
              <ul className="auto-features">
                {features.map((feature, index) => (
                  <b key={index}><li>{feature}</li></b>
                ))}
              </ul>
            )}

            <button className="btn-learn-more" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveSection;
