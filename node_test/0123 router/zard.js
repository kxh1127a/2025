const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('cdr');
})

router.post('/', (req, res)=>{
    res.send('love')
})

module.exports = router;