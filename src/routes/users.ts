import express = require("express");
import { Request, Response, Application } from "express";
import insert from "../DB/insertdata";
import { people } from "../app";

const router = express.Router();


router.get("/get", (req: Request, res: Response) => {
    console.log(req.query);
    res.send(`${req.query.firstname} ${req.query.lastname} `);
    console.log(res);
  });
  
  router.post("/", (req: Request, res: Response) => {
    const people: people = {
      firstname: req.body.name,
      lastname: req.body.lastname,
    };
    
    insert.insertData(people);
    res.send(`${people.firstname} ${people.lastname}`);
    console.log(res);
  });
  module.exports = router;