import express, { Request, Response }  from "express"
import { SETTINGS } from "./settings"
import { videoRouter } from "./videos/videoController"
import { testingRouter } from "./testingController"

export const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.use(SETTINGS.PATH.VIDEOS, videoRouter)
app.use(SETTINGS.PATH.TESTING,testingRouter)