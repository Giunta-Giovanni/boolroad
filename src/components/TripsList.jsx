// import della card contentente i dettagli del viaggio in corso
import TripCard from "./TripCard"

import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

// TripsList.jsx
export default function TripsList() {

    // Destruirizzo il valore tripList dal GlobalContext
    const { tripList } = useContext(GlobalContext)

    return (
        <>

            <h1 className="fw-bolder text-center">Viaggi in corso </h1>
            <div className="row d-flex justify-content-center gap-4 mt-5 card-container">
                {tripList.map(trip => <TripCard key={trip.id} tripProp={trip} />)}
            </div >

        </>
    )
}