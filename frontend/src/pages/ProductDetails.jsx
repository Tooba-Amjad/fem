import React, { useEffect, useState  } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/header";
const ProductDetails = ({ productId }) => {
  const { slug } = useParams(); // gets the dynamic slug from the URL
  const [data, setData] = useState(null);

const API_BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/product/${slug}`)
      .then(res => setData(res.data))
      .catch(err => console.error("Failed to fetch product data:", err));
  }, [slug]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {/* Hero Header */}
      <Header
        heroImage={data.heroImage}
        heroText={data.heroText}
        showButton={false}
      />

      {/* Applicable Markets */}
      <div className="container my-5">
        <div className="row g-4">
          {data.applicableMarkets.map((market, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100">
                <img src={market.image} alt={market.title} />
                <div className="card-body">
                  <h5 className="card-title">{market.title}</h5>
                </div>
                <div className="card-footer bg-white border-0 d-flex justify-content-end">
                  <div className="arrow">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <section className="container py-5">
        <div dangerouslySetInnerHTML={{ __html: data.descriptionHtml }} />
        <div className="text-center mt-4">
          <button className="explore-button">Download the FEM Composites Product Guide</button>
        </div>
      </section>

      {/* Table or PDF */}
      <div className="container my-4">
        {data.pdfUrl ? (
          <div className="text-center">
            <a href={data.pdfUrl} className="explore-button" target="_blank" rel="noopener noreferrer">
              View Product PDF
            </a>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="bg-danger text-white text-center">
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Applications</th>
                  <th>Form</th>
                  <th>Matrix Color</th>
                  <th>Max. Short Term Use Temp, °F (°C)</th>
                  <th>Max. Continuous Operating Temp, °F (°C)</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {data.tableRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.product}</td>
                    <td>{row.description}</td>
                    <td>{row.applications}</td>
                    <td>{row.form}</td>
                    <td>{row.color}</td>
                    <td>{row.maxShortTemp}</td>
                    <td>{row.maxContTemp}</td>
                    <td>{row.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Features */}
      <Container className="my-5">
        {data.features.featuresType === "list" ? (
          <Row>
            <Col md={6}>
              <h5 className="fw-bold text-black">APPLICATIONS</h5>
              <ul className="list-unstyled">
                {data.features.features.slice(0, Math.ceil(data.features.features.length / 2)).map((item, i) => (
                  <li key={i} className="d-flex align-items-center">
                    <span className="text-danger me-2">●</span> {item}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="fw-bold text-black">CUSTOMIZED PREPREGS</h5>
              <ul className="list-unstyled">
                {data.features.features.slice(Math.ceil(data.features.features.length / 2)).map((item, i) => (
                  <li key={i} className="d-flex align-items-center">
                    <span className="text-danger me-2">●</span> {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <p>{data.features.features}</p>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
