import { NavLink } from "react-router";
import Brand from "./Brand";
import { CalendarDays, Home, UserCog } from "lucide-react";

const user = {
  id: 1,
}

export default function Navbar() {
  return (
    <aside className="NavBar">
        <Brand />

        <Nav />

        <button>Disconnect</button>
    </aside>
  )
}

function Nav() {
  return(
    <nav className="Nav">

      <NavLink to="/" className="NavLink">
        <Home />
        Home
      </NavLink>

      <NavLink to="/agenda" className="NavLink">
        <CalendarDays />
        Agenda
      </NavLink>

      <NavLink to={`/profile/${user.id}`} className="NavLink">
        <UserCog />
        Profile
      </NavLink>

    </nav>
  );
}