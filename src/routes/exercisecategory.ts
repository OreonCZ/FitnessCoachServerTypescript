import express from "express";

const router = express.Router();

import * as exerciseCategoryController from "../controllers/exercisecategory";

router.get("/", exerciseCategoryController.getAllUsers);

router.get("/:id", exerciseCategoryController.getUserById);

router.post("/", exerciseCategoryController.createUser);

router.put("/:id", exerciseCategoryController.updateUser);

router.delete("/:id", exerciseCategoryController.deleteUser);

//router.post("/", userController.addFriend);

module.exports = router;
