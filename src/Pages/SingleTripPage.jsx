import { Link, useParams } from "react-router-dom"
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import ContactCard from '../components/ContactCard';
import JumboSingleTrip from "../components/JumboSingleTrip";



export default function SingleTripPage() {
    const { id } = useParams()

    const { tripList, contactList } = useContext(GlobalContext);
    console.log('sono su singletrippage', tripList, contactList);

    return (
        <>
            <div className="single-jumbo">
                <JumboSingleTrip id={id} tripProp={tripList} />
            </div>
            <h1>questa è la pagina singolo trip</h1>
            <div id="accordion">
                {contactList.map(contact => <ContactCard key={contact.id} contactProp={contact} />)}
            </div>
        </>
    )
}