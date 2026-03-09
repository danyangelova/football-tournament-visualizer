import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <header>
         <NavLink to="/" className="logo">
            Football Tournament
         </NavLink>
      </header>
   );
}
