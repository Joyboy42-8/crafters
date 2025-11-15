import { NavLink } from "react-router";
import Brand from "./Brand";
import { CalendarDays, Home, UserCog } from "lucide-react";

const user = {
  id: 1,
}

export default function Navbar() {
  return (
    <aside className="Navbar">
        <Brand />

        <Nav />

        <button className="Disconnect">Disconnect</button>
    </aside>
  )
}

function Nav() {
  return(
    <nav className="Nav">

      <NavLink to="/" className="NavLink">
        <Home size={14} />
        Home
      </NavLink>

      <NavLink to="/planning" className="NavLink">
        <CalendarDays size={14} />
        Agenda
      </NavLink>

      <NavLink to={`/profil/${user.id}`} className="NavLink">
        <UserCog size={14} />
        Profile
      </NavLink>

    </nav>
  );
}