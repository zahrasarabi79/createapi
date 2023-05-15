import express, { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";

// Initialize the express engine
const api: express.Application = express();
const port: number = 3000;
interface people {
  firstname: string;
  lastname: string;
}
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.get("/get", (req: Request, res: Response) => {
  console.log(req.query);
  res.send(`hello ${req.query.firstname} ${req.query.lastname} `);
});
api.post("/", (req: Request, res: Response) => {
  const people: people = {
    firstname: req.body.name,
    lastname: req.body.lastname,
  };

  res.send(`hiii ${people.firstname} ${people.lastname}`);
});
api.listen(port, () => {
  console.log(`api up and running on port ${port}`);
});
