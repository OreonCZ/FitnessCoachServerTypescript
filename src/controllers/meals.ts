import { Request, Response } from "express";
import db from "../models/index";

const Meal = db.meals;

export const getAllMeals = async (req: Request, res: Response) => {
  try {
    const meals = await Meal.findAll();
    if (!meals || meals.length == 0)
      return res.status(500).send({ msg: "Meals not found" });
    return res.status(200).send({
      msg: "Meals found",
      payload: meals,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getMealById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const meals = await Meal.findOne({ where: { id: id } });
    if (!meals) return res.status(404).send({ msg: "Meal not found!" });
    return res.status(200).send({ msg: "Meal found!", payload: meals });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createMeal = async (req: Request, res: Response) => {
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
    const meals = await Meal.findOne({ where: { mealName: mealName } });
    if (meals) return res.status(400).send({ msg: "Meal already exists!" });
    const createdMeal = await Meal.create({
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
    if (!createdMeal)
      return res.status(500).send({ msg: "Something went wrong!" });
    return res.status(201).send({ msg: "Meal created", payload: createdMeal });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const meals = await Meal.findOne({ where: { id: id } });
    if (!meals) return res.status(500).send({ msg: "Meal not found" });
    for (const ops of data) {
      meals[ops.propName] = ops.value;
    }
    const action = await meals.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Meal updated!", payload: meals });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const meals = await Meal.destroy({ where: { id: id } });
    if (!meals) return res.status(400).send({ msg: "Meal not found!" });
    return res.status(200).send({ msg: "Meal deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
