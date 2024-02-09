import express from "express";

const router = express.Router();

import * as exercisesController from "../controllers/exercises";

router.get("/exercises", exercisesController.getAllExercises);

router.get("/exercises/:id", exercisesController.getExerciseById);

router.post("/exercises", exercisesController.createExercise);

router.put("/exercises/:id", exercisesController.updateExercise);

router.delete("/exercises/:id", exercisesController.deleteExercise);

//router.post("/", userController.addFriend);

module.exports = router;
