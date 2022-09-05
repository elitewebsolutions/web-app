import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";

function Service({ serviceData }) {
  return (
    <>
      <div className="service">
        <div className="serviseTitle">
          <h2>Ours services</h2>
        </div>
        <div className="serviceCardWrapper">
          {serviceData &&
            serviceData.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  logo={item.fields.logo}
                  title={item.fields.title}
                  summary={item.fields.description}
                  url={item.fields.url}
                  color={item.fields.color}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Service;
