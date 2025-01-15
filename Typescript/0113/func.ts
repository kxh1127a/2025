function multiply1(x: number, y: number): number {
    return x * y;
}

const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));


enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1);

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2);

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Green;

console.log(c3);

let list: [string, number];
list = ['hello', 12];
list = [12, 'hello'];
list = ['hello', 23, 23, 'hello'];

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let foo: string,
    bar: number,
    baz: boolean;

foo: 'hello';
bar: 123;
baz: true;

function add(x: number, y: number): number {
    return x + y ;
}

console.log(add(10, 10));
console.log(add('10', '10'));
