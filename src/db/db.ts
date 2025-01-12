type DBType = {
    videos: any[]
    blogs: any[]
}



export const db: DBType = {
    videos:[{id: 1,
        title:"some title updated",
           author:"some author updated",
    availableResolutions:["P144","P2160","P720"],
        canBeDownloaded:true,
        minAgeRestriction:16,
        publicationDate:"2025-01-18T09:44:14.410Z"}],
    blogs: []
}

export const setDb = (dataset?: Partial<DBType>) => {
    if(!dataset) {
        db.videos = [];
        return;
    }
    db.videos = dataset.videos || db.videos
}