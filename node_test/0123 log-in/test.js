const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('1')

})

app.listen(3333, ()=>{
    console.log(1);
})