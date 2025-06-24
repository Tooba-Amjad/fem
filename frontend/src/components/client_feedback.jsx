import React from 'react';


const TestimonialSection = ({ feedback, author, designation }) => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h5 style={{ textAlign: 'center' }}>Client's Feedback</h5>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="testimonial-content">
              <div className="quote-wrapper">
                <img
                  src="/images/qoute.png"
                  alt="Quote Left"
                  className="quote-left"
                />
                <p className="testimonial-text">
                Fem Composites has been an invaluable resource in providing unique resin solutions for our specialty textile products. Their willingness to collaborate and deliver when time is of the essence is a rarity in today’s composites market. We look forward to continuing this innovation-rooted relationship well into the future.
                </p>
                <img
                  src="/images/qoute.png"
                  alt="Quote Right"
                  className="quote-right"
                />
              </div>
              <p className="author">
                <strong>{author}</strong>
                <br />
                {designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;