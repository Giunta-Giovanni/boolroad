// Import dello style del jumbotron
import '../style/jumbotronStyle.css';

// Import fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import icona search
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Import del componente TripsList
import TripsList from '../components/TripsList';

export default function HomePage() {
    return (
        <>
            {/* <h1>questa è la home</h1> */}
            <section className='jumbotron'>
                <div>
                    <form action="#">
                        <input type="text" placeholder='Cerca un viaggio!' />
                        <button>{<FontAwesomeIcon icon={faSearch} />}</button>
                    </form>
                </div>
            </section>
            <section className='container'>
                <TripsList />
            </section>
        </>
    )
}