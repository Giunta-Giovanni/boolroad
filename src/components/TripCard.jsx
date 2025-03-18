export default function TripCard({ tripProp }) {
    // destrutturazione delle props
    const { id, nome, dataPartenza, dataRitorno, image, abstract } = tripProp;
    return (
        <div className="card col-12 col-sm-12 col-md-4 col-lg-3" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <span>Data partenza: {dataPartenza}</span>
                <p className="card-text">
                    {abstract}
                </p>
                <span>Data ritorno: {dataRitorno}</span>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}