import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <h1>About us</h1>
      <ul>
        <li><Link to="programmers">Programmers</Link></li>
        <li><Link to="users">Users</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUsPage;
