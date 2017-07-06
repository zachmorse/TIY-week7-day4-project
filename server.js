const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");
const Car = require("./models/Car");
const port = process.env.PORT || 9000;
const dbURL = "mongodb://localhost:27017/classicCars";
const router = require("./routes/routes.js");

// --- middleware:

app.use(bodyParser.json());

mongoose.connect(dbURL).then((err, db) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to the classicCars DB!");
});

// --- routing:

app.use("/", router);

// --- listener:

app.listen(port, () => {
  console.log(`Server is connected at port ${port}.`);
});
