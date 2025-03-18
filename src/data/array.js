// array destinazioni
const destinazioni = [
    {
        id: 1,
        nome: "Tokyo, Giappone",
        partenza: "2025-07-10",
        ritorno: "2025-07-20",
        abstract: "Scopri la fusione tra tradizione e modernità nella vibrante capitale del Giappone, tra templi, grattacieli e sushi incredibile.",
        image: "https://example.com/images/tokyo.jpg"
    },
    {
        id: 2,
        nome: "New York, USA",
        partenza: "2025-05-15",
        ritorno: "2025-05-25",
        abstract: "La città che non dorme mai ti aspetta con i suoi grattacieli iconici, Broadway, Central Park e una cultura cosmopolita unica.",
        image: "https://example.com/images/newyork.jpg"
    },
    {
        id: 3,
        nome: "Santorini, Grecia",
        partenza: "2025-06-05",
        ritorno: "2025-06-15",
        abstract: "Goditi i tramonti mozzafiato e le tipiche case bianche con cupole blu in questa meravigliosa isola delle Cicladi.",
        image: "https://example.com/images/santorini.jpg"
    },
    {
        id: 4,
        nome: "Dubai, Emirati Arabi Uniti",
        partenza: "2025-09-01",
        ritorno: "2025-09-10",
        abstract: "Vivi il lusso e la modernità di Dubai tra grattacieli incredibili, deserti dorati e shopping esclusivo.",
        image: "https://example.com/images/dubai.jpg"
    },
    {
        id: 5,
        nome: "Maldive, Oceano Indiano",
        partenza: "2025-12-10",
        ritorno: "2025-12-20",
        abstract: "Rilassati su spiagge paradisiache, esplora la barriera corallina e goditi un soggiorno in un bungalow sull’acqua.",
        image: "https://example.com/images/maldive.jpg"
    },
    {
        id: 6,
        nome: "Machu Picchu, Perù",
        partenza: "2025-08-20",
        ritorno: "2025-08-30",
        abstract: "Esplora una delle meraviglie del mondo e immergiti nella storia degli Inca tra paesaggi mozzafiato sulle Ande.",
        image: "https://example.com/images/machupicchu.jpg"
    },
    {
        id: 7,
        nome: "Reykjavik, Islanda",
        partenza: "2025-10-15",
        ritorno: "2025-10-25",
        abstract: "Ammira l’aurora boreale, esplora geyser e lagune termali e scopri la natura incontaminata dell’Islanda.",
        image: "https://example.com/images/reykjavik.jpg"
    },
    {
        id: 8,
        nome: "Città del Capo, Sudafrica",
        partenza: "2025-11-05",
        ritorno: "2025-11-15",
        abstract: "Un mix perfetto tra spiagge, montagne e cultura, con la possibilità di visitare la celebre Table Mountain e il Capo di Buona Speranza.",
        image: "https://example.com/images/capetown.jpg"
    },
    {
        id: 9,
        nome: "Bora Bora, Polinesia Francese",
        partenza: "2025-04-10",
        ritorno: "2025-04-20",
        abstract: "Un paradiso tropicale con lagune cristalline, resort di lusso e una natura spettacolare da esplorare.",
        image: "https://example.com/images/borabora.jpg"
    },
    {
        id: 10,
        nome: "Roma, Italia",
        partenza: "2025-03-20",
        ritorno: "2025-03-30",
        abstract: "Passeggia tra le meraviglie dell’Antica Roma, gusta piatti tradizionali e scopri il fascino della Città Eterna.",
        image: "https://example.com/images/roma.jpg"
    }
];

// array contatti
const contatti = [
    {
        id: 1,
        nome: "Luca",
        cognome: "Rossi",
        email: "luca.rossi@example.com",
        codiceFiscale: "RSSLCU85M01H501Z",
        telefono: "+39 333 1234567",
        idViaggio: 1,
        image: "https://example.com/images/luca_rossi.jpg"
    },
    {
        id: 2,
        nome: "Giulia",
        cognome: "Bianchi",
        email: "giulia.bianchi@example.com",
        codiceFiscale: "BNCGLI92T41A001X",
        telefono: "+39 345 9876543",
        idViaggio: 2,
        image: "https://example.com/images/giulia_bianchi.jpg"
    },
    {
        id: 3,
        nome: "Marco",
        cognome: "Verdi",
        email: "marco.verdi@example.com",
        codiceFiscale: "VRDMRC78C10F205Y",
        telefono: "+39 320 6543210",
        idViaggio: 3,
        image: "https://example.com/images/marco_verdi.jpg"
    },
    {
        id: 4,
        nome: "Elena",
        cognome: "Russo",
        email: "elena.russo@example.com",
        codiceFiscale: "RSSLNE81P20Z404V",
        telefono: "+39 351 1239876",
        idViaggio: 4,
        image: "https://example.com/images/elena_russo.jpg"
    },
    {
        id: 5,
        nome: "Matteo",
        cognome: "Ferrari",
        email: "matteo.ferrari@example.com",
        codiceFiscale: "FRRMTT90S21H501K",
        telefono: "+39 366 7894561",
        idViaggio: 5,
        image: "https://example.com/images/matteo_ferrari.jpg"
    },
    {
        id: 6,
        nome: "Chiara",
        cognome: "Moretti",
        email: "chiara.moretti@example.com",
        codiceFiscale: "MRTCHR95L31F839J",
        telefono: "+39 347 8529631",
        idViaggio: 6,
        image: "https://example.com/images/chiara_moretti.jpg"
    },
    {
        id: 7,
        nome: "Francesco",
        cognome: "Conti",
        email: "francesco.conti@example.com",
        codiceFiscale: "CNTFNC85R10H703U",
        telefono: "+39 328 6547892",
        idViaggio: 7,
        image: "https://example.com/images/francesco_conti.jpg"
    },
    {
        id: 8,
        nome: "Serena",
        cognome: "Galli",
        email: "serena.galli@example.com",
        codiceFiscale: "GLLSRN88D20B101T",
        telefono: "+39 389 9632587",
        idViaggio: 8,
        image: "https://example.com/images/serena_galli.jpg"
    },
    {
        id: 9,
        nome: "Alessandro",
        cognome: "Rinaldi",
        email: "alessandro.rinaldi@example.com",
        codiceFiscale: "RNLALS82T50L500P",
        telefono: "+39 333 7418529",
        idViaggio: 9,
        image: "https://example.com/images/alessandro_rinaldi.jpg"
    },
    {
        id: 10,
        nome: "Valentina",
        cognome: "De Luca",
        email: "valentina.deluca@example.com",
        codiceFiscale: "DLCVLN89A01H501D",
        telefono: "+39 392 1472583",
        idViaggio: 10,
        image: "https://example.com/images/valentina_deluca.jpg"
    }
];
