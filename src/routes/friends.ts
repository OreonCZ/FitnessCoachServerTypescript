import express from "express";
import { verify, auth } from "../services/auth";

const router = express.Router();

import * as friendsController from "../controllers/friends";

router.get("/", verify, auth(["user", "admin", "verified"]), friendsController.getAllFriends);

router.get("/:id", verify, auth(["user", "admin", "verified"]), friendsController.getFriendById);

router.post("/", verify, auth(["user", "admin", "verified"]), friendsController.createFriend);

router.put("/:id", verify, auth(["user", "admin", "verified"]), friendsController.updateFriend);

router.delete("/:id", verify, auth(["user", "admin", "verified"]), friendsController.deleteFriend);

module.exports = router;