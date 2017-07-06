const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

router.get("/", (req, res) => {
  Car.find().then(foundCars => {
    res.send(foundCars);
  });
});

router.post("/addcar", (req, res) => {
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

router.put("/updatecar/:id", (req, res) => {
  Car.updateOne({ _id: req.params.id }, req.body)
    .then(updatedCar => {
      res.send(updatedCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete("/deletecar/:id", (req, res) => {
  Car.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send(`entry #${req.params.id} deleted from database`);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
