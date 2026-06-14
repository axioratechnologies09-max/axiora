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
        <Route path="services/frontend-development" element={<ServicePage type="frontend" />} />
        <Route path="services/custom-web-apps" element={<ServicePage type="customWebApps" />} />
        <Route path="services/ecommerce-solutions" element={<ServicePage type="ecommerce" />} />
        <Route path="services/cms-headless" element={<ServicePage type="cmsHeadless" />} />
        <Route path="services/backend-apis" element={<ServicePage type="backend" />} />
        <Route path="services/seo-performance" element={<ServicePage type="seoPerformance" />} />
        <Route path="blog" element={<BlogIndex />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
