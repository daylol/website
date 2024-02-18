import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blogs from '../pages/blogs/Blogs';
import Contact from '../pages/contact/Contact';
import Blog from '../Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<About />} path="/about" />
      <Route element={<Blogs />} path="/blogs" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Blog />} path="/blogs/:blogId" />
    </Routes>
  );
};

export default AppRoutes;
