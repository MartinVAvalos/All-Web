var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Protected Class
// Note: A constructor may also be marked protected. 
//  This means that the class cannot be instantiated outside of its containing class, 
//  but can be extended.
var PersonProtected = /** @class */ (function () {
    function PersonProtected(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonProtected.prototype.getName = function () {
        return this.name;
    };
    PersonProtected.prototype.getAge = function () {
        return this.age;
    };
    PersonProtected.prototype.birthday = function () {
        this.age += 1;
    };
    return PersonProtected;
}());
// let cashierProtected = new PersonProtected('Pamela', 21);
// line 25 doesn't work
// Line 31, Employee is a derived class that derives from the PersonProtected base class 
//  using the extends keyword. Derived classes are often called subclasses, and base 
//  classes are often called superclasses.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, department) {
        var _this = _super.call(this, name, age) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    Employee.prototype.getAge = function () {
        return _super.prototype.getAge.call(this);
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    Employee.prototype.birthday = function () {
        _super.prototype.birthday.call(this);
    };
    return Employee;
}(PersonProtected));
var cashierProtected = new Employee('Pamela', 21, 'Cashier');
// This doesn't work: cashierProtected.name or cashierProtected.department
console.log("Pamela is " + cashierProtected.getAge() + " years old and works as a " + cashierProtected.getDepartment());
cashierProtected.birthday();
console.log(cashierProtected.getName() + "'s Birthday! She is now " + cashierProtected.getAge() + " years old");
