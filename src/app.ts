// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import config from "./config/index";

const server = express();

// configure middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// configure routes
import formularRouter from "./routes/formular.route";
server.use("/api/formula", formularRouter);

server.listen(config.PORT || 5000, () => {
  console.log(`Example app listening on port ${config.PORT}!`);
});
