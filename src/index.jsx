import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/footer/Footer'));
const User = lazy(() => import('./components/product/User'));
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));
const UseDetail = lazy(() => import('./components/product/UseDetail'));
const Liked = lazy(() => import('./pages/liked/Liked'));

const MainRouters = () => {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/user/:id" element={<UseDetail />} />
        <Route path="/like" element={<Liked />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default MainRouters;
