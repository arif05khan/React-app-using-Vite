import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login'; // Add Login Component
import Welcome from './Components/Welcome'; // Add Welcome Component

function App() {
  const [user, setUser] = useState(null); // Manage user state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If a token exists in localStorage, user is logged in
      setUser({ token });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Welcome /> : <Login setUser={setUser} />} />
        {/* Protected Welcome Route */}
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
