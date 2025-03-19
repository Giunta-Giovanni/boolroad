// Import dello style del jumbotron
import '../style/jumbotronStyle.css';
// Import fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import icona search
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Jumbotron(props) {

    const { tripSearch, setTripSearch } = props

    // funzione per ricavare i dati dell'input
    function handleChange(e) {
        const value = e.target.value
        setTripSearch(value)
    }

    return (
        <section className='jumbotron'>
            <div>
                <form action="#">
                    <input
                        type="text"
                        placeholder={'Cerca un viaggio!'}
                        value={tripSearch}
                        onChange={handleChange}
                    />
                    {/* <button>{<FontAwesomeIcon icon={faSearch} />}</button> */}
                </form>
            </div>
        </section>
    )
}