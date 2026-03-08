import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <header>
         <NavLink to="/" className="logo">
            Football Tournament
         </NavLink>

         <nav className="nav">
            <NavLink to="/teams" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
               Teams
            </NavLink>

            <NavLink to="/matches" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
               Matches
            </NavLink>
         </nav>
      </header>
   );
}
