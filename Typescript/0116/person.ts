interface Person {
    name: string,
    age?: number
}

const person = {} as Person;
person.name = 'lee';
person.age = 20;
// person.address = 'Seoul' //error



type PersonType = {
    name: string,
    age?: number
}

const personType = {} as PersonType;
personType.name = 'LEE';
personType.age = 20;
// personType.address = 'seoul' //error