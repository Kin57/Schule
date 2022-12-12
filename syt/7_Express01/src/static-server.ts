// EXPRESS Modul installieren
import express from "express";
const app = express();


// SERVER konfigurieren
const port = 3000;

// GET ROUTE definieren
// Horcht auf http://localhost:3000/secret
app.get('/secret', (_req, res, _next) => {
    let answer = {
        'user_counter': counter_user
    }
    res.send(answer);
    //document.getElementById("main")?.innerHTML += `<p>${answer}</p>`;
})


// LOGGER
let counter_user = 0;
app.use((req, _res, next) => {
    //console.log(req.url);

    if (req.url === '/' || req.url.includes('.html')) {
        counter_user++;
        console.log('Seitenaufrufe' + counter_user)
    }

    //res.send('lmao get hacked');

    next();
})


//
app.use(express.static(__dirname + '/../public'));


// SERVER STARTEN
app.listen(port, () => {
    console.log("**********Server gestartet*************");
    console.log("Erreichbar unter htttp://localhost:" + port)
})