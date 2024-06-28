import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Artist from './pages/Artist';
import Service from './pages/Service';
import Location from './pages/Location';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/nghe-si" element={<Artist />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/phan-bo" element={<Location />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;