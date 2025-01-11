import { Request, Response, Router } from "express";
import { db } from "./db/db";

export const testingRouter = Router()

const testingController = {
    deleteAlldata: (req: Request, res: Response) => {
        if(req.params.id === "all-data") {
        db.videos = [];
        res.status(204)}
    }
    }


testingRouter.delete("/:d", testingController.deleteAlldata)
