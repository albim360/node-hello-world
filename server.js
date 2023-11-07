// Importo il modulo HTTP per creare un server
const http = require("http");

// Integro e configuro dotenv
const dotenv = require("dotenv");
dotenv.config();

// Definisco la porta presente nell'env, o la porta 3000
const port = +process.env.PORT || 3000;

// Creo la costante per la visualizzazione del server
const server = http.createServer(function (req, res) {
    // Lo definisco come contenuto HTML
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    // Definisco le frasi random presenti nel .env come json
    const frasiRandom = JSON.parse(process.env.RANDOMTEXT);
    console.log(frasiRandom);
    // Prendo l'index delle frasi random
    const randomIndex = Math.floor(Math.random() * frasiRandom.length);

    // Seleziono una frase casuale dall'array
    const randomText = frasiRandom[randomIndex];
    // Stampo in pagina la frase casuale
    res.end(`<h1>Frase Motivazionale</h1> <br> <h2>${randomText}</h2>`);


});
// Starto il server
server.listen(port, function() {
    // Faccio sì che nel terminale esca direttamente il link clickabile per aprire il sito 
    console.log("Server is running on http://localhost:" + port)
});
