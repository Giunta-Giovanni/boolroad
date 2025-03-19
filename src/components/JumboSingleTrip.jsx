// Import fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import icona search
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// importiamo lo stile
import '../style/JumboSingleTrip.css';



export default function JumboSingleTrip(props) {

    // destrutturiamoci le props
    const { id, tripProp } = props;

    // troviamoci l'id del trip
    const singolTrip = tripProp[`${id - 1}`]

    console.log("questo è il singolo trip", singolTrip)

    // ricaviamoci l'immagine
    const jumboimage = singolTrip.jumbo_image
    return (
        <>
            {/* immagine di background e barra di ricerca */}
            <section
                className='jumbotron-single-trip'
                style={{ backgroundImage: `url(${jumboimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div>
                    <form action="#">
                        <input type="text" placeholder={'Cerca per Nome'} />
                        <button>{<FontAwesomeIcon icon={faSearch} />}</button>
                    </form>
                </div>
            </section>
        </>
    );
}
