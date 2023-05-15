"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Initialize the express engine
const api = (0, express_1.default)();
const port = 3000;
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.get("/get", (req, res) => {
    console.log(req.query);
    res.send(`hello ${req.query.firstname} ${req.query.lastname} `);
});
api.post("/", (req, res) => {
    const people = {
        firstname: req.body.name,
        lastname: req.body.lastname,
    };
    res.send(`hiii ${people.firstname} ${people.lastname}`);
});
api.listen(port, () => {
    console.log(`api up and running on port ${port}`);
});
