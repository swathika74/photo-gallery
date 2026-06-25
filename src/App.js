import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './project/home';
import { Gallery } from './project/gallery';
import { Addphoto } from './project/addphoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/addphoto" element={<Addphoto />} />
      </Routes>
    </Router>
  );
}

export default App;
