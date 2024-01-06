import './index.css';
import Hero from "./components/hero/Hero";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const targetDate = new Date( 'February 23, 2024 08:00:00');
  return (
    <Router>
      <Routes>
        {/* Index route */}
        <Route path="/" element={<Hero targetDate={targetDate}/>} />
      </Routes>
    </Router>
  );
}

export default App;
