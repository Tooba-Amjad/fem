import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../video.css'; 

const Video = () => {
  return (
    <div className="container mt-4 bg-white">
      <div className="row">
        <div className="col-md-4">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/OeC8BStFzdM?rel=0" 
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-4">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/aO4feutZjFc?rel=0" 
              title="YouTube video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-4">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/PaRd4ODCzRA?rel=0" 
              title="YouTube video 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;