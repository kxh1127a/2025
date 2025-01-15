let matrixA = [
    [ 0, 6, 1 ],
    [ 3, 5, 2 ]
]

let matrixB = [
    [ 1, 0, 2 ],
    [ 9, 3, 8 ],
    [ 4, 7, 5 ]
]

let resultArr = [];

for(let i=0; i<matrixA.length; i++) {
    resultArr.push([]);
    for(let j=0; j<matrixB[0].length; j++) {
        let tempV = 0;
        for(let k=0; k<matrixA[0].length; k++) {
            tempV += matrixA[i][k]*matrixB[k][j];
            console.log(tempV)            
        }
        resultArr[i].push(tempV);
        tempV = 0;
    }
}

console.log(resultArr)