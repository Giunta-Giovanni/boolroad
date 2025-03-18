export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image, abstrct } = tripProp;
    return (
        <div className="card">
            <h1>Viaggi in corso </h1>
        </div>
    )
}