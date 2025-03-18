import { Link } from "react-router-dom";

import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'; // import icon aereo di partenza
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons"; // import icon aereo di arrivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TripCard.jsx
export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image } = tripProp;
    return (
        <div className="card-hover col-12 col-sm-12 col-md-4 col-lg-3" style={{ width: "18rem" }}>
            <span></span>
            <Link to={`trip_page/${id}`}><img src={image} className="card-img-top rounded-4" alt={nome} style={{ width: "100%", height: "250px" }} /></Link>
            <Link to={`trip_page/${id}`} className="text-decoration-none text-dark">
                <div className="card-body p-2">
                    <h5 className="card-title fw-bolder mt-1">{nome}</h5>
                    <span><FontAwesomeIcon icon={faPlaneDeparture} className="text-primary" /> {dataPartenza}</span><br />
                    <span><FontAwesomeIcon icon={faPlaneArrival} className="text-success" /> {dataRitorno}</span>
                </div>
            </Link>
        </div>
    )
}