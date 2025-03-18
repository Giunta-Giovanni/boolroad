import '../style/NewTrip.css';

import { Link } from "react-router-dom"



export default function NewTripPage() {
    return (
        <>

            {/* form per aggiungere un nuovo viaggio */}
            <div className="container">
                <header>
                    <h1>Inserisci un nuovo viaggio</h1>
                </header>

                <section className='add-trip-sections'>
                    {/* form */}
                    <form>
                        <div className='row'>
                            <div className="col-6 mb-3">

                                {/* Location */}
                                <label htmlFor="input-location" className="form-label">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    // value={formDataObj.location}
                                    // onChange={setFieldValue}
                                    className="form-control"
                                    id="input-location"
                                    placeholder="Inserisci la destinazione"
                                />
                            </div>
                            <div className="col mb-3">

                                {/* Departure */}
                                <label htmlFor="input-departure" className="form-label">Departure Date</label>
                                <input
                                    type="date"
                                    name="departure"
                                    // value={formDataObj.departure}
                                    // onChange={setFieldValue}
                                    className="form-control"
                                    id="input-departure"
                                    placeholder="Data di partenza"
                                />
                            </div>

                            <div className="col mb-3">
                                {/* Return */}
                                <label htmlFor="input-return" className="form-label">Return Date</label>
                                <input
                                    type="date"
                                    name="return"
                                    // value={formDataObj.return}
                                    // onChange={setFieldValue}
                                    className="form-control"
                                    id="input-return"
                                    placeholder="Data di ritorno"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mb-3">
                                {/* Abstract */}
                                <label htmlFor="abstract" className="form-label">Abstract</label>
                                <textarea
                                    name="abstract"
                                    // value={formDataObj.abstract}
                                    // onChange={setFieldValue}
                                    className="form-control"
                                    id="abstract"
                                    rows="3"
                                    placeholder="Descrizione del viaggio"
                                />
                            </div>
                        </div>

                        {/* Sezione file */}
                        <section className='row'>
                            <div className="mb-3 col">
                                <div>
                                    <label htmlFor="image" className="form-label">Carica l'immagine della località</label>
                                </div>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                // onChange={handleFileChange}
                                />
                                {/* {previewCover && (
                                <img
                                    src={previewCover}
                                    className='preview_cover'
                                    alt='preview'
                                />
                            )} */}
                            </div>
                            <div className="mb-3 col">
                                <div>
                                    <label htmlFor="jumbo_image" className="form-label">Carica l'immagine di background</label>
                                </div>
                                <input
                                    type="file"
                                    id="jumbo_image"
                                    name="jumbo_image"
                                // onChange={handleFileChange}
                                />
                                {/* {previewBg && (
                                <img
                                    src={previewBg}
                                    className='preview_bg'
                                    alt='preview'
                                />
                            )} */}
                            </div>
                        </section>

                        <div className="d-flex justify-content-end pb-3">
                            <Link to='/'>
                                <button type="button" className="btn btn-secondary mx-3">Back</button>
                            </Link>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </section>
            </div>


        </>
    )
}













