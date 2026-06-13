import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import BlogIndex from './pages/BlogIndex';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="ai-development-services" element={<ServicePage type="aiServices" />} />
        <Route path="custom-software-development" element={<ServicePage type="customSoftware" />} />
        <Route path="saas-development-services" element={<ServicePage type="saasDevelopment" />} />
        <Route path="cloud-devops-services" element={<ServicePage type="cloudDevops" />} />
        <Route path="mobile-app-development" element={<ServicePage type="mobileApp" />} />
        <Route path="web-development-services" element={<ServicePage type="webDevelopment" />} />
        <Route path="digital-transformation-services" element={<ServicePage type="digitalTransformation" />} />
        <Route path="blog" element={<BlogIndex />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
