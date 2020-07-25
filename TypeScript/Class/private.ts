//Private Class
class PersonPrivate {
    private name: string;
    private age: number;
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

let cashierPrivate = new PersonPrivate('Pamela', 21);
console.log(cashierPrivate.getName() +' '+cashierPrivate.getAge());
cashierPrivate.birthday();
console.log(`${cashierPrivate.getName()}'s Birthday! She is now ${cashierPrivate.getAge()} years old`);
// cashierPrivate.name - doesn't work
