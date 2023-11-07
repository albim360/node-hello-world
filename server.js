const http = require("http");

const dotenv = require("dotenv");
dotenv.config();


const port = +process.env.PORT || 3000;

// Creo la costante per la visualizzazione del server
const server = http.createServer(function (req, res) {
    // Lo definisco come contenuto HTML
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Definisco le parole random presenti nel .env come json
    const paroleRandom = JSON.parse(process.env.RANDOMTEXT);
    console.log(paroleRandom);
    // Prendo l'index delle parole random
    const randomIndex = Math.floor(Math.random() * paroleRandom.length);

    // Seleziono una parola casuale dall'array
    const randomText = paroleRandom[randomIndex];
    // Stampo in pagina la parola casuale
    res.end(`<h1> Parola random </h1> <br> <h2> ${randomText} </h2>`);


});
// Starto il server
server.listen(port, function() {
    //Faccio sì che nel terminale esca direttamente il link clickabile per aprire il sito 
    console.log("Server is running on http://localhost:" + port)
}); 
