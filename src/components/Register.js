// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      localStorage.setItem('userToken', data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
