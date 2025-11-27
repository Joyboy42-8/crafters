import { Calendar, Home, UsersRound } from "lucide-react";
import Brand from "./Brand";
import { motion } from "motion/react"
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <aside className="Navbar">
      <Brand />

      <nav className="Nav">
        <NavItem icon={<Home size={18} />} label="Home" link="/" />
        <NavItem icon={<Calendar size={18} />} label="Planning" link="planning" />
        <NavItem icon={<UsersRound size={18} />} label="Profil" link="profil" />
      </nav>

      <Disconnect />
    </aside>
  );
}

function NavItem({ icon, label, link }) {
  return (
    <NavLink to={link}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="NavLink"
      >
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </motion.button>
    </NavLink>
  );
}

function Disconnect() {
  return <button className="Disconnect">Disconnect</button>;
}