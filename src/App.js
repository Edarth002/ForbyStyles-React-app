import './index.css';
import Hero from "./components/hero/Hero";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './components/Blog/BlogPage';

function App() {
  const targetDate = new Date('February 23, 2024 00:00:00');
  return (
    <Router>
      <Routes>
        {/* Index route */}
        <Route path="/" element={<Hero targetDate={targetDate}/>} />

        {/* Other routes */}
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
