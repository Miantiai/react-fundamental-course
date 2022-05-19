import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import About from '../../../Pages/About';
import Posts from '../../../Pages/Posts';
import HomePage from '../../../Pages/HomePage/HomePage';
import SinglePostPage from '../../../Pages/SinglePostPage/SinglePostPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="About" element={<About />} />
      <Route path="Posts" element={<Posts />} />
      <Route path="Posts/:id" element={<SinglePostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
