"use strict";
class Determinant {
    constructor(id) {
        this.id = id;
    }
    calc2x2(arr) {
        if (arr.length !== 2 || arr[0].length !== 2) {
            throw new Error("2x2 행렬만 처리 가능합니다.");
        }
        const [[a, b], [c, d]] = arr;
        return a * d - b * c;
    }
    calc(arr) {
        const size = arr.length;
        if (size === 2) {
            return this.calc2x2(arr);
        }
        let determinant = 0;
        for (let i = 0; i < size; i++) {
            const minor = this.getMinor(arr, 0, i);
            determinant += Math.pow(-1, i) * arr[0][i] * this.calc(minor);
        }
        return determinant;
    }
    getMinor(arr, row, col) {
        return arr
            .filter((_, i) => i !== row)
            .map(r => r.filter((_, j) => j !== col));
    }
    running(arr) {
        const determinant = this.calc(arr);
        console.log(`행렬식: ${determinant}`);
    }
}
const defaultArr = [
    [3, -1, -2],
    [-4, 2, 1],
    [1, 4, -3]
];
const determinant = new Determinant('determinant');
determinant.running(defaultArr);
