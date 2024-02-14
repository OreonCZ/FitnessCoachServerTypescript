import express from "express";

const router = express.Router();

import * as programsController from "../controllers/table";

router.get("/", programsController.getAllUsers);

router.get("/:id", programsController.getUserById);

router.post("/", programsController.createUser);

router.put("/:id", programsController.updateUser);

router.delete("/:id", programsController.deleteUser);

module.exports = router;