import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  // {
  //   path: "/about",
  //   display: "About",
  // },

  // {
  //   path: "#",
  //   display: "Privacy Policy",
  // },

  {
    path: "/cars",
    display: "Services",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Book your <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We are a leading provider of travel solutions, committed to
              offering our customers the best experiences. Founded in 2020, we
              have rapidly grown to serve thousands of happy customers across
              the globe. Our mission is to transform travel for everyone while
              upholding values of integrity, innovation, and excellence.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info"> AtoZ Bike Service, Opposite to Bajaj Chetah Electric Showroom<br/>
              Shirur Park, Vidya Nagar Hubli 580020</p>
              <p className="office__info">Phone: +91 6364637430</p>

              <p className="office__info">Email: atozbikeservice@gmail.com</p>

              <p className="office__info">Office Time: 10am - 9pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              {/* <p className="section__description">Subscribe our newsletter</p> */}
              <Link className="section__description" to="/contact">Subscribe our newsletter</Link>
              {/* <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div> */}
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Hitechfreak. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
