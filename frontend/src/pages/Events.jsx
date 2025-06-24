import React , {useEffect}from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import '../events.css'
const events = [
    {
      title: "Ceramics Expo",
      dates: "April 28, 2025 - April 30, 2025",
      location: "Suburban Collection Showplace, Novi, Michigan, USA",
      booth: "#1017",
   
    },
    {
      title: "Sampe America",
      dates: "May 19, 2025 - May 22, 2025",
      location: "Indiana Convention Center, Indianapolis, Indiana, USA",
      booth: "#M5",
    },
    {
      title: "CAMX",
      dates: "September 8, 2025 - September 11, 2025",
      location: "Orange County Convention Center, Orlando, Florida, USA",
      booth: "#S3",
    },
  ];
const Events = () => {
 
     useEffect(() => {
        // Cookie consent script
       
        
        // Trapezoid adjustment script
        document.addEventListener("DOMContentLoaded", function () {
          const cardColumn = document.querySelector(".card-column");
          const trapezoid = document.querySelector(".trapezoid");
    
          if (cardColumn && trapezoid) {
            const cardColumnHeight = cardColumn.offsetHeight;
            trapezoid.style.borderBottomWidth = cardColumnHeight + "px";
          }
        });
      }, []);


  return (
    <>
    <Header
      heroImage="/images/final/2150167357.jpg"
      heroText="Events"
      showButton={false}
    />
 <section className="py-5 " >
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6 text-center">
     
           
           <img
             src="/images/final/17670.jpg"
             alt="Team discussing work in a lab"
             className="img-fluid "
           />
         </div>
      
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 >Upcoming Events</h1>
           
            <p>
            Meet Fem Composites at upcoming trade shows and industry events. Connect with our experts, explore our advanced composite materials, and discuss solutions tailored to your applications. Stay tuned for event details, including booth numbers—we look forward to seeing you there!
            </p>
           
          </div>
          
          {/* Image Column */}
          
        </div>
      </div>
    </section>
<section className="events">
    <div className="container  my-5 p-5">
      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm p-3"  id="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p><strong>Dates:</strong> {event.dates}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Booth:</strong> {event.booth}</p>
                {event.note && <p className="text-danger"><strong>Note:</strong> {event.note}</p>}
              </div>
              <div className="arrow">
                    <i className="fa fa-arrow-right"></i>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    
    <Footer/>
    </>
  );
};

export default Events;
