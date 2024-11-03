// src/components/Services.js
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

function Services() {
  return (
    <div className="container mt-5">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your IT needs:</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-0b186f0e9c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE2MTkxNTY0NDg')", backgroundSize: 'cover', color: '#fff' }}>
            <div className="card-body">
              <h5 className="card-title">Web Design & Development</h5>
              <NavLink className="btn btn-primary" to="design">Learn More</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47c0b140d46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxtb2JpbGUuYXBwJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTYxOTE1NjQ3OQ')", backgroundSize: 'cover', color: '#fff' }}>
            <div className="card-body">
              <h5 className="card-title">Mobile App Development</h5>
              <NavLink className="btn btn-primary" to="development">Learn More</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581571244264-80b3c1745876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGl0JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE2MTkxNTY0OTM&ixlib=rb-1.2.1&q=80&w=1080')", backgroundSize: 'cover', color: '#fff' }}>
            <div className="card-body">
              <h5 className="card-title">IT Consulting</h5>
              <NavLink className="btn btn-primary" to="consulting">Learn More</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584697964183-b1e113467cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHRlY2hub2xvZ3klMjBzdXBwb3J0fGVufDB8fHx8MTYxOTE1NjUwNw&ixlib=rb-1.2.1&q=80&w=1080')", backgroundSize: 'cover', color: '#fff' }}>
            <div className="card-body">
              <h5 className="card-title">Technical Support</h5>
              <NavLink className="btn btn-primary" to="support">Learn More</NavLink>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="design" element={<ServiceDetail service="Web Design & Development" />} />
        <Route path="development" element={<ServiceDetail service="Mobile App Development" />} />
        <Route path="consulting" element={<ServiceDetail service="IT Consulting" />} />
        <Route path="support" element={<ServiceDetail service="Technical Support" />} />
      </Routes>
    </div>
  );
}

export default Services;
