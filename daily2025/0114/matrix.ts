let arrA: any[] = [
    [ 2, 1, 4, 0 ],
    [ -7, 3, 6, 1 ],
    [ 8, -4, -2, 3 ],
    [ 1, 9, 4, -2 ]
]

let arrB: Array<any> = [
    [ 7, -1, 2, 4 ],
    [ 2, 8, -5, 1 ],
    [ -3, -4, 2, -2 ],
    [ 9, 6, -2, 0 ]
]

let arrResult = [];

function subsMatrix(arrA:any, arrB:any): any {
    arrA.forEach((v1,i1)=>{
        let tempArr = [];
        v1.forEach((v2,i2)=>{
            tempArr.push(arrA[i1][i2]-arrB[i1][i2]);
            // console.log(tempArr);
        })
        arrResult.push(tempArr);
    })
}

subsMatrix(arrB, arrA);
console.log(arrResult);

