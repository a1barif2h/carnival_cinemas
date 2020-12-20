import React from "react";
import { Carousel } from "react-bootstrap";
import b1 from "../../../images/banner_images/1.jpg";
import b2 from "../../../images/banner_images/2.jpg";
import b3 from "../../../images/banner_images/3.jpg";
import b4 from "../../../images/banner_images/4.jpg";

const MainBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={b1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={b2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={b3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={b4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainBanner;
