const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");

const route = require("./routes");

const initializeMongo = require("./config/database/mongodb");

dotenv.config();

const app = express();

initializeMongo();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use("/api/", route);

module.exports = app;
