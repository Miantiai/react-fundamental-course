import { Navigate } from 'react-router-dom';
import AboutPage from '../Pages/AboutPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PostsPage from '../Pages/PostsPage/PostsPage';
import SinglePostPage from '../Pages/SinglePostPage/SinglePostPage';

export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/About', element: <AboutPage /> },
  { path: '/Posts', element: <PostsPage /> },
  { path: '/Posts/:id', element: <SinglePostPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
];

export const publicRoutes = [
  { path: '/Login', element: <LoginPage /> },
  { path: '*', element: <Navigate to="/Login" replace /> },

];
