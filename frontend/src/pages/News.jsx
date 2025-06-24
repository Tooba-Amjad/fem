import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/news`)
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <>
      <Header
        heroImage="/images/final/17427541174.png"
        heroText="NEWS"
        showButton={false}
      />
      <div className="news-card m-9">
        <h1 style={{ textAlign: "center" }}>NEWS & EVENTS</h1>
        <section className="news-events-section">
          <div className="container-fluid">
            <div className="row">
              {newsData.map((news, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/news/${news.slug}`)}
                >
                  <div className="card h-100">
                    <img
                      src={`${API_BASE_URL}${news.heroImage}` || "/images/default.jpg"}
                      className="card-img-top card-image"
                      alt="News"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ textAlign: "left" }}>
                        {news.heroText}
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "left",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        dangerouslySetInnerHTML={{ __html: news.description }}
                      ></p>
                      <div className="arrow mt-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NewsComponent;
