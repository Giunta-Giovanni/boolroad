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

            <h1>Viaggi in corso </h1>
            <div className="row d-flex justify-content-center gap-3 mt-5">
                {tripList.map(trip => <TripCard key={trip.id} tripProp={trip} />)}
            </div >

        </>
    )
}