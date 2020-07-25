//Public Class
class PersonPublic {
    // public name: string;
    // public age: number;
    //or
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    birthday() {
        this.age += 1;
    }
}

let cashierPublic = new PersonPublic('Pamela', 21);
console.log(cashierPublic.name +' '+cashierPublic.getAge());
cashierPublic.birthday();
console.log(`${cashierPublic.name}'s Birthday! She is now ${cashierPublic.age} years old`);