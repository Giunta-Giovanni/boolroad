import React from "react";
import "../style/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMoon, FaFlag, FaGlobe } from "react-icons/fa";

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
              <a className="nav-link" href="HomePage.jsx">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="TripsList.jsx">Viaggi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contacts.jsx">Contatti</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="NewTripPage.jsx">Aggiungi un nuovo viaggio</a>
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
