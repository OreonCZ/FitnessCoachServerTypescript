import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as programsController from "../controllers/table";

router.get("/", verify, auth(["user", "admin", "verified"]), programsController.getAllUsers);

router.get("/:id", verify, auth(["user", "admin", "verified"]), programsController.getUserById);

router.post("/", verify, auth(["admin"]), programsController.createUser);

router.put("/:id", verify, auth(["admin"]), programsController.updateUser);

router.delete("/:id", verify, auth(["admin"]), programsController.deleteUser);

module.exports = router;