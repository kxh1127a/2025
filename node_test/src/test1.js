const express = require('express');
const mysql = require('mysql');
const ws = express();

ws.get('/input', (req,res)=>{
    const htmlString = `
        <form action="/search" method="get">
            <label for="iname"> name : <input type="text" name="iname"></label>
            <input type="submit" value="SEARCH">
        </form>
    `;
    res.send( htmlString );
})

ws.get('/search', (req, res)=>{
    console.log(req.query.iname);
    const sql = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "0000",
        database: "node_sample"
    })
    const searchName = req.query.iname;
    const sqlString = `select name from musicPlayer where artist="${searchName}"`;
    sql.connect();
    sql.query(sqlString, (err, rows, fields)=>{
        if (err) throw err;
        console.log(rows)
        const resHTML = `
            <p>${rows}</p>
        `
        res.send(resHTML);
    })
})

ws.listen(45070, ()=>{
    console.log('port 45070 open!')
})