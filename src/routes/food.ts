import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as foodController from "../controllers/food";

router.get("/", verify, auth(["user", "admin", "verified"]), foodController.getAllFood);

router.get("/:id", verify, auth(["user", "admin", "verified"]), foodController.getFoodById);

router.post("/", verify, auth(["user", "admin", "verified"]), foodController.createFood);

router.put("/:id", verify, auth(["user", "admin", "verified"]), foodController.updateFood);

router.delete("/:id", verify, auth(["admin", "user", "verified"]), foodController.deleteFood);

//router.post("/", userController.addFriend);

module.exports = router;
