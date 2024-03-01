import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as adminController from "../controllers/admin";

router.get("/dashboard", verify, auth(["admin", "user", "verified"]), adminController.getDashboard);


module.exports = router;
