import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout2 from "../components/Layout2";
import AutomotiveSection from "../components/Layout3";
import SectorSection from "../components/sectorsection";
import ContactFormBootstrap from "../components/contactform";
import { useNavigate } from "react-router-dom";

const MarketPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchMarket() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`http://localhost:5000/api/market/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch market data");
        const jsonData = await res.json();
        console.log("Fetched data:", jsonData);
        setData(jsonData);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMarket();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <>
      <Header
        heroImage={`http://localhost:5000/uploads/${data.mainImage}`}
        heroText={data.name}
        showButton={false}
      />

      {data.sections && data.sections.length > 0 ? (
        <>
          {data.sections.map((section, idx) => {
            const hasList = Array.isArray(section.list) && section.list.length > 0;

            let content;

            if (hasList) {
              content = (
                <Layout2
                  key={section._id}
                  markets={section.list}
                  heading={section.heading}
                  description={section.description || ""}
                  imageSrc={`http://localhost:5000/uploads/${section.image}`}
                  imageAlt={section.heading}
                  buttonText="View Products"
  link="/products" 
                />
              );
            } else {
              content = idx % 2 === 0 ? (
                <AutomotiveSection
                  key={section._id}
                  heading={section.heading}
                  description={section.description}
                  imageSrc={`http://localhost:5000/uploads/${section.image}`}
                  imageAlt={section.heading}
                  buttonText={"Products"}
                   link="/products" 
                 
                  list={section.list}
                />
              ) : (
                <SectorSection
                  key={section._id}
                  heading={section.heading}
                  description={section.description}
                  imageSrc={`http://localhost:5000/uploads/${section.image}`}
                  imageAlt={section.heading}
                  buttonText={"Products"}
                   link="/products" 
                  list={section.list}
                />
              );
            }

            // Show contact form after 4th section (index 3)
            // Also show contact form if total sections are exactly 4 after last section
            if (idx === 4|| (idx === data.sections.length - 1 && data.sections.length === 5)) {
              return (
                <React.Fragment key={section._id}>
                  {content}
                  <div className="mt-9" style={{ background: "#e1e2e4" }}>
                    <ContactFormBootstrap />
                  </div>
                </React.Fragment>
              );
            }

            return content;
          })}
        </>
      ) : (
        <div>No sections available</div>
      )}

      <Footer />
    </>
  );
};

export default MarketPage;
