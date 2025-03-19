// Import dello style della pagina 
import '../style/homePageStyle.css';
import { useState, useMemo, useContext } from 'react';
import GlobalContext from "../contexts/GlobalContext"

// Import del componente TripsList
import TripsList from '../components/TripsList';
import Jumbotron from '../components/Jumbotron';



export default function HomePage() {
    // Destruirizzo il valore tripList dal GlobalContext
    const { tripList } = useContext(GlobalContext)

    // inizializzo lo stato per la ricerca e lo passo come props al Jumbotron
    const [tripSearch, setTripSearch] = useState('')

    // filtro i contatti in base al input inserito dall'utente, verifico che il nome del contatto includa la stringa inserita dall'utente
    const filteredTrip = useMemo(() => {
        return tripList.filter(trip =>
            // verifico che il nome e cognome del contatto includa la stringa inserita dall'utente
            trip.nome.toLowerCase().includes(tripSearch.toLowerCase()) ||
            trip.dataPartenza.includes(tripSearch) ||
            trip.dataRitorno.includes(tripSearch)
        );
    }, [tripSearch, tripList]);

    return (
        <>
            <Jumbotron tripSearch={tripSearch} setTripSearch={setTripSearch} />
            <section className='container mt-5 mb-5'>
                <TripsList filteredTrip={filteredTrip} />
            </section>
        </>
    )
}