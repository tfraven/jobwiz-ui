import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import JobListing from './pages/Joblisting/JobListing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from "./components/Navbar/Navbar"
import DashBoard from './pages/DashBoard/DashBoard'

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
