// Importo lo style del header
import "../style/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMoon, FaFlag, FaGlobe } from "react-icons/fa";

// importo i componenti
import Logo from "./logo";
import Navbar from "./Navbar";

export default function HeaderTest() {

  return (
    <header className="custom-header">
      <div className="container d-flex align-items-center justify-content-between" id="container-nav">
        {/* Logo */}
        <Logo />

        {/* Navbar */}
        <Navbar />

        {/* parte destra con feature aggiuntive */}
        <div className="header-icons">
          {/* modalità notte */}
          <FaMoon className="icon" />
          {/* lingua */}
          <FaFlag className="icon" />
          {/* parte del mondo */}
          <FaGlobe className="icon" />
          {/* parte di login */}
          <button className="btn btn-primary">Accedi</button>
        </div>
      </div >





    </header >
  )

}

