import express from "express";

const router = express.Router();

import * as tableController from "../controllers/table";

router.get("/", tableController.getAllUsers);

router.get("/:id", tableController.getUserById);

router.post("/", tableController.createUser);

router.put("/:id", tableController.updateUser);

router.delete("/:id", tableController.deleteUser);

module.exports = router;