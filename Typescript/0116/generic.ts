class Queue<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

//number전용 queue
const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push(+'1');

console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());


//string전용 queue
const stringQueue = new Queue<string>();
stringQueue.push('hello');
stringQueue.push('world');

console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());


//커스텀 객체전용 queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'lee', age: 10});
myQueue.push({name: 'kim', age: 20});

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());

export {};