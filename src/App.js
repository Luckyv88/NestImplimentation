// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/all.css';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const Verification = lazy(() => import('./components/Verification'));
const Welcome = lazy(() => import('./components/Welcome'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verification />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
