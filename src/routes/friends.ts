import express from "express";

const router = express.Router();

import * as friendsController from "../controllers/friends";

router.get("/", friendsController.getAllFriends);

router.get("/:id", friendsController.getFriendById);

router.post("/", friendsController.createFriend);

router.put("/:id", friendsController.updateFriend);

router.delete("/:id", friendsController.deleteFriend);

module.exports = router;