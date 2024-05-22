import { NavLink } from "react-router-dom";
import "./MyNavbar.css";
export default function MyNavbar() {
  return (
    <div className="navbar-container">
      <h1 className="brandName">Nerd Studio</h1>
      <div className="navlinks">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to= "/create-an-article" className="nav-link">
          Create an Article
        </NavLink>
        <NavLink to="/about-us" className="nav-link">
          About Us
        </NavLink>
      </div>
    </div>
  );
}
