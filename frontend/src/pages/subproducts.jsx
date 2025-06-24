import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL;
import Header from "../components/header";
import ContactFormBootstrap from "../components/contactform";
import Footer from "../components/footer";
const ProductPage = () => {

    const navigate = useNavigate();
  const [data, setData] = useState(null);
 const { slug } = useParams();
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/product/${slug}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [slug]);
console.log(data)
  if (!data) return <div>Loading...</div>;

  const { media, title, description, features, applicableMarkets, marketData, technicalTables ,subPages} = data;
const tableData = technicalTables && technicalTables[0];
console.log("subpages",subPages)
  return (
    <>
      {/* HEADER */}
      <Header heroImage={`${API_BASE_URL}${media?.heroImage}`} heroText={title} showButton={false} />

      {/* DESCRIPTION */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-black">{title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className="text-center mt-4">
          <button className="explore-button">Download the FEM Composites Product Guide</button>
        </div>
      </section>

{features && (

  
 <Container className="my-5">
  <h2>Features</h2>
  <ul className="list-unstyled">
    {features.map((item, i) => (
      <li key={i} className="d-flex align-items-start mb-2">
        <span className="text-danger me-2">●</span>
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </li>
    ))}
  </ul>
</Container>

)}
{subPages?.length > 0 && (
  <div className="container my-5">
    <h2 className="mb-4">Explore Related Solutions</h2>
    <div className="row g-4">
      {subPages.map((page) => (
        <div
          className="col-md-4 m-9"
          key={page._id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/products/${page.slug}`)}
        >
          <div className="card h-100">
            <img
              src={`${API_BASE_URL}${page.media.heroImage}`}
              className="card-img-top"
              alt={page.title}
            />
            <div className="card-body">
              <h2 className="card-title">{page.title}</h2>
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
)}


 <div className="container my-5">
      <div className="row g-4">
{applicableMarkets.map((market) => (
  <div
    className="col-md-4 m-9"
    key={market._id}
    style={{ cursor: "pointer" }}
    onClick={() => {
  console.log("Clicked market:", market.slug);
  navigate(`/market/${market.slug}`);
}}
  
  >
    <div className="card h-100">
      <img
        src={`${API_BASE_URL}/uploads/${market.mainImage}`}
        className="card-img-top"
        alt={market.name}
      />
      <div className="card-body">
        <h2 className="card-title">{market.name}</h2>
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

     {tableData?.data?.length > 1 && (
  <div className="container my-4">
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="bg-danger text-white text-center">
          <tr>
            {tableData.data[0].map((h, i) => (
              <th key={i} style={{ background: "#ea5c1f", color: "#fff", textAlign: "center" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <a href="#" className="explore-button" style={{ textDecoration: 'none' }}>
      Request a SDS/TDS Document
    </a>
  </div>
)}

        <div className="mt-9" style={{background:'#e1e2e4'}}>
      <ContactFormBootstrap/>
      </div>
    <Footer/>
    </>
  );
};

export default ProductPage;
