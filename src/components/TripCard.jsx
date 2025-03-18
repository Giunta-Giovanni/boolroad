export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image, abstract } = tripProp;
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-3" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top rounded-4" alt={nome} style={{ width: "100%", height: "250px" }} />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <span>Data partenza: {dataPartenza}</span><br />
                <span>Data ritorno: {dataRitorno}</span>
            </div>
        </div>
    )
}