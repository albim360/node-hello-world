const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const port = +process.env.PORT || 3000;
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1> ${process.env.TEXT} </h1>');
    res.end(` <h1> ${process.env.TEXT} </h1>`);


});

server.listen(port, function() {
    console.log("Server is running on http://localhost:" + port)
}); 
