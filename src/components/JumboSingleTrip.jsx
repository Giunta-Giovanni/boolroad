// Import fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import icona search
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../style/JumboSingleTrip.css';



export default function JumboSingleTrip(props) {

    const { id, tripProp } = props;


    const singolTrip = tripProp[`${id - 1}`]

    console.log("questo è il singolo trip", singolTrip)

    const jumboimage = singolTrip.jumbo_image
    return (
        <>
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
