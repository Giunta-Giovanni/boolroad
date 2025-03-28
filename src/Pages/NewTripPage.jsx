import '../style/NewTrip.css';
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';


// mettiamo l'oggetto vuoto all'interno di una variabile
const initialFormData = {
    //aggiungiamo tutte le proprietà che vogliamo mappare e assegniamo loro un valore iniziale.
    nome: '',
    dataPartenza: "",
    dataRitorno: "",
    abstract: "",
    image: "",
    jumbo_image: ""
}


export default function NewTripPage() {

    const { tripList, setTripList } = useContext(GlobalContext)

    // creiamo una variabile di stato che conterrà il nostro array di oggetti
    const [formData, setFormData] = useState(initialFormData);

    // Creiamo una funzione unica per gestire l'evento onChange dei nostri campi.
    function setFieldValue(e) {
        const { value, name, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "image" || name === "jumbo_image" ? URL.createObjectURL(files[0]) : value
        }));
    }

    const previewImage = formData.image ? (formData.image) : null;
    const previewJumbo = formData.jumbo_image ? (formData.jumbo_image) : null;


    // Creiamo una funzione unica per gestire l'invio del form.
    const handleSubmitForm = (e) => {
        e.preventDefault()

        // inseriamo l'oggetto creato all'interno del nostro array
        // diciamo a setArticols di prenderci il nostro array corrente
        setTripList(currenttrip =>
            // copia l'array corrente 
            [...currenttrip,
            {
                // aggiungi id in ordine crescente con condizione se vuota parti da 1 
                id: currenttrip.length === 0 ?
                    1 : currenttrip[currenttrip.length - 1].id + 1,
                // aggiungi il form inserito dall'utente
                ...formData
            }
            ]);
        // resetta il form utilizzando il preset di initialFormData
        setFormData(initialFormData)
    }

    useEffect(() => {
        console.log('questo è il mio form data', formData);
        console.log('questo è il mio trip', tripList);
    }, [tripList]); // Eseguito solo quando trip cambia

    return (
        <>

            <div className="container">
                <header>
                    <h1>Inserisci un nuovo viaggio</h1>
                </header>

                <section className='add-trip-sections'>
                    {/* form */}
                    <form onSubmit={handleSubmitForm}>
                        <div className='row'>
                            <div className="col-6 mb-3">

                                {/* Location */}
                                <label htmlFor="input-location" className="form-label">Destinazione</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={setFieldValue}
                                    className="form-control"
                                    id="input-location"
                                    placeholder="Inserisci la destinazione"
                                />
                            </div>
                            <div className="col mb-3">

                                {/* Departure */}
                                <label htmlFor="input-departure" className="form-label">Data di partenza</label>
                                <input
                                    type="date"
                                    name="dataPartenza"
                                    value={formData.dataPartenza}
                                    onChange={setFieldValue}
                                    className="form-control"
                                    id="input-departure"
                                    placeholder="Data di partenza"
                                />
                            </div>

                            <div className="col mb-3">
                                {/* Return */}
                                <label htmlFor="input-return" className="form-label">Data di arrivo</label>
                                <input
                                    type="date"
                                    name="dataRitorno"
                                    value={formData.dataRitorno}
                                    onChange={setFieldValue}
                                    className="form-control"
                                    id="input-return"
                                    placeholder="Data di ritorno"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mb-3">
                                {/* Abstract */}
                                <label htmlFor="abstract" className="form-label">Descrizione del viaggio</label>
                                <textarea
                                    name="abstract"
                                    value={formData.abstract}
                                    onChange={setFieldValue}
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
                                    onChange={setFieldValue}
                                />
                                {previewImage && (
                                    <img
                                        src={previewImage}
                                        className='preview_image'
                                        alt='preview'
                                    />
                                )}
                            </div>
                            <div className="mb-3 col">
                                <div>
                                    <label htmlFor="jumbo_image" className="form-label">Carica l'immagine di background</label>
                                </div>
                                <input
                                    type="file"
                                    id="jumbo_image"
                                    name="jumbo_image"
                                    onChange={setFieldValue}
                                />
                                {previewJumbo && (
                                    <img
                                        src={previewJumbo}
                                        className='preview_jumbo'
                                        alt='preview'
                                    />
                                )}
                            </div>
                        </section>

                        <div className="d-flex justify-content-end pb-3">
                            <Link to='/'>
                                <button type="button" className="btn btn-secondary mx-3">Indietro</button>
                            </Link>

                            <button type="submit" className="btn btn-primary">Aggiungi</button>
                        </div>
                    </form>
                </section>
            </div>


        </>
    )
}













