// Protected Class
// Note: A constructor may also be marked protected. 
//  This means that the class cannot be instantiated outside of its containing class, 
//  but can be extended.
class PersonProtected {
    protected name: string;
    protected age: number;
    protected constructor(name: string, age: number) {
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

// let cashierProtected = new PersonProtected('Pamela', 21);
// line 25 doesn't work

// Line 31, Employee is a derived class that derives from the PersonProtected base class 
//  using the extends keyword. Derived classes are often called subclasses, and base 
//  classes are often called superclasses.
class Employee extends PersonProtected {
    private department: string;
    constructor(name:string, age:number, department:string) {
        super(name, age);
        this.department = department
    }
    getName() {
        return super.getName();
    }

    getAge() {
        return super.getAge();
    }

    getDepartment() {
        return this.department;
    }

    birthday() {
        super.birthday();
    }
}

let cashierProtected = new Employee('Pamela', 21, 'Cashier');
// This doesn't work: cashierProtected.name or cashierProtected.department

console.log(`Pamela is ${cashierProtected.getAge()} years old and works as a ${cashierProtected.getDepartment()}`)
cashierProtected.birthday();
console.log(`${cashierProtected.getName()}'s Birthday! She is now ${cashierProtected.getAge()} years old`);
