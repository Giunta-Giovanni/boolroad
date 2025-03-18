import { Link } from "react-router-dom"
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import ContactCard from '../components/ContactCard';

export default function SingleTripPage() {

    const { tripList, contactList } = useContext(GlobalContext);
    console.log('sono su singletrippage', tripList, contactList);

    return (
        <>
            <h1>questa è la pagina singolo trip</h1>
            <div id="accordion">
                {contactList.map(contact => <ContactCard key = {contact.id} contactProp = {contact}/>)}
            </div>
        </>
    )
}