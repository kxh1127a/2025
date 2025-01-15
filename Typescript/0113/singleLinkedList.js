"use strict";
class SingleLinkedList {
    constructor(id) {
        this.id = id;
        this._value = "";
        this.nextNode = null;
    }
    get value() {
        return this._value;
    }
    set value(item) {
        this._value = item;
    }
    setNext(nextNode) {
        this.nextNode = nextNode;
    }
    next() {
        return this.nextNode;
    }
}
const sLL1 = new SingleLinkedList('sLL1');
const sLL2 = new SingleLinkedList('sLL2');
const sLL3 = new SingleLinkedList('sLL3');
sLL1.value = "ZARD";
sLL2.value = 'CDR';
sLL3.value = 'LOVE';
sLL1.setNext(sLL2);
sLL2.setNext(sLL3);
console.log(sLL1.next().next().value);
