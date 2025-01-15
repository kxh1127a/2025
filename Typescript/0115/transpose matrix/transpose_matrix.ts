const defaultArr:any = [
    [5, 6, 7, 90],
    [8, 9, 10, 99],
    [11, 12, 13, 77] ,
    [14, 15, 16, 60]
];
const resultArr:any = [];

const inputValue:number = Math.min(defaultArr.length, defaultArr[0].length);
for(let i=0; i<inputValue; i++) {
    resultArr.push([])
};

for(let i=0; i<defaultArr.length; i++) {
    for(let j=0; j<defaultArr[0].length; j++) {
        resultArr[j][i] = defaultArr[i][j];
    }
}

console.log(resultArr);

const Flattened = (arr:[]) => {
    arr.forEach(v=>{
        if(Array.isArray(v)) {
            document.write("<br>")
            Flattened(v);
        } else {
            document.write( v + " &nbsp; " );
        }
    })
}
document.write(resultArr)
Flattened(resultArr);

