"use strict";
class DoubleLinkedList {
    constructor(id) {
        this.id = id;
        this._value = null;
        this.prevNode = null;
        this.nextNode = null;
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    setNextNode(node) {
        this.nextNode = node;
    }
    setPrevNode(node) {
        this.prevNode = node;
    }
    getNextNode() {
        return this.nextNode;
    }
    getPrevNode() {
        return this.prevNode;
    }
}
const dll1 = new DoubleLinkedList('dll1');
const dll2 = new DoubleLinkedList('dll2');
const dll3 = new DoubleLinkedList('dll3');
dll1.value = "Love";
dll2.value = "CDR";
dll3.value = "ZARD";
dll1.setNextNode(dll2);
dll2.setPrevNode(dll1);
dll2.setNextNode(dll3);
dll3.setPrevNode(dll2);
console.log(dll1.getNextNode().getNextNode().getPrevNode().value);
