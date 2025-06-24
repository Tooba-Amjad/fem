import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Header = ({ heroImage, heroText, showButton }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Markets state
  const [marketsData, setMarketsData] = useState([]);
  const [loadingMarkets, setLoadingMarkets] = useState(true);
  const [errorMarkets, setErrorMarkets] = useState(null);

  // Products state
  const [productsData, setProductsData] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch markets
    const fetchMarkets = async () => {
      try {
        setLoadingMarkets(true);
        const response = await fetch(`${API_BASE_URL}/api/market`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setMarketsData(data);
      } catch (error) {
        setErrorMarkets(error.message);
      } finally {
        setLoadingMarkets(false);
      }
    };

    // Fetch products
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        const response = await fetch(`${API_BASE_URL}/api/product`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        setErrorProducts(error.message);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchMarkets();
    fetchProducts();
  }, [API_BASE_URL]);

  // Format heroText for line breaks
  const formattedHeroText = heroText.split("{br}").map((line, index, arr) => (
    <React.Fragment key={index}>
      {line}
      {index !== arr.length - 1 && <br />}
    </React.Fragment>
  ));

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container-fluid text-white w-100">
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="/images/EPSLogo-02-01.png"
                  alt="Logo"
                  style={{ width: "200px", height: "auto" }}
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                onClick={handleMenuToggle}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto" data-bs-display="dynamic">
                  {/* Markets Dropdown */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/market"
                      id="navbarDropdownMarkets"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => {
                        if (window.innerWidth > 991)
                          window.location.href = "/market";
                        else e.preventDefault();
                      }}
                    >
                      Markets
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMarkets"
                    >
                      {loadingMarkets && (
                        <li className="dropdown-item">Loading...</li>
                      )}
                      {errorMarkets && (
                        <li className="dropdown-item text-danger">
                          {errorMarkets}
                        </li>
                      )}
                      {!loadingMarkets &&
                        !errorMarkets &&
                        marketsData.filter((m) => m.showInNavbar).length ===
                          0 && (
                          <li className="dropdown-item">No markets found.</li>
                        )}
                      {!loadingMarkets &&
                        !errorMarkets &&
                        marketsData
                          .filter((m) => m.showInNavbar)
                          .map(
                            ({
                              _id,
                              name,
                              slug,
                              navbarImage,
                              navbarDescription,
                            }) => (
                              <li key={_id}>
                                <Link
                                  className="dropdown-item"
                                  to={`/market/${slug}`}
                                >
                                  <img
                                    src={`${API_BASE_URL}/uploads/${navbarImage}`}
                                    alt={name}
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                      marginRight: "10px",
                                    }}
                                  />
                                  <div
                                    style={{
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    <span className="title">{name}</span>
                                    <div
                                      className="description"
                                      style={{ display: "block" }}
                                    >
                                      <span>{navbarDescription || ""}</span>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                    </ul>
                  </li>

                  {/* Products Dropdown */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/products"
                      id="navbarDropdownProducts"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => {
                        if (window.innerWidth > 991)
                          window.location.href = "/products";
                        else e.preventDefault();
                      }}
                    >
                      Products
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownProducts"
                    >
                      {loadingProducts && (
                        <li className="dropdown-item">Loading...</li>
                      )}
                      {errorProducts && (
                        <li className="dropdown-item text-danger">
                          {errorProducts}
                        </li>
                      )}
                      {!loadingProducts &&
                        !errorProducts &&
                        productsData.length === 0 && (
                          <li className="dropdown-item">No products found.</li>
                        )}
                      {!loadingProducts &&
                        !errorProducts &&
                        productsData
                          .filter((product) => product.isNavbar) // filter here
                          .map(
                            ({
                              _id,
                              title,
                              slug,
                              navbarImage,
                              navbarDescription,
                            }) => (
                              <li key={_id}>
                                <Link
                                  className="dropdown-item"
                                  to={`/products/${slug}`}
                                >
                                  <img
                                    src={`${API_BASE_URL}${navbarImage}`}
                                    alt={name}
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                      marginRight: "10px",
                                    }}
                                  />
                                  <div
                                    style={{
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    <span className="title">{title}</span>
                                    <div
                                      className="description"
                                      style={{ display: "block" }}
                                    >
                                     <span dangerouslySetInnerHTML={{ __html: navbarDescription || "" }}></span>

                                    </div>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/company"
                      id="navbarDropdownProducts"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => {
                        if (window.innerWidth > 991) {
                          window.location.href = "/company"; // Redirect on larger screens
                        } else {
                          e.preventDefault(); // Prevent navigation and allow dropdown toggle on mobile
                        }
                      }}
                    >
                      Company
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownProducts"
                    >
                      <li>
                        <Link className="dropdown-item" to="/company/about">
                          <img
                            src="/images/final/2148814172.png"
                            alt="Ceramic Matrix Composites"
                          />
                          <div>
                            <span className="title">About</span>
                            <div className="description">
                              Fem Composites is a leader in advanced composite
                              solutions. Discover what sets us apart and keeps
                              us ahead of the competition.
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/company/quality_testing"
                        >
                          <img
                            src="/images/final/1742808030836.png"
                            alt="Ceramic Matrix Composites"
                          />
                          <div>
                            <span className="title">Quality & Testing</span>
                            <div className="description">
                              Ensuring top-tier materials, products, and service
                              while meeting our customers' exact specifications.
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/company/research">
                          <img
                            src="/images/research.jpg"
                            alt="Ceramic Matrix Composites"
                          />
                          <div>
                            <span className="title">Research</span>
                            <div className="description">
                              Ensuring top-tier materials, products, and service
                              while meeting our customers' exact specifications.
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/company/events">
                          <img
                            src="/images/final/2150167357.jpg"
                            alt="Ceramic Matrix Composites"
                          />
                          <div>
                            <span className="title">Events</span>
                            <div className="description">
                              Ensuring top-tier materials, products, and service
                              while meeting our customers' exact specifications.
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/company/careers">
                          <img
                            src="/images/final/47061.jpg"
                            alt="Ceramic Matrix Composites"
                          />
                          <div>
                            <span className="title">Careers</span>
                            <div className="description">
                              Ensuring top-tier materials, products, and service
                              while meeting our customers' exact specifications.
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* News Link */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/news">
                      News
                    </Link>
                  </li>

                  {/* Contact Button */}
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-primary text-white"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {!isMenuOpen && (
            <div className="navbar-ribbon">
              <img src="/images/pattern-07.png" alt="Image" />
            </div>
          )}
          <h1>{formattedHeroText}</h1>
          {showButton && (
            <button className="explore-button d-none d-md-inline-block">
              EXPLORE THE PRODUCTS
            </button>
          )}
        </div>
      </section>

      <section className="contact-container">
        <div className="skewed-background"></div>
        <div className="contact-info">
          <span className="phone-number">Call - 49 40 334 609 780</span>
        </div>
        <div className="contact-text">
          <span>Contact Fem Composites</span>
        </div>
        <button className="explore-button">EXPLORE THE PRODUCTS</button>
      </section>
    </>
  );
};

export default Header;
