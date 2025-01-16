const defaultArr = [
    [ 10, 20, 30 ],
    [ 40, 50, 60 ],
    [ 70, 80, 90 ],
    [ 100, 110, 120]
]
const resultArr = [];

for(let i=0; i<defaultArr[0].length; i++) {
    for(let j=0; j<defaultArr[1].length; j++) {
        for(let k=0; k<defaultArr[2].length; k++) {
            for(let l=0; l<defaultArr[3].length; l++) {
                resultArr.push([defaultArr[0][i], defaultArr[1][j], defaultArr[2][k], defaultArr[3][l]])
            }
        }
    }
}

console.log(resultArr)