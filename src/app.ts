import express, { Request, Response }  from "express"
import { SETTINGS } from "./settings"
import { videoRouter } from "./videos/videoController"
import { db } from "./db/db"
// import { testingRouter } from "./testingController"

export const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.use(SETTINGS.PATH.VIDEOS, videoRouter)
// app.use(SETTINGS.PATH.TESTING,testingRouter)

app.delete('/testing/all-data', (req, res) => {
    db.videos = []; 
    db.blogs = []; 
    res.sendStatus(204); 
});