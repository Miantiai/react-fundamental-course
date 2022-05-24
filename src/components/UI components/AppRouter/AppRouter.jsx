import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import { privateRoutes, publicRoutes } from '../../../router';
import { AuthContext } from '../../../context';
import Loader from '../Loader/Loader';

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      )}
    </div>
  );
}
