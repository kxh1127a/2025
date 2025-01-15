class Person {
    name: string;
    storage:Array<number>

    constructor(name: string) {
        this.name = name;
        this.storage = [];
    }

    walk() {
        console.log(`${this.name} is walking....`);
    }
}

const person = new Person('Lee');
person.walk();


class Foo {
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const foo = new Foo('x', 'y', 'z');
console.log(foo.x)

class Bar extends Foo {
    constructor(x: string, y: string, z: string){
        super(x,y,z);

        console.log(this.y)
    }
}



class Foo2 {
    constructor(public x: string) {

    }
}
const foo2 = new Foo2('foo2');
console.log(foo2.x)

class Bar2 {
    constructor(private x: string) {

    }
}
const bar2 = new Bar2('bar2');
console.log(bar2.x);
