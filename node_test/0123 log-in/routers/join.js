const express = require('express');
const { writeFile } = require('fs/promises');
const path = require('path');

const router = express.Router();

// 코드 묶기
router.route('/')
    .get((req, res) => {
        // res.sendFile 사용시 path 모듈 사용.
        res.sendFile(path.join(__dirname, '../assets/join.html'));
    })
    //콜백 방식 → Promise/async 방식
    .post(async (req, res) => {
        const { ID, PW } = req.body;
        console.log({ ID, PW });
        // { ID: 'ASDFA', PW: 'ASDFFG' }

        try {
            //writeFile()은 비동기 함수. 파일 쓰기 완료까지 기다려야 함(순차적 실행 보장)
            //코드 실행 흐름 제어 (파일 쓰기가 완료된 후 다음 작업 진행, 작업 순서 보장)
            await writeFile('./jsonData/userData.json', JSON.stringify({ ID, PW }));
            res.render('../assets/join_finish.pug', { name: ID });
        } catch (err) {
            res.status(500).send('Save failed');
        }
    });

module.exports = router;