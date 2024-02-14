import express from "express";

const router = express.Router();

import * as achievementsController from "../controllers/achievements";

router.get("/", achievementsController.getAllUsers);

router.get("/:id", achievementsController.getUserById);

router.post("/", achievementsController.createUser);

router.put("/:id", achievementsController.updateUser);

router.delete("/:id", achievementsController.deleteUser);

module.exports = router;