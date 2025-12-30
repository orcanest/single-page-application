import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
