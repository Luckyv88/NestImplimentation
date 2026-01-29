// src/components/Verification.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './all.css';

const Verification = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/verifyemail', {
        code,
      });

      setSuccess('Email verified successfully. Redirecting to login...');
      setError('');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <h2>Email Verification</h2>

      {error && <p className="error">{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleVerify} className="form">
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          required
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="btn">Verify Email</button>
      </form>
    </div>
  );
};

export default Verification;
