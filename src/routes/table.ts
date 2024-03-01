import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as tableController from "../controllers/table";

router.get("/", verify, auth(["user", "admin", "verified"]), tableController.getAllUsers);

router.get("/:id", verify, auth(["user", "admin", "verified"]), tableController.getUserById);

router.post("/", verify, auth(["admin"]), tableController.createUser);

router.put("/:id", verify, auth(["admin"]), tableController.updateUser);

router.delete("/:id", verify, auth(["admin"]), tableController.deleteUser);

module.exports = router;