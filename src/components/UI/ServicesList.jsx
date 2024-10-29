import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import { fetchServiceData } from "../../assets/data/serviceData";

const ServicesList = () => {
  const [servicesData, setServicesData] = useState([]); // State to store fetched data

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServiceData();
      setServicesData(data); // Update state with the fetched data
    };
    getData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};
//test

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
