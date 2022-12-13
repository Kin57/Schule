"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/secret', (_req, res, _next) => {
    let answer = {
        'user_counter': counter_user
    };
    res.send(answer);
});
let counter_user = 0;
app.use((req, _res, next) => {
    if (req.url === '/' || req.url.includes('.html')) {
        counter_user++;
        console.log('Seitenaufrufe' + counter_user);
    }
    next();
});
app.use(express_1.default.static(__dirname + '/../public'));
app.listen(port, () => {
    console.log("**********Server gestartet*************");
    console.log("Erreichbar unter htttp://localhost:" + port);
});
