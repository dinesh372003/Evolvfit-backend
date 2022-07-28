const express = require('express');
const router = express.Router();

const Controller = require("../Controllers/addController");

router.post("/fooditems", Controller.addFoodItem);
router.post("/meal", Controller.addMeal);

module.exports = router;