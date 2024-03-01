import { NextFunction, Request, Response } from "express";

export const getDashboard = async (req: Request, res: Response) => {
    res.status(200).send({msg: "Nah Id win"});
};

