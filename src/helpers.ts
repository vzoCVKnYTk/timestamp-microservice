export function isValidDate(date: Date) {
    return !isNaN(date.getTime())
  }

export function dateStringToUnix(date: Date) {
    return date.getTime()
}

export function dateStringToUTC(date: Date) {
    return date.toUTCString()
}

export function successResponse(date: Date) {
    return { 
        unix: dateStringToUnix(date), 
        utc: dateStringToUTC(date),
    }
}

export const errorResponse = { error: "Invalid Date" }