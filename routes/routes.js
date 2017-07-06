const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Car.find().then(foundCars => {
    res.send(foundCars);
  });
});

module.exports = router;
