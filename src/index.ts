
import express from 'express'
import {
    emptyDateHandler, 
    unixDateHandler, 
    successResponseHandler, 
    isoDateHandler,
    errorResponseHandler, 
} from './handlers'
const app = express()

const timestampRoute = "/api/timestamp/:date?"

app.get(
    timestampRoute, 
    emptyDateHandler, 
    unixDateHandler, 
    isoDateHandler, 
    successResponseHandler, 
    errorResponseHandler
)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log( `Server started at http://localhost:${ port }` )
})