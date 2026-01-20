import { NavLink } from "react-router-dom";
import navItems from "./navItems";

const NavMenu = ({ mobile = false, onClick }) => {
  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col gap-4"
          : "hidden md:flex gap-8"
      }`}
    >
      {navItems.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            onClick={onClick}
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;