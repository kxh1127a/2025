const os = require('os');
const fs = require('fs');

console.log(os.freemem());
console.log(os.totalmem());


setInterval(() => {
    const newData = { freemem: os.freemem(), totalmem: os.totalmem() };
    console.log(JSON.stringify(newData));

    fs.writeFile('./memData.json', JSON.stringify(newData), (err) => {
        if (err) throw err;
    })
}, 2000)
