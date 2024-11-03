// src/components/ServiceDetail.js
import React from 'react';

function ServiceDetail({ service }) {
  return (
    <div className="container mt-5">
      <h2>{service}</h2>
      <p>Details about {service} will be provided here.</p>
      <p>This is a brief description of what we offer in this service category.</p>
    </div>
  );
}

export default ServiceDetail;
