import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../contact.css';

const ContactFormBootstrap = () => {
  return ( 
    <div className="container-fluid">
      <div className="contact mx-auto">
        <h2 className="text-center mb-4 mt-4">Let Us Help You Find the Right Product</h2>
        <form>
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="firstName" className="form-label">
                First Name*
              </label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="lastName" className="form-label">
                Last Name*
              </label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input type="text" className="form-control" id="company" />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input type="tel" className="form-control" id="phone" />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Street Address
            </label>
            <input type="text" className="form-control" id="address" />
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-12">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-md-4 col-12">
              <label htmlFor="stateProvince" className="form-label">
                State / Province
              </label>
              <input type="text" className="form-control" id="stateProvince" />
            </div>
            <div className="col-md-4 col-12">
              <label htmlFor="zipPostalCode" className="form-label">
                ZIP / Postal Code
              </label>
              <input type="text" className="form-control" id="zipPostalCode" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select className="form-select" id="country">
              <option value="">Select Country</option>
              {/* Populate countries */}
            </select>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="product" className="form-label">
                Product
              </label>
              <select className="form-select" id="product">
                <option value="">Select Product</option>
                {/* Populate products */}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            SPEAK TO A MATERIALS EXPERT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormBootstrap;
