import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "/img/4ps-test2.png";
import image2 from "/img/senior-test.png";

const Slider = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
          .carousel-image {
            max-width: 100%;
            height: auto;
            width: auto; /* ie8 */
          }
        `}
      </style>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={9000}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={true}
      >
        <div>
          <div className="w-full">
            <img src={image2} alt="Image 2" className="carousel-image" />
          </div>
        </div>
        <div>
          <div className="w-full">
            <img src={image1} alt="Image 1" className="carousel-image" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
