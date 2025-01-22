"use strict";
const arrA = [
    [1, 0, 0],
    [1, 1, 1]
];
const arrB = [
    [0, 1],
    [1, 1],
    [1, 0]
];
const arrResult = [];
for (let i = 0; i < arrA.length; i++) {
    let tempArr = [];
    for (let j = 0; j < arrB[0].length; j++) {
        let tempV = 0;
        for (let k = 0; k < arrB.length; k++) {
            if (tempV || arrA[i][k] * arrB[k][j]) {
                tempV = 1;
            }
            else {
                tempV = 0;
            }
        }
        tempArr.push(tempV);
    }
    arrResult.push(tempArr);
}
console.log(arrResult);
