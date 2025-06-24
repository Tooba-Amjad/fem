import React from "react";
import "../markets.css"; // optional external CSS file

const Layout2 = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  markets,
  buttonText,
}) => {
  return (
    <section className="composite-section">
      <div className="container">
        <div className="row align-items-center">
       
          <div className="col-md-7">
            <h2 className="section-heading">{heading}</h2>
          <p 
      className="section-description" 
      dangerouslySetInnerHTML={{ __html: description || "" }} 
    ></p>
            {markets && markets.length > 0 && (
            <ul className="markets-list">
           
              {markets.map((market, index) => (
              <b> <li key={index}>{market}</li></b> 
              ))}
           
            </ul>
          )}
            <button className="action-button">{buttonText}</button>
          </div>
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Layout2;
