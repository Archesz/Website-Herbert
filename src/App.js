import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './style/global.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
