const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authJwt = require('./util/jwt');
const errorHandler = require('./util/error-handler')
require('dotenv/config');
const app = express();


// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler)

// Routers
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const api = process.env.API_URL

app.use(`${api}/users`, userRouter);
app.use(`${api}/tasks`, taskRouter);

module.exports = app