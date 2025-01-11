import { Request, Response, Router } from "express";
import { db } from "../db/db";
import { authorFieldValidator, availableResolutionsFieldValidator, minAgeRestrictionValidator, publicationDateValidator, titleFieldValidator, validateCanBeDoWnlouded } from "./validation/field-validator";
import { errorResponse } from "./validation/errorResponse";

export const videoRouter = Router();

const videoController = {
    getVideos: (req: Request, res: Response) => {
        const videos = db.videos
        res.status(200).json(videos)
    },

    getVideoById: (req: Request, res: Response) => {
        const video = db.videos.find(p => p.id === +req.params.id)
        if (video) {
            res.status(200).json(video)
        }
        else {
            res.status(404)
        }
    },

    createVideo: (req: Request, res: Response) => {
        const author = req.body.author;
        const title = req.body.title;
        const availableResolutions = req.body.availableResolutions

        const errorsArray: Array<{ field: string; message: string }> = []
        titleFieldValidator(title, errorsArray)
        availableResolutionsFieldValidator(availableResolutions, errorsArray)
        authorFieldValidator(author, errorsArray)
     

        if (errorsArray.length > 0) {
            const errors_ = errorResponse(errorsArray)
            res.status(400).send(errors_)
            return
        }

        const createdAt = new Date()
        const day = 60 * 60 * 24 * 1000;
        const newVideo = {
            ...req.body,
            id: Date.now() + Math.random(),
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: createdAt.toISOString(),
            publicationDate: new Date(createdAt.getTime() + day).toISOString(),
        }

        db.videos = [...db.videos, newVideo]
        res.status(201).json(newVideo)
    },

    deleteVideoById: (req: Request, res: Response) => {
        for (let i = 0; i < db.videos.length; i++) {
            if (db.videos[i].id === +req.params.id) {
                db.videos.splice(i, 1)
                res.status(204)
                return;
            }
            else {
                res.status(404)
            }
        }
    },

    changesVideo: (req: Request, res: Response) => {
        let video = db.videos.find(p => p.id === +req.params.id)
        const author = req.body.author;
        const title = req.body.title;
        const availableResolutions = req.body.availableResolutions;
        const canBeDownloaded = req.body.canBeDownloaded;
        const minAgeRestriction = req.body.minAgeRestriction;
        const publicationDate = req.body.publicationDate;

        const errorsArray: Array<{ field: string; message: string }> = []
        titleFieldValidator(title, errorsArray)
        availableResolutionsFieldValidator(availableResolutions, errorsArray)
        authorFieldValidator(author, errorsArray)
        validateCanBeDoWnlouded(canBeDownloaded, errorsArray)
        minAgeRestrictionValidator(minAgeRestriction, errorsArray)
        publicationDateValidator(publicationDate, errorsArray)

        if (errorsArray.length > 0) {
            const errors_ = errorResponse(errorsArray)
            res.status(400).send(errors_)
            return
        }


        if (video) {
            video.title = req.body.title;
            video.author = req.body.author;
            video.availableResolutions = req.body.availableResolutions;
            video.canBeDownloaded = req.body.canBeDownloaded;
            res.send(204)
        } else {
            res.send(400)
        }
    }
}

videoRouter.get("/", videoController.getVideos);
videoRouter.post("/", videoController.createVideo);
videoRouter.get("/:id", videoController.getVideoById);
videoRouter.delete("/:id", videoController.deleteVideoById);
videoRouter.put("/:id", videoController.changesVideo);