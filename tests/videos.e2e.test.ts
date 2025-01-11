import { req } from "./test.helpers"
import { setDb } from "../src/db/db"
import { SETTINGS } from "../src/settings"

describe('/videos', () => {
    it('should get empty array', async () => {
        setDb()
        const res = await req
        .get(SETTINGS.PATH.VIDEOS)
        .expect(200)

        expect(res.body.length).toBe(0)
    
    })
   }) 