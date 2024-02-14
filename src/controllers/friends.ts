import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Friend = db.friendstable;

export const getAllFriends = async (req: Request, res: Response) => {
  try {
    const friends = await Friend.findAll();
    if (!friends || friends.length == 0)
      return res.status(500).send({ msg: "Friends not found" });
    return res.status(200).send({
      msg: "Friends found",
      payload: friends,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getFriendById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const friends = await Friend.findOne({ where: { id: id } });
    if (!friends) return res.status(404).send({ msg: "Friends not found!" });
    return res.status(200).send({ msg: "Friend found!", payload: friends });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createFriend = async (req: Request, res: Response) => {
  try {
    const createdUser = await Friend.create({
    });
    if (!createdUser)
    return res.status(201).send({ msg: "Friend created", payload: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateFriend = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const friends = await Friend.findOne({ where: { id: id } });
    if (!friends) return res.status(500).send({ msg: "Friend not found" });
    for (const ops of data) {
        friends[ops.propName] = ops.value;
    }
    const action = await friends.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Friend updated!", payload: friends });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteFriend = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const friends = await Friend.destroy({ where: { id: id } });
    if (!friends) return res.status(400).send({ msg: "Friend not found!" });
    return res.status(200).send({ msg: "Friend deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
