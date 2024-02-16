import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "/img/image-long.png";
import image2 from "/img/image-long2.png";

const Slider = () => {
  return (
    <div className="w-screen">
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
        `}
      </style>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={image1} alt="Image 1" className="w-full" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
