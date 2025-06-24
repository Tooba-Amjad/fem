import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Register Chart Components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const apiUrl = import.meta.env.VITE_API_URL;

const PerformanceDashboard = () => {
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [monthlyIncrease, setMonthlyIncrease] = useState(0);
  const [contactMessages, setContactMessages] = useState({
    read: 0,
    unread: 0,
  });
  const [blogFeedback, setBlogFeedback] = useState({});
  const [latestBlog, setLatestBlog] = useState({});
  const [latestProject, setLatestProject] = useState({});
  const [hoveredBlog, setHoveredBlog] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          subscribersResponse,
          messagesResponse,
          feedbackResponse,
          latestBlogResponse,
          latestProjectResponse,
        ] = await Promise.all([
          axios.get(`${apiUrl}/api/stats/subscribers`),
          axios.get(`${apiUrl}/api/stats/contactMessages`),
          axios.get(`${apiUrl}/api/stats/blogFeedback`),
          axios.get(`${apiUrl}/api/stats/latest-blog`),
          axios.get(`${apiUrl}/api/stats/latest-project`),
        ]);

        setTotalSubscribers(subscribersResponse.data.totalSubscribers);
        setMonthlyIncrease(subscribersResponse.data.monthlyIncrease);
        setContactMessages(messagesResponse.data);
        setBlogFeedback(feedbackResponse.data);
        setLatestBlog(latestBlogResponse.data);
        setLatestProject(latestProjectResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalSubscribersData = {
    labels: ["Last Month", "This Month"],
    datasets: [
      {
        label: "Subscribers",
        data: [totalSubscribers - monthlyIncrease, totalSubscribers],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const totalSubscribersOptions = {
    scales: {
      x: {
        title: { display: true, text: "Time" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Subscribers" },
      },
    },
  };

  const contactMessagesData = {
    labels: ["Read Messages", "Unread Messages"],
    datasets: [
      {
        data: [contactMessages.read, contactMessages.unread],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const feedbackData = {
    labels: ["Unread", "Read"],
    datasets: [
      {
        data: [blogFeedback.unread, blogFeedback.read],
        backgroundColor: ["#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const styles = {
    dashboard: {
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "1rem",
      color: "#666",
      marginTop: "10px",
    },
    cardImage: {
      height: "200px",
      objectFit: "cover",
      width: "100%",
    },
    cardTitle: {
      height: "30px",
      overflow: "hidden",
      width: "100%",
    },
    hoverCard: {
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    card :{
height:"250px",
    },
    hoverEffect: (isHovered) => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      color: "#000",
      opacity: isHovered ? 1 : 0,
      transition: "opacity 0.3s ease",
    }),
  };

  return (
    <div style={styles.dashboard} className="container mx-0">
      <h3 style={styles.heading}>Website Performance</h3>

      <div className="row">
        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Total Subscribers & Monthly Increase
              </h5>
              <Line data={totalSubscribersData} options={totalSubscribersOptions} />
              <p style={styles.paragraph}>
                Monthly Increase: {monthlyIncrease} (
                {Math.round(
                  (monthlyIncrease / (totalSubscribers - monthlyIncrease)) * 100
                )}
                %)
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Messages</h5>
              <Pie data={contactMessagesData} />
              <Link to="/messages" className="btn btn-primary mt-3">
                View Messages
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Feedback/Comments</h5>
              <Pie data={feedbackData} />
              <Link to="/comments" className="btn btn-primary mt-3">
                View Comments
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h3 style={styles.heading}>Latest</h3>

      <div className="row">
        {/* Latest Blog */}
        <div className="col-md-6 mb-3">
          <div
            style={styles.hoverCard}
            className="card"
            onMouseEnter={() => setHoveredBlog(true)}
            onMouseLeave={() => setHoveredBlog(false)}
          >
            <div className="card-body">
              <img
                src={`${apiUrl}/uploads/${latestBlog.image}`}
                alt="Blog"
                style={styles.cardImage}
              />
              <h5 style={styles.cardTitle}>{latestBlog.title}</h5>
            </div>
            <div
              style={styles.hoverEffect(hoveredBlog)}
              onClick={() => navigate("/add-blog")}
            >
              <span>+</span>
            </div>
          </div>
        </div>

        {/* Latest Project */}
        <div className="col-md-6 mb-3">
          <div
            style={styles.hoverCard}
            className="card"
            onMouseEnter={() => setHoveredProject(true)}
            onMouseLeave={() => setHoveredProject(false)}
          >
            <div className="card-body">
              <img
                src={`${apiUrl}/uploads/${latestProject.mainImage}`}
                alt="Project"
                style={styles.cardImage}
              />
              <h5 style={styles.cardTitle}>{latestProject.title}</h5>
            </div>
            <div
              style={styles.hoverEffect(hoveredProject)}
              onClick={() => navigate("/add-project")}
            >
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
