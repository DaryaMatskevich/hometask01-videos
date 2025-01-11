export const titleFieldValidator = (
    title: string | undefined,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (!title) {
        errorsArray.push({ field: "title", message: "no title" })
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({ field: "title", message: "more than 40 symbols" })

    }
    if (title && title.trim().length < 1) {
        errorsArray.push({ field: "title", message: "no title" })

    }
}

export const availableResolutionsFieldValidator = (availableResolutions: Array<string>,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (availableResolutions && availableResolutions.length) {
        availableResolutions.forEach((resolution: string) => {
            if (!Object.keys(ResolutionsEnum).includes(resolution)) {
                errorsArray.push({
                    field: "availableResolutions",
                    message: "exist not valid value",
                })
                return
            }
        })
    }
}

export const authorFieldValidator = (
    author: string | undefined,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (!author) {
        errorsArray.push({ field: "author", message: "no author" })
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({ field: "author", message: "more than 20 symbols" })

    }
    if (author && author.trim().length < 1) {
        errorsArray.push({ field: "title", message: "no author" })

    }
}


export enum ResolutionsEnum {
    "P144" = "P144",
    "P240" = "P240",
    "P360" = "P360",
    "P480" = "P480",
    "P720" = "P720",
    "P1080" = "P1080",
    "P1440" = "P1440",
    "P2160" = "P2160"
}

export const validateCanBeDoWnlouded = (
    canBeDownloaded: boolean | undefined,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (canBeDownloaded === undefined) {
        errorsArray.push({ field: "canBeDownloaded", message: "canBeDownloaded is not defined"})
    }
    if (typeof canBeDownloaded !== "boolean") {
        errorsArray.push({ field: "canBeDownloaded", message: "canBeDownloaded must be a boolean value"  })

    }
}

export const minAgeRestrictionValidator = (
    minAgeRestriction: number | undefined,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (minAgeRestriction === undefined) {
        errorsArray.push({ field: "minAgeRestriction", message: "minAgeRestriction is not defined"})
    }
    if (typeof minAgeRestriction !== "number") {
        errorsArray.push({ field: "minAgeRestriction", message: "minAgeRestriction must be a number value"  })
    }
    if (minAgeRestriction && minAgeRestriction < 18) {
        errorsArray.push({ field: "minAgeRestriction", message: "minAgeRestriction must be 18 or more"})
    }
}

export const publicationDateValidator = (
    publicationDate: string | undefined,
    errorsArray: Array<{ field: string; message: string }>) => {
    if (publicationDate === undefined) {
        errorsArray.push({ field: "publicationDate", message: "publicationDate is not defined"})
    } else {
       const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
        if (!dateRegex.test(publicationDate)) {
            errorsArray.push({ field: "publicationDate", message: "publicationDate must be in the format 'YYYY-MM-DDTHH:MM:SS.MSZ'" });
        }
    }}
