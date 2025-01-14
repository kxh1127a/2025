class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
}

class Deque {
    constructor(id) {
        this.id = id;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(item) {        
        const newNode = new Node(item);
        newNode.value = item;
        // console.log(this.head);
        // console.log(this.tail);
        // console.log(newNode);
        // console.log('');
        
        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            newNode.prevNode = this.tail;
            this.tail = newNode;
        }
        this.size++;
        this.toArray();
    }
    shift() {
        if(!this.head) {
            return null;
        }
        const value = this.head.value;
        if(this.head == this.tail) {
            this.head = this.tail = null;
            return value;
        } else {
            this.head = this.head.nextNode;
            this.head.prevNode = null;
        }
        this.size--;
        this.toArray();
        return value;
    }
    toArray() {
        let resultArr = [];
        let current = this.head;
        while(current) {
            resultArr.push(current.value);
            current = current.nextNode;
        }
        console.log(resultArr);
    }
}

const deque = new Deque('deque');
deque.push('zard');
deque.push('cdr');
deque.shift();
