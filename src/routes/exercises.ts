import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as exercisesController from "../controllers/exercises";

router.get("/", verify, auth(["user", "admin", "verified"]), exercisesController.getAllExercises);

router.get("/:id", verify, auth(["user", "admin", "verified"]), exercisesController.getExerciseById);

router.post("/", verify, auth(["admin"]), exercisesController.createExercise);

router.put("/:id", verify, auth(["admin"]), exercisesController.updateExercise);

router.delete("/:id", verify, auth(["admin"]), exercisesController.deleteExercise);

//router.post("/", userController.addFriend);

module.exports = router;
