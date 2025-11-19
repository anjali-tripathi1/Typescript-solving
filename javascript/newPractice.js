var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function value(name) {
    return "Hello ".concat(name);
}
console.log(value('anjali'));
function add(a, b) {
    return a + b;
}
console.log(add(6, 8));
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.acclerate = function () {
        this.speed += 10;
    };
    return car;
}());
function main() {
    var c = new car();
    c.speed = 80;
    c.acclerate();
    console.log("my car name is ".concat(c.name, " and spedd is ").concat(c.speed));
}
main();
var bankAccount = /** @class */ (function () {
    function bankAccount(intial) {
        if (intial === void 0) { intial = 0; }
        this.balance = 0;
        this.balance = intial;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log('invalid');
        }
    };
    return bankAccount;
}());
function mains() {
    var bal = new bankAccount(1000);
    console.log(bal.getBalance());
    bal.deposit(5000);
    console.log(bal.getBalance());
}
mains();
var Employee = /** @class */ (function () {
    function Employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Employee.prototype.getDetails = function () {
        return "name is ".concat(this.name, " age is ").concat(this.age, " and posi is ").concat(this.position);
    };
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " works as ").concat(this.position));
    };
    return Employee;
}());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(name, age, position, teamsize) {
        var _this = _super.call(this, name, age, position) || this;
        _this.teamsize = teamsize;
        return _this;
    }
    manager.prototype.getDetails = function () {
        return ("".concat(_super.prototype.getDetails.call(this), " and teamsize is ").concat(this.teamsize));
    };
    return manager;
}(Employee));
var emp = new Employee('Anjali', 20, 'developer');
console.log(emp.getDetails());
var per = /** @class */ (function () {
    function per() {
    }
    per.prototype.calculateArea = function () {
        return 0;
    };
    return per;
}());
var rect = /** @class */ (function (_super) {
    __extends(rect, _super);
    function rect(length, width) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    rect.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    return rect;
}(per));
var areas = [
    new rect(4, 5)
];
for (var _i = 0, areas_1 = areas; _i < areas_1.length; _i++) {
    var area = areas_1[_i];
    console.log(area.calculateArea());
}
var calc = /** @class */ (function () {
    function calc() {
    }
    calc.prototype.add = function (a, b) {
        return a + b;
    };
    return calc;
}());
var ca = new calc();
console.log(ca.add(4, 5));
console.log(ca.add('Hello', 'World'));
var Add = function (a, b) {
    return a + b;
};
console.log(add(6, 8));
