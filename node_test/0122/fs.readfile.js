const fs = require('fs');
const content = `
    글이 추가됩니다.
`;

fs.writeFile('./writeme.txt', content, (err)=>{
    if (err) throw err;

    fs.readFile('./writeme.txt', (err, data)=>{
        if (err) throw err;
        console.log(data.toString())
    })
})

fs.readFile('./readme.txt', (err, data)=>{
    
})