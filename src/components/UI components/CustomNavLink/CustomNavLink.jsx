import { NavLink, useMatch } from 'react-router-dom';
import s from './CustomNavLink.module.css';

export default function CustomNavLink({ children, to, ...props }) {
  const match = useMatch({ path: to, end: to.length === 1 });
  const stylesArray = match ? [s.link, s.activeLink] : [s.link];

  return (
    <NavLink to={to} {...props} className={() => stylesArray.join(' ')}>
      {children}
    </NavLink>
  );
}
