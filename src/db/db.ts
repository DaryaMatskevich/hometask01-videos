type DBType = {
    videos: any[]
    blogs: any[]
}



export const db: DBType = {
    videos:[],
    blogs: []
}

export const setDb = (dataset?: Partial<DBType>) => {
    if(!dataset) {
        db.videos = [];
        return;
    }
    db.videos = dataset.videos || db.videos
}