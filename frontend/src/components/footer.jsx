// ./components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <footer className="footer-section py-4 bg-light">
        <div className="container">
          {/* Contact Section */}
          <div className="call-section d-flex justify-content-between align-items-center flex-wrap">
            <span className="call-text">
              <i className="fa fa-phone"></i> Call - 49 40 334 609 780<br />
              Fax: +49 40 210 912 760
            </span>
            <span className="company-logo mubally-included">
              <img src="/images/Logo.png" alt="Fem Composites Logo" className="footer-logo img-fluid" />
            </span>
          </div>

          {/* Address Section */}
          <div className="address-section mt-3">
            <h3>Our Locations:</h3>
            <ul className="list-unstyled">
              <li>Main Office: Raboisen 38, 20095 Hamburg, Germany</li>
              <li>Flat 1512, 15/F, Lucky Centre, 165-171 Wan Chai Road, Hong Kong, China</li>
              <li>21/F, Pearl River Tower, No.15 Zhujiang West Road, Tianhe District, Guangzhou 510623, China</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="footer-links d-flex justify-content-center mt-3">
            <ul className="footer-nav list-inline">
              <li className="list-inline-item"><a href="#">MARKETS</a></li>
              <li className="list-inline-item"><a href="#">ADVANCED COMPOSITE MATERIALS</a></li>
              <li className="list-inline-item"><a href="#">COMPANY</a></li>
              <li className="list-inline-item"><a href="#">NEWS</a></li>
              <li className="list-inline-item"><a href="#">CONTACT</a></li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom d-flex justify-content-between mt-3 flex-wrap">
            <span>&copy; 2025 Fem Composites. All rights reserved.</span>
            <span><a href="#">Terms and Conditions</a></span>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons text-center mt-3">
            <a href="#" className="social-icon mx-2" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="social-icon mx-2" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon mx-2" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon mx-2" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="social-icon mx-2" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
      
     
     
    </>
  );
};

export default Footer;