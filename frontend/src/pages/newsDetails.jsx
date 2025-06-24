import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to get news by slug
    fetch(`${API_BASE_URL}/api/news/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("News not found");
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!news) return <p>News not found</p>;

  return (
    <>
      <Header heroImage={`${API_BASE_URL}${news.heroImage}`} heroText={news.heroText} showButton={false} />
      <div className="container my-5">
        <div
          className="news-description"
          dangerouslySetInnerHTML={{ __html: news.description }}
          style={{ textAlign: "left" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
