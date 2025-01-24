const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('./src/media'));
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './src/pugs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('', (req, res)=>{
    res.send("hello world!!!")
})

app.get('/image', (req, res)=>{
    res.send('My Image, <img src="/1.png">')
})

app.get('/login', (req, res)=>{
    res.send('<h1>login please</h1><img src="/login/1.png">')
})

app.get('/dynamic', (req, res)=>{
    let lis = '';
    for(let i=0; i<5; i++) {
        lis += '<li>beautiful coding</li>'
    }
    const time = Date();
    const output = `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>hello</title>
        </head>
        <body>
            <h1 style="color: skyblue;">
            hello, dynamic!
            </h1> 
                <ul>
                    ${lis}
                </ul>
                ${time}
        </body>
    </html>
    `;
    res.send(output)
})

app.get('/template', (req, res)=>{
    res.render('temp', { time: Date(), title: 'JADE'})
})

app.post('/template', (req, res)=>{
    res.send(req.body.select);
})


app.get('/option/:id/:name', (req, res)=>{
    const nameList = ['kkms4001', 'syntaxerjs', 'smith']
    // res.send(nameList[req.query.select]);
    res.send(req.params.id + req.params.name);
})

app.listen(4444, ()=>{
    console.log("daemon port 4444 open!");
})