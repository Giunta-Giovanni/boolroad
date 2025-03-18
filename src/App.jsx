// importiamo i router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importiamo le pagine
import HomePage from "./Pages/Homepage"
import NewTripPage from "./Pages/NewTripPage"
import SingleTripPage from "./Pages/SingleTripPage"
import NotFoundPage from "./Pages/NotFoundPage"

// importiamo il layout
import DefaultLayout from "./Layouts/DefaultLayout"

// import del contenuto globale
import GlobalContext from "./contexts/GlobalContext"

// import dei dati fittizi per i viaggi
import { trips, contacts } from "./data/array"

// import del useState
import { useState } from "react"

export default function App() {

  const [tripList, setTripList] = useState(trips);
  const [contactList, setContactList] = useState(contacts);

  return (
    <GlobalContext.Provider value={{ tripList, contactList }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/trip_page/:id" element={<SingleTripPage />} />
            <Route path="/New_trip" element={<NewTripPage />} />

            {/* Rotta Not Found in caso di errato patch */}
            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  )
}