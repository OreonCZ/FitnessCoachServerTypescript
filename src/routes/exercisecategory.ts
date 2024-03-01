import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as exerciseCategoryController from "../controllers/exercisecategory";

router.get("/", verify, auth(["user", "admin", "verified"]), exerciseCategoryController.getAllUsers);

router.get("/:id", verify, auth(["user", "admin", "verified"]), exerciseCategoryController.getUserById);

router.post("/", verify, auth(["admin"]), exerciseCategoryController.createUser);

router.put("/:id", verify, auth(["admin"]),  exerciseCategoryController.updateUser);

router.delete("/:id", verify, auth(["admin"]),  exerciseCategoryController.deleteUser);

//router.post("/", userController.addFriend);

module.exports = router;
