import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="Posts">Posts</Link>
        <Link to="About">About</Link>
      </div>
    </div>
  );
}
