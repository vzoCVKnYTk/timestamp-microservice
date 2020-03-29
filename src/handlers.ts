import { 
    Request, 
    Response, 
    NextFunction 
} from 'express'
import { 
    successResponse,
    errorResponse,
    isValidDate
} from './helpers'

export const emptyDateHandler = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (req.params.date === undefined) {
        const date = new Date()
        console.log(`Empty date is ${date}`);
        res.locals.date = date
    }
    next()
}

export const unixDateHandler = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const unixTimestamp = req.params.date && Number(req.params.date)
    if (Number.isInteger(unixTimestamp)) {
        const date = new Date(unixTimestamp)
        console.log(`Unix date is ${date}`);
        res.locals.date = date
    }
    next()
}

export const isoDateHandler = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const date = new Date(req.params.date)
    if (isValidDate(date)) {
        console.log(`Iso date is ${date}`);
        res.locals.date = date
    }
    next()
}

export const successResponseHandler = (
    _: Request,
    res: Response,
    next: NextFunction
) => {
    const date = res.locals.date
    if(date) {
        console.log(`Successful Response ${date}`);
        res.json(successResponse(date))
    } else {
        next()
    }
}

export const errorResponseHandler = (
    _: Request,
    res: Response,
) => {
    console.log(`Unsuccessful Response ${res.locals.date}`);
    res.json(errorResponse)
}