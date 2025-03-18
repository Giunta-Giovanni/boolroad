import { Link } from "react-router-dom";

import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'; // import icon aereo di partenza
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons"; // import icon aereo di arrivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// TripCard.jsx
export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image } = tripProp;
    return (

        <Link to={`trip_page/${id}`} className="text-decoration-none">
            <div className="card">
                <div className="card-image">
                    <img src={image} className="card-img-top rounded-4" alt={`Image for trip to ${nome}`} />
                </div>
                <div className="card-body p-3">
                    <h5 className="card-title fw-bolder mt-2 text-center">{nome}</h5>
                    <div className="d-flex justify-content-between mt-3">
                        <span className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="text-primary me-2" /> {dataPartenza}
                        </span>
                        <span className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPlaneArrival} className="text-success me-2" /> {dataRitorno}
                        </span>
                    </div>
                </div>
            </div>
        </Link>


    )
}