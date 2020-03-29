
import express from 'express'
import { CorsOptions } from 'cors'
const cors = require('cors')

import {
    emptyDateHandler, 
    unixDateHandler, 
    successResponseHandler, 
    isoDateHandler,
    errorResponseHandler, 
} from './handlers'



const app = express()
const corsOptions: CorsOptions = { optionsSuccessStatus: 200 }

app.use(cors(corsOptions))

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


const timestampRoute = "/api/timestamp/:date?"

app.get(
    timestampRoute, 
    emptyDateHandler, 
    unixDateHandler, 
    isoDateHandler, 
    successResponseHandler, 
    errorResponseHandler
)

const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});