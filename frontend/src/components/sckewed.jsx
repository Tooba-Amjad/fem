// ./components/SkewedComponent.jsx
import React from 'react';

const SkewedComponent = () => {
  return (
    <>
      <section className="contact-container">
        <div className="skewed-background"></div> 
        <div className="contact-info">
          <span className="phone-icon"><i className="fas fa-phone-alt"></i></span>
          <span className="phone-number">Call - 49 40 334 609 780</span>
        </div>
        <div className="contact-text">
          <span>Contact Fem Composites</span>
        </div>
        <button className="explore-button mt-0">EXPLORE THE PRODUCTS</button>
      </section>
    </>
  );
};

export default SkewedComponent;
