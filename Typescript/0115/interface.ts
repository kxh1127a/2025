//변수 인터페이스
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

let todos: Todo[] = [];

function addTodo(todo: Todo) {
    todos = [ ...todos, todo ];
}

const newTodo: Todo = { id: 1, content: "typescript", completed: false };
const newTodo1: Todo = { id: 2, content: "type", completed: true };
addTodo(newTodo);
addTodo(newTodo1);
console.log(todos)
// [ { id: 1, content: 'typescript', completed: false } ]



//함수 인터페이스
//파라미터 리스트와 리턴 타입을 정의.
interface SquareFunc {
    (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
    return num * num;
}

console.log(squareFunc(10));



//클래스 인터페이스
interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

class Todo implements ITodo {
    constructor (
        public id: number,
        public content: string,
        public completed: boolean
    ) {       
    }
}
const todo = new Todo(1, 'typescript', false);
console.log(todo);




interface IPerson {
    name: string,
    sayHello(): void;
}

class Person implements IPerson {
    constructor(public name: string) {

    }
    sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person: IPerson):void {
    person.sayHello();
}

const me = new Person('LEE');
greeter(me);



// 덕 타이핑
interface IDuck {
    quack(): void;
}

class MallardDuck implements IDuck {
    quack() {
        console.log('Quack!');
    }
}

class RedHeadDuck {
    quack() {
        console.log('q~uack!');
    }
}

function makeNoise(duck: IDuck): void {
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedHeadDuck());




interface IPerson {
    name: string;
}

// function sayHelloo(person: IPerson): void {
//     console.log(`hello ${person.name}`);
// }

const meme = { name: 'lee', age: 18 };
// sayHelloo(meme);

export {}




// 선택적 프로퍼티
interface UserInfo {
    username: string;
    password: string;
    age? : number;
    address? : string;
}

const userInfo: UserInfo = {
    username: '11@gmail.com',
    password: '123456'
}

console.log(userInfo);




//인터페이스 상속
interface Person11 {
    name: string;
    age?: number;
}

interface Student extends Person11 {
    grade: number;
}

const student1: Student = {
    name: 'LEE',
    age: 20,
    grade: 3
}



interface NewPerson {
    name: string;
    age?: number;
}

interface Developer {
    skills: string[];
}

interface WebDeveloper extends NewPerson, Developer {}

const webDeveloper: WebDeveloper = {
    name: 'lee',
    age: 20,
    skills: ['html', 'css', 'javascript']
}