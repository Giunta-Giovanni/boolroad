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
    const { id } = useParams()

    // import del contenuto globale 
    const { tripList, contactList } = useContext(GlobalContext);
    // console.log('sono su singletrippage', tripList, contactList);

    // inizializzo lo stato per la ricerca e lo passo come props al JumboSingleTrip
    const [userSearch, setUserSearch] = useState('')

    // filtro i contatti in base al input inserito dall'utente, verifico che il nome del contatto includa la stringa inserita dall'utente
    const filteredContacts = useMemo(() => {
        return contactList.filter(contact =>
            // contact.nome.toLowerCase().includes(userSearch.toLowerCase()) ||
            // contact.cognome.toLowerCase().includes(userSearch.toLowerCase()) ||
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
    // setFilter(filteredContacts)
    console.log('questo è il filtro', filteredContacts);

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