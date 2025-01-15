"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.storage = [];
    }
    walk() {
        console.log(`${this.name} is walking....`);
    }
}
const person = new Person('Lee');
person.walk();


