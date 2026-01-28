// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the MERN Auth App</h1>
      <div className="links">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;
