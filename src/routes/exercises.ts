import express from "express";

const router = express.Router();

import * as exercisesController from "../controllers/exercises";

router.get("/", exercisesController.getAllExercises);

router.get("/:id", exercisesController.getExerciseById);

router.post("/", exercisesController.createExercise);

router.put("/:id", exercisesController.updateExercise);

router.delete("/:id", exercisesController.deleteExercise);

//router.post("/", userController.addFriend);

module.exports = router;
