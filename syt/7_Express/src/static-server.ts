import express from "express";
const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log("**********Server gestartet*************");
    console.log("Erreichbar unter htttp://localhost:"+port)
})