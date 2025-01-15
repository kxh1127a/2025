"use strict";
class Person {
    //객체 밖에서 접근금지
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const person = new Person('LEE');
person.sayHello();
person.sayHello();
person.sayHello();
console.log(person.sayHello());
