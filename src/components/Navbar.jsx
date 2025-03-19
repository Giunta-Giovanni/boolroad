import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (

        <nav className="nav-section">
            {/* parte del burgher menu che collapsa */}
            {/* rendiamolo visibile solo su schermi small e tablet */}
            <section className="d-block d-md-none navbar navbar-dark ">
                <div className="container-fluid">
                    {/* Bottone hamburger */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Menu collapse */}
                <div className="collapse" id="navbarToggleExternalContent">
                    <ul className="fw-bolder">
                        <li className="nav-item py-3">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink to="/" className="nav-link">Viaggi</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink to="/new_trip" className="nav-link text-center">Aggiungi un nuovo viaggio</NavLink>
                        </li>
                    </ul>
                </div>
            </section>

            {/* contenuto del menu esteso da vedere su schermi medio grandi */}
            <section className="navbar d-none d-md-block">
                <ul className="nav fw-bolder d-flex flex-nowrap">
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
            </section>
        </nav>
    )
}