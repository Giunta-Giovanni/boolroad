import { Link } from "react-router-dom";

import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'; // import icon aereo di partenza
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons"; // import icon aereo di arrivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// TripCard.jsx
export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image } = tripProp;
    return (

        // card del viaggio
        <div className="card  col-sm-12 col-md-6 col-lg-3">
            {/* link al single trip */}
            <Link to={`trip_page/${id}`} className="text-decoration-none">
                {/* box immagine */}
                <div className="card-image">
                    <img src={image} className="card-img-top rounded-4" alt={`Image for trip to ${nome}`} />
                </div>
                {/* parte di testo della card */}
                <div className="card-body p-3">
                    {/* destinazione */}
                    <h5 className="card-title fw-bolder mt-2 text-center">{nome}</h5>
                    {/* data di partenza e di ritorno */}
                    <div className="d-flex justify-content-between mt-3">
                        {/* partenza */}
                        <span className="date ">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="text-primary me-2" /> {dataPartenza}
                        </span>
                        {/* ritorno */}
                        <span className=" date ">
                            <FontAwesomeIcon icon={faPlaneArrival} className="text-success me-2" /> {dataRitorno}
                        </span>
                    </div>
                </div>
            </Link>

        </div >


    )
}