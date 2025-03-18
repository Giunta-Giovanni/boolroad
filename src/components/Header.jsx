import React from "react";

// Importo lo style del header
import "../style/header.css";


import "bootstrap/dist/css/bootstrap.min.css";
import { FaMoon, FaFlag, FaGlobe, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Importo useState
import { useState } from "react";





const Header = () => {

  // Stato per controllare la visibilità del menu
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
      <header className="custom-header">
        <div className="container d-flex align-items-center justify-content-between" id="container-nav">
          {/* Logo */}
          <div className="logo">
            <img src="/logo_desktop.png" alt="Logo" />
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="nav fw-bolder d-flex  flex-nowrap">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Viaggi</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new_trip" className="nav-link text-center">Aggiungi un nuovo viaggio</NavLink>
              </li>
            </ul>
          </nav>

          {/* Navbar mobile */}

          <nav className={`d-none  ${!menuOpen ? "open" : "menu"}`} id="menu-mobile">
            <ul className="nav fw-bolder d-flex  flex-nowrap">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Viaggi</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new_trip" className="nav-link text-center">Aggiungi un nuovo viaggio</NavLink>
              </li>
            </ul>
          </nav>


          {/* Icone e Pulsante */}
          <div className="header-icons">
            <FaMoon className="icon" />
            <FaFlag className="icon" />
            <FaGlobe className="icon" />
            <button className="btn btn-primary">Accedi</button>
            <FaBars className="icon menu" onClick={() => setMenuOpen(!menuOpen)} />

          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
