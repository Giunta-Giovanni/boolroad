import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/HomePageStyle.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        </>
    )
}