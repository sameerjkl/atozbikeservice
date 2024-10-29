import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/profile.jpg";
import ava02 from "../../assets/all-images/profile.jpg";
import ava03 from "../../assets/all-images/profile.jpg";
import ava04 from "../../assets/all-images/profile.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "The service was exceptional! My bike looked brand new after the wash,
          and the team was very professional. Highly recommend!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="Customer 1" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Rohan</h6>
            <p className="section__description">Satisfied Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I couldn’t be happier with the detailing service. The staff was
          attentive, and they took great care of my car. It’s sparkling clean!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="Customer 2" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Mangesh</h6>
            <p className="section__description">Happy Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "The doorstep service was incredibly convenient! I didn’t have to
          leave my home, and my bike was serviced quickly. Great job!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="Customer 3" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Suraj</h6>
            <p className="section__description">Loyal Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I had my car detailed, and the results were beyond my expectations.
          The staff was friendly, and the service was quick!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="Customer 4" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Sameer</h6>
            <p className="section__description">Returning Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
