const express = require('express');
const routing = express.Router();

routing.get('/', (req, res)=>{
    res.send('hello, express');
})

module.exports = routing;