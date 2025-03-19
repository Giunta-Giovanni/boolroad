import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faUser, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../style/ContactCard.css"

export default function ContactCard({ contactProp }) {
    const { nome, cognome, email, codiceFiscale, telefono } = contactProp;
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="contact-card">
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="card-title">
                    <FontAwesomeIcon icon={faUser} className="user" />
                    <h5>{nome} {cognome}</h5>
                </div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>

            {isOpen && (
                <div className="card-body">
                    <p><strong>Telefono:</strong> {telefono}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Codice Fiscale:</strong> {codiceFiscale}</p>
                </div>
            )}
        </div>

    );
}