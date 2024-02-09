import { Request, Response } from "express";
import db from "../models/index";

const Food = db.food;

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.findAll();
    if (!food || food.length == 0)
      return res.status(500).send({ msg: "Food not found" });
    return res.status(200).send({
      msg: "Food found",
      payload: food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const food = await Food.findOne({ where: { id: id } });
    if (!food) return res.status(404).send({ msg: "Food not found!" });
    return res.status(200).send({ msg: "Food found!", payload: food });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createFood = async (req: Request, res: Response) => {
  try {
    const {
      mealName,
      tableText,
      cal,
      carb,
      fat,
      proteins,
      sugar,
      salt,
      weight,
      image,
    } = req.body;
    if (
      !tableText ||
      !cal ||
      !carb ||
      !fat ||
      !proteins ||
      !sugar ||
      !salt ||
      !weight ||
      !image
    )
      return res.status(400).send({ msg: "Missing details!" });
    const food = await Food.findOne({ where: { mealName: mealName } });
    if (food) return res.status(400).send({ msg: "Food already exists!" });
    const createdFood = await Food.create({
      mealName: mealName,
      tableText: tableText,
      cal: cal,
      carb: carb,
      fat: fat,
      proteins: proteins,
      sugar: sugar,
      salt: salt,
      weight: weight,
      image: image,
    });
    if (!createdFood)
      return res.status(500).send({ msg: "Something went wrong!" });
    return res.status(201).send({ msg: "Food created", payload: createdFood });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const food = await Food.findOne({ where: { id: id } });
    if (!food) return res.status(500).send({ msg: "Food not found" });
    for (const ops of data) {
      food[ops.propName] = ops.value;
    }
    const action = await food.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Food updated!", payload: food });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const food = await Food.destroy({ where: { id: id } });
    if (!food) return res.status(400).send({ msg: "Food not found!" });
    return res.status(200).send({ msg: "Food deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
