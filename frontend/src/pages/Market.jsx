import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import MarketSection from '../components/Layout1'
import SectorSection from "../components/sectorsection";
import AutomotiveSection from "../components/Layout3";
import AboutSection from "../components/about";
import TestimonialSection from "../components/client_feedback";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Market = () => {
  const { slug } = useParams();
   const [marketData, setMarketData] = useState(null);
   const navigate = useNavigate();
   const API_BASE_URL = import.meta.env.VITE_API_URL;
  const marketsData = [
    "Aerospace",
    "Automotive",
    "Military",
    "Sports & Recreation",
    "Industrial",
    "Medical",
    "Infrastructure / Construction",
    "Energy",
    "Marine"
  ];
   useEffect(() => {
      const fetchMarket = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/market`);
          setMarketData(response.data);
       
        } catch (error) {
          console.error("Error fetching market data:", error);
        }
      };
      fetchMarket();
    }, [slug]);
  
    if (!marketData) return <div>Loading...</div>;
  
  return (
    <>
    
    <Header
      heroImage="/images/final/1742758079835.png"
      heroText="Markets"
      showButton={false}
    />
     <MarketSection
        imageSrc="/images/final/1742741857950.png"
        imageAlt="Fighter plane"
        heading="Composite Materials for Every Market"
        description="Fem Composites offers advanced composite materials tailored for a diverse range of markets and applications. Whether you need high-temperature prepregs for industrial use or lightweight ceramic matrix composites for aerospace, our team of experts is here to help you identify the ideal solution to meet your requirements. Below are the markets we currently serve: "
        markets={marketsData}
        buttonText="LET US HELP YOU FIND THE RIGHT PRODUCT"
        link='/contact'
      />
    {marketData.map((section, index) =>
        index % 2 === 0 ? (
         
          <SectorSection
           
            heading={section.name}
            description={section.sections[0].description}
            features={section.sections[0].list}
            imageSrc={`${API_BASE_URL}/uploads/${section.mainImage}`}
            imageAlt={section.heading}
            buttonText="LEARN MORE"
             link={section.slug} 
          />
        ) : (
          <AutomotiveSection
         
            heading={section.name}
            description={section.sections[0].description}
            features={section.sections[0].list}
            imageSrc={`${API_BASE_URL}/uploads/${section.mainImage}`}
            imageAlt={section.heading}
            buttonText="LEARN MORE"
             link={section.slug} 
          />
        )
      )}
    



    {/* Testimonial Section */}
    <TestimonialSection/>
      <AboutSection/>
<Footer/>
</>
)}
export default Market