import { useState } from "react";

export default function ContactCard({contactProp}){
    const {nome, cognome , email, codiceFiscale, telefono} = contactProp;
    const [isOpen, setIsOpen] = useState (false)


return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <span>{nome} {cognome}</span>
                    <button 
                        className="btn btn-link" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "Nascondi info contatto" : "Mostra info contatto"}
                    </button>
                </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            {isOpen && (
                <div className="card-body">
                      <p>Telefono: {telefono}</p>
                      <p>Email: {email}</p> 
                      <p>Codice Fiscale: {codiceFiscale}</p>         
                </div>)}
            </div>    
        </div>    
    )
}