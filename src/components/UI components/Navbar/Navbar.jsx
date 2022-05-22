import CustomNavLink from "../CustomNavLink/CustomNavLink";

export default function Navbar() {
  return (
    <div className="navbar">
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
