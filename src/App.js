import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import About from './components/about/About'; 
import Search from './components/search/Search'; 
import Feedback from './components/feedback/Feedback'
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/search" element={<Search />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
