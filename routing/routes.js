const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

router.get("/", (req, res) => {
  Car.find().then(foundCars => {
    res.send(foundCars);
  });
});

router.post("/addentry", (req, res) => {
  var carData = req.body;
  let newCarEntry = new Car(carData);
  newCarEntry
    .save()
    .then(savedCar => {
      res.send(savedCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
