const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const indexRouter = require('./index');
const userRouter = require('./user');
const zardRouter = require('./')

console.log(indexRouter.stack[0].route)

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
    res.status(404).send('Not FFOUND');
})

app.listen(3333, ()=>{
    console.log('port 3333 open!')
})