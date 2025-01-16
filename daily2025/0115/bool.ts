const boolCalc = (x: boolean, y: boolean, z: boolean): boolean => {
    return x || (!x && y && z) || (!y && !z);
};

const resultArr:boolean[] = [];

const boolData:Array<boolean> = [false, true];

for(let i=0; i<boolData.length; i++) {
    for(let j=0; j<boolData.length; j++) {
        for(let k=0; k<boolData.length; k++) {
            resultArr.push(boolCalc(boolData[i], boolData[j], boolData[k]));
        }
    }
}

console.log(resultArr);






// const testCases: [boolean, boolean, boolean][] = [
//     [false, false, false],
//     [false, false, true],
//     [false, true, false],
//     [false, true, true],
//     [true, false, false],
//     [true, false, true],
//     [true, true, false],
//     [true, true, true],
// ];

// testCases.forEach(([x, y, z]) => {
//     console.log(`${boolCalc(x, y, z)}`);
// });