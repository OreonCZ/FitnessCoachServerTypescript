import express from "express";

const router = express.Router();

import * as mealsController from "../controllers/meals";

router.get("/", mealsController.getAllUsers);

router.get("/:id", mealsController.getUserById);

router.post("/", mealsController.createUser);

router.put("/:id", mealsController.updateUser);

router.delete("/:id", mealsController.deleteUser);

module.exports = router;