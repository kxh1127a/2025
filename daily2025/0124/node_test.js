const fs = require('fs');

fs.readFile('./file1.txt', (err, data1)=>{
    if (err) throw err;
    console.log(data1);
    fs.readFile('./file2.txt', (err, data2)=>{
        if(err) throw err;
        console.log(data2);
        fs.readFile('./file3.txt', (err, data3)=>{
            if(err) throw err;
            console.log(data3);
        })
    })
})



fs.readFile('./file1.txt')
    .then((data1)=>{
        console.log(data1);
        return fs.readFile('./file2.txt');
    })
    .then((data2)=>{
        console.log(data2);
        return fs.readFile('./file3.txt');
    })
    .then((data3)=>{
        console.log(data3);
    })
    .catch((err)=>{
        console.error(err);
    })


    const readFiles = async () => {
        try {
            console.log('start');

            const data1= await fs.readFile('./file1.txt');
            console.log(data1.toString());

            const data2 = await fs.readFile('./file2.txt');
            console.log(data2.toString());

            const data3 = await fs.readFile('./file3.txt');
            console.log(data3.toString());

            console.log('end');
        } catch (err) {
            console.error(err);
        }
    }
    readFiles();