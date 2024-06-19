import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const handleFormSubmit = (data) => {
    setResumeData(data);
  };
  return (
    <AuthProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add a catch-all route for 404 pages */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
