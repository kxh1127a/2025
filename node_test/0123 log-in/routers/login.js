const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
console.log(fs);


app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('../assets/login.pug')
})

router.post('/', (req, res) => {
    fs.readFile('./jsonData/userData.json', (err, data) => {
        if (err) throw err;
        const fullData = JSON.parse(data.toString());
        console.log(fullData)
        //{ ID: '12345', PW: '12345' }
        console.log(req.body)
        if (fullData.ID == req.body.loginID && fullData.PW == req.body.loginPW) {
            res.render('../assets/login_finish.pug', { name: fullData.ID });
        } else {
            res.send(`존재하지 않는 회원입니다. `)
        }
    })
})
module.exports = router;