import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage" ? { marginTop: "0px" } : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to AtoZ Bike Service</h2>
              <p className="section__description">
                At AtoZ Bike Service, we specialize in delivering premium bike
                and car washing, detailing, and maintenance services to keep
                your vehicles looking and performing their best. Our expert team
                uses high-quality products and advanced techniques to ensure
                thorough cleaning and meticulous detailing, both inside and out.
                We also offer the convenience of doorstep bike servicing,
                bringing our expertise right to your location. Whether it's
                restoring a shine, maintaining vehicle health, or providing
                top-tier customer service, we're committed to exceeding your
                expectations every time. Choose us for a professional and
                hassle-free experience!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Quality
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Reliability
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Convenience
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Excellence
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
