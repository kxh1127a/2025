const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); //process.env 관리
dotenv.config();

const joinRouter = require('./routers/join');
const loginRouter = require('./routers/login');

// app.use(미들웨어)
app.use(bodyParser.urlencoded({ extended: true }));
// static 폴더지정 
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.use('/join', joinRouter);
app.use('/login', loginRouter);

// 위 주소 해당 안되면 실행
app.use((req, res, next) => {
    res.status(404).send("NOT FOUNT ANY PAGES!!!")
})


// express 변수 지정 app.set(키, 값))
app.set('port', process.env.PORT || 3333);

// express 변수 호출 app.get(키
app.listen(app.get('port'), () => {
    console.log('port 3333 open!')
});