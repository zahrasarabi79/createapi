"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import express, { Request, Response } from "express";
const bodyParser = __importStar(require("body-parser"));
const server_1 = __importDefault(require("./DB/server"));
const insertdata_1 = __importDefault(require("./DB/insertdata"));
// Initialize the express engine
const api = express();
const port = 3000;
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.get("/get", (req, res) => {
    console.log(req.query);
    res.send(`hello ${req.query.firstname} ${req.query.lastname} `);
    console.log(res);
});
api.post("/", (req, res) => {
    const people = {
        firstname: req.body.name,
        lastname: req.body.lastname,
    };
    insertdata_1.default.insertData(people);
    res.send(`hiii ${people.firstname} ${people.lastname}`);
});
api.listen(port, () => {
    console.log(`api up and running on port ${port}`);
    server_1.default.creatTable();
});
