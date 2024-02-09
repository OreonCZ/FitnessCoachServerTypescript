import express from "express";

const router = express.Router();

import * as mealsController from "../controllers/meals";

router.get("/meals", mealsController.getAllMeals);

router.get("/meals/:id", mealsController.getMealById);

router.post("/meals", mealsController.createMeal);

router.put("/meals/:id", mealsController.updateMeal);

router.delete("/meals/:id", mealsController.deleteMeal);

//router.post("/", userController.addFriend);

module.exports = router;
