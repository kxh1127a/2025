"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: "typescript", completed: false };
const newTodo1 = { id: 2, content: "type", completed: true };
addTodo(newTodo);
addTodo(newTodo1);
console.log(todos);
const squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10));
class Todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todo = new Todo(1, 'typescript', false);
console.log(todo);
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person) {
    person.sayHello();
}
const me = new Person('LEE');
greeter(me);
class MallardDuck {
    quack() {
        console.log('Quack!');
    }
}
class RedHeadDuck {
    quack() {
        console.log('q~uack!');
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedHeadDuck());
// function sayHelloo(person: IPerson): void {
//     console.log(`hello ${person.name}`);
// }
const meme = { name: 'lee', age: 18 };
const userInfo = {
    username: '11@gmail.com',
    password: '123456'
};
console.log(userInfo);
const student1 = {
    name: 'LEE',
    age: 20,
    grade: 3
};
const webDeveloper = {
    name: 'lee',
    age: 20,
    skills: ['html', 'css', 'javascript']
};
