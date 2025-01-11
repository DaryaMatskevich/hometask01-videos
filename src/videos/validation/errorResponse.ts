export function errorResponse (errorsArray: Array<{ message: string; field: string }>) {
    return { "errorsMessages": errorsArray };
}