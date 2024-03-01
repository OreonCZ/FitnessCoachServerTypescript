import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as mealsController from "../controllers/meals";

router.get("/", verify, auth(["user", "admin", "verified"]), mealsController.getAllUsers);

router.get("/:id", verify, auth(["user", "admin", "verified"]), mealsController.getUserById);

router.post("/", verify, auth(["user", "admin", "verified"]), mealsController.createUser);

router.put("/:id", verify, auth(["user", "admin", "verified"]), mealsController.updateUser);

router.delete("/:id", verify, auth(["user", "admin", "verified"]), mealsController.deleteUser);

module.exports = router;