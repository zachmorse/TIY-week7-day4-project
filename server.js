const express = require("express");
const mongoose = require("mongoose");
const mustacheExpress = require("mustache-express");
const app = express();
const bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");
const Car = require("./models/Car");
const port = process.env.PORT || 9000;
const dbURL = "mongodb://localhost:27017/classicCars";
const router = require("./routing/routes.js");

// --- View Engine:

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");
app.use(express.static("views"));

// --- middleware:

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// --- routing section

app.use("/", router);

// --- listener section

app.listen(port, () => {
  console.log(`Server is connected at port ${port}.`);
});
