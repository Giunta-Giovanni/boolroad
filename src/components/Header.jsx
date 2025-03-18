import React from "react";
import "../style/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMoon, FaFlag, FaGlobe } from "react-icons/fa";
import { Navlink } from "react-router-dom";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="logo">
          <img src="/logo_desktop.png" alt="Logo" />
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Viaggi</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new_trip" className="nav-link">Aggiungi un nuovo viaggio</NavLink>
            </li>
          </ul>
        </nav>

        {/* Icone e Pulsante */}
        <div className="header-icons">
          <FaMoon className="icon" />
          <FaFlag className="icon" />
          <FaGlobe className="icon" />
          <button className="btn btn-primary">Accedi</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
