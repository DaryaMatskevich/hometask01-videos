export const titleFieldValidator = (
    title: string | undefined,
    errorsArray: Array<{ message: string; field: string }>) => {
    if (!title) {
        errorsArray.push({ message: "no title", field: "title" })
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({ message: "more than 40 symbols", field: "title" })

    }
    if (title && title.trim().length < 1) {
        errorsArray.push({ message: "no title", field: "title"})

    }
}

export const availableResolutionsFieldValidator = (availableResolutions: Array<string>,
    errorsArray: Array<{ message: string; field: string }>) => {
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
    errorsArray: Array<{ message: string; field: string }>) => {
    if (!author) {
        errorsArray.push({ message: "no author", field: "author"})
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({ message: "more than 20 symbols", field: "author" })

    }
    if (author && author.trim().length < 1) {
        errorsArray.push({ message: "no author", field: "title" })

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
    errorsArray: Array<{ message: string; field: string }>) => {
    if (canBeDownloaded === undefined) {
        errorsArray.push({ message: "canBeDownloaded is not defined", field: "canBeDownloaded" })
    }
    if (typeof canBeDownloaded !== "boolean") {
        errorsArray.push({ message: "canBeDownloaded must be a boolean value", field: "canBeDownloaded" })

    }
}

export const minAgeRestrictionValidator = (
    minAgeRestriction: number | undefined,
    errorsArray: Array<{ message: string; field: string }>) => {
    // if (minAgeRestriction === undefined) {
    //     errorsArray.push({ message: "minAgeRestriction is not defined", field: "minAgeRestriction" })
    // }
    if (typeof minAgeRestriction !== "number") {
        errorsArray.push({ message: "minAgeRestriction must be a number value" , field: "minAgeRestriction" })
    }
    // if (minAgeRestriction && minAgeRestriction < 18) {
    //     errorsArray.push({ message: "minAgeRestriction must be 18 or more", field: "minAgeRestriction" })
    // }
}

export const publicationDateValidator = (
    publicationDate: string | undefined,
    errorsArray: Array<{ message: string; field: string }>) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (publicationDate === undefined) {
        errorsArray.push({ message: "publicationDate is not defined", field: "publicationDate" })
    } else {
        if (!dateRegex.test(publicationDate)) {
            errorsArray.push({ message: "publicationDate must be in the format 'YYYY-MM-DDTHH:MM:SS.MSZ'" , field: "publicationDate"});
        }
    }}
