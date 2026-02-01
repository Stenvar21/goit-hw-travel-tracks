import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import logo from "../../assets/Logo.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink to="/" className={css.logo}>
          <img src={logo} alt="TravelTrucks Logo" />
        </NavLink>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
