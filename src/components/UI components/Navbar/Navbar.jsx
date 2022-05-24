import { useContext } from 'react';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <Button onClick={logout}>Выйти</Button>
      <div className="navbar__links">
        <CustomNavLink className="NavLink" to="/">
          Home
        </CustomNavLink>
        <CustomNavLink className="NavLink" to="Posts">
          Posts
        </CustomNavLink>
        <CustomNavLink className="NavLink" to="About">
          About
        </CustomNavLink>
      </div>
    </div>
  );
}
