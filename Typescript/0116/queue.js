"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(0);
queue.push('1');
console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed()); //error
class NumberQueue extends Queue {
    push(item) {
        super.push(item);
    }
    pop() {
        return super.pop();
    }
}
const numberQueue = new NumberQueue();
numberQueue.push(0);
numberQueue.push(+'1');
console.log(numberQueue.pop().toFixed());
console.log(numberQueue.pop().toFixed());
