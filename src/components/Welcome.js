// src/components/Welcome.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './all.css';

const Welcome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
  
    const tokenData = localStorage.getItem('userToken');
    const usernameData = localStorage.getItem('username');

    if (!tokenData || !usernameData) {
     
      navigate('/login');
    } else {
      setUsername(usernameData);
    }
  }, [navigate]);

  return (
    <div className="container">
      <h2>Welcome, {username}</h2>
      <p>You have successfully logged in!</p>
    </div>
  );
};

export default Welcome;
