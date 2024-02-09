import express from "express";

const router = express.Router();

import * as foodController from "../controllers/food";

router.get("/", foodController.getAllFood);

router.get("/:id", foodController.getFoodById);

router.post("/", foodController.createFood);

router.put("/:id", foodController.updateFood);

router.delete("/:id", foodController.deleteFood);

//router.post("/", userController.addFriend);

module.exports = router;
