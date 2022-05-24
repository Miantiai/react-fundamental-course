import AppRouter from './components/UI components/AppRouter/AppRouter';
import Navbar from './components/UI components/Navbar/Navbar';
import './styles/index.css';
import { AuthContext } from './context/index';
import { useEffect, useState } from 'react';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false)
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}
