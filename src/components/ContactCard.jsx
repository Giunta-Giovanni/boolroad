import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faUser, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../style/ContactCard.css"

export default function ContactCard({ contactProp }) {
    const { nome, cognome, email, codiceFiscale, telefono } = contactProp;
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="card">
            <div className="singleCard">
                <div className="card-header d-flex">
                    <h5 className="mb-0">
                        <span>{nome} {cognome}</span>
                    </h5>
                    <button
                        className="btn btn-link"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                    </button>
                </div>



                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    {isOpen && (
                        <div className="card-body">
                            <p>Telefono: {telefono}</p>
                            <p>Email: {email}</p>
                            <p>Codice Fiscale: {codiceFiscale}</p>
                        </div>
                    )}
                </div>

            </div >
        </div>

    );
}