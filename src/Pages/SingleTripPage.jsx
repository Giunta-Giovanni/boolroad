import { Link, useParams } from "react-router-dom"
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import ContactCard from '../components/ContactCard';
// importo il componente JumboSingleTrip.jsx
import JumboSingleTrip from "../components/JumboSingleTrip";
// useMemo è un hook che memorizza il risultato della funzione passata come primo argomento e lo restituisce solo se gli argomenti passati al secondo argomento cambiano
import { useState, useMemo } from 'react';

// SingleTripPage.jsx
export default function SingleTripPage() {
    // mi salvo l'id dalla pagina
    const { id } = useParams()

    // mi salvo il valore del trip
    const idTrip = Number(id)

    // import del contenuto globale 
    const { tripList, contactList } = useContext(GlobalContext);

    // filtriamo la lista contatti per viaggio prima eseguire il filtro ricerca
    const filterContactPerTrip = contactList.filter(contact => contact.idViaggio === idTrip);

    console.log('questa è la lista dei contatti filtrati', filterContactPerTrip)

    // inizializzo lo stato per la ricerca e lo passo come props al JumboSingleTrip
    const [userSearch, setUserSearch] = useState('')

    // filtro i contatti in base al input inserito dall'utente, verifico che il nome del contatto includa la stringa inserita dall'utente
    const filteredContacts = useMemo(() => {
        return filterContactPerTrip.filter(contact =>
            // verifico che il nome e cognome del contatto includa la stringa inserita dall'utente
            (contact.nome + ' ' + contact.cognome).toLowerCase().includes(userSearch.toLowerCase()) ||
            // verifico che l'email del contatto includa la stringa inserita dall'utente
            contact.email.toLowerCase().includes(userSearch.toLowerCase()) ||
            // verifico che il telefono del contatto includa la stringa inserita dall'utente
            ('+39 ' + contact.telefono).toLowerCase().includes(userSearch.toLowerCase()) ||
            // verifico che il codice fiscale del contatto includa la stringa inserita dall'utente
            contact.codiceFiscale.toUpperCase().includes(userSearch.toUpperCase())
        );
    }, [userSearch, contactList]);



    return (
        <>
            <JumboSingleTrip id={id} tripProp={tripList} userSearch={userSearch} setUserSearch={setUserSearch} />
            <section className="travel-list-section">
                <h1 id="travel-list">Lista viaggiatori</h1>
                <div id="accordion">
                    {filteredContacts.map(contact => <ContactCard key={contact.id} contactProp={contact} />)}
                </div>
            </section>

        </>
    )
}