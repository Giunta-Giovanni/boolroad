// import della card contentente i dettagli del viaggio in corso
import TripCard from "./TripCard"


// TripsList.jsx
export default function TripsList(props) {

    const { filteredTrip } = props


    return (
        <>
            {/* titolo */}
            <h1 className="fw-bolder text-center">Viaggi in corso </h1>

            {/* sezione delle card nella home */}
            <div className="row justify-content-center gap-5 mt-5 card-home">
                {filteredTrip.map(trip => <TripCard key={trip.id} tripProp={trip} />)}
            </div >

        </>
    )
}