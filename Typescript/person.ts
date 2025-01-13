class Person {
    private name: string;
    //객체 밖에서 접근금지

    constructor(name: string) {
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
