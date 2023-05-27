import express = require("express");
const cors = require('cors');
import * as bodyParser from "body-parser";
import DB from "./DB/server";
// Initialize the express engine
const api: express.Application = express();
const usersRoute = require('./routes/users');
const port: number = 3000;

interface people {
  firstname: string;
  lastname: string;
}
// Enable CORS for all routes
api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use('/', usersRoute);

api.listen(port, () => {
  console.log(`api up and running on port ${port}`);
  DB.creatTable();
});

export { people };
