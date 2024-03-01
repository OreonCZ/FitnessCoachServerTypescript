import express from "express";
import { verify, auth } from "../services/auth";
const router = express.Router();

import * as achievementsController from "../controllers/achievements";

router.get("/", verify, auth(["user", "admin", "verified"]), achievementsController.getAllUsers);

router.get("/:id", verify, auth(["user", "admin", "verified"]), achievementsController.getUserById);

router.post("/", verify, auth(["admin"]), achievementsController.createUser);

router.put("/:id", verify, auth(["admin"]), achievementsController.updateUser);

router.delete("/:id", verify, auth(["admin"]), achievementsController.deleteUser);

module.exports = router;