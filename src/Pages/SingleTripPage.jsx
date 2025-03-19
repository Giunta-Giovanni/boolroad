import { Link, useParams } from "react-router-dom"
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import ContactCard from '../components/ContactCard';
import JumboSingleTrip from "../components/JumboSingleTrip";
import { useState, useMemo } from 'react';


export default function SingleTripPage() {
    const { id } = useParams()
    const { tripList, contactList } = useContext(GlobalContext);
    console.log('sono su singletrippage', tripList, contactList);

    // inizializzo lo stato per la ricerca
    const [userSearch, setUserSearch] = useState('')

    const [filter, setFilter] = useState('')

    // filtro i contatti in base al input inserito dall'utente, verifico che il nome del contatto includa la stringa inserita dall'utente
    const filteredContacts = useMemo(() => {
        return contactList.filter(contact =>
            // contact.nome.toLowerCase().includes(userSearch.toLowerCase()) ||
            // contact.cognome.toLowerCase().includes(userSearch.toLowerCase()) ||
            (contact.nome + ' ' + contact.cognome).toLowerCase().includes(userSearch.toLowerCase()) ||
            contact.email.toLowerCase().includes(userSearch.toLowerCase()) ||
            ('+39 ' + contact.telefono).toLowerCase().includes(userSearch.toLowerCase()) ||
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