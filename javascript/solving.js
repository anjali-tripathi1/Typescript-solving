// let username:string = 'Anjali'
// console.log(username);
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
// let age:number = 20
// let sentence:string = `Hello my name is ${username} and my age will be ${age + 1} next year.`
// console.log(sentence);
// function value (name:string):string {
//       return `Hello ${name}`
// }
// console.log(value('Typescript'));
// //  console.log(value(42));
// let username = 'Typescript'
// let number =  200
// let flags = [true, false, true]
// function add (a:number, b:number) {
//     console.log(a+b)
// }
// add(5,8)
// let names:string[] = []
// names.push('Doga')
// // names.push(3) 
// let numbers = [1, 2, 3]
// numbers.push(4)
// // numbers.push('5')
// let head:number = numbers[0]
// console.log(numbers);
// console.log(head);
// tuple means datatype
// let outTuple:[string, number, boolean];
// outTuple = ['Typescript', 20, true]
// outTuple = [50, false, 'Angular']
// console.log(outTuple);
// outTuple.push('Javascript')
// outTuple.push(200)
// console.log(outTuple);
// const ourTupleReadOnly:readonly[string, number, boolean] = ['Ruby', 300, true];
// ourTupleReadOnly.push('Javascript')
// const car:{type:string, modal:string, year:number} = {
//      type : 'Toyota',
//      modal : 'Carnival', //
//      year : 2005  //
// }
// car.type = 'Maruti'
// car.type = 2;
// console.log(car);
var cars = {
    type: 'Huyndai'
};
cars.milage = 2000;
function gettime() {
    return new Date().getTime();
}
// we use void keyword when function does not return any value.
// function printHello ():void {
//     console.log("Hello World")
// }
// function add (a:number, b:number, c?:number) {
//     return a+b+(c||0)
// }
// // optional handling if c is not there.
// console.log(add(6, 8, 8));
// // default parameter
// function pow (value:number, exponent:number=2) {
//     return value ** exponent
// }
// console.log(pow(5));
// function restPara (a:number, b:number, ...rest:number[]) {
//      return a+b+rest.reduce((p,c) => p+c, 0)
// } 
// console.log(restPara(6, 8, 3));
// // how can we will apply the type of particular object
// // blueprint when car features same for each car
// // class Person{
// //     name:string;
// // }
// // const person = new Person();
// // person.name = 'Typescript'
// // console.log(person);
// // using constructer
// class Person {
//     public constructor(private name:string){}
//     public getName():string {
//          return this.name
//     }
// }
// const person = new Person('Typescript Value');
// console.log(person.getName());
// Oops 
// class newCar {
//      color:string;
//      speed:number;
//      acclerate():void{
//         this.speed+= 10
//      }
// }
// function main():void{
//     const myCar = new newCar();
//     myCar.color = 'Red'
//     myCar.speed = 100
//     myCar.acclerate();
//     console.log(`my car's color is ${myCar.color} and speed is ${myCar.speed}`)
// }
// main()
// class bankAccount {
//     private balance:number = 0;
//     constructor(intialBalance:number=0){
//          this.balance = intialBalance;
//     }
//     public getBalance ():number {
//          return this.balance;
//     }
//     public deposit(amount:number):void{
//         if(amount > 0){
//            this.balance += amount
//         }
//     }
// }
// function main():void {
//    const bank = new bankAccount(1000)
//    console.log("Previous balance is : ", bank.getBalance())
//    bank.deposit(5000)
//    console.log("Current balance is : " , bank.getBalance());
// }
// main()
// encapsulation ---  bankaccount savingaccount
// inheritence -- employe, manager, developer
// plymorphism -- circle, rec, tri, calarea, shape in array
//  inheritence
var employee = /** @class */ (function () {
    function employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    employee.prototype.work = function () {
        console.log(" ".concat(this.name, " is working as ").concat(this.position, ". "));
    };
    employee.prototype.getDetails = function () {
        return "name is ".concat(this.name, " age is ").concat(this.age, " and works as ").concat(this.position, ".");
    };
    return employee;
}());
var manger = /** @class */ (function (_super) {
    __extends(manger, _super);
    function manger(name, age, position, teamsize) {
        var _this = _super.call(this, name, age, position) || this;
        _this.teamsize = teamsize;
        return _this;
    }
    manger.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", teamSize: ").concat(this.teamsize);
    };
    manger.prototype.meeting = function () {
        console.log("".concat(this.name, " will conduct meeting."));
    };
    return manger;
}(employee));
var developer = /** @class */ (function (_super) {
    __extends(developer, _super);
    function developer(name, age, position, pogramingLanguage) {
        var _this = _super.call(this, name, age, position) || this;
        _this.programingLanguage = pogramingLanguage;
        return _this;
    }
    developer.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " and programingLanguage is ").concat(this.programingLanguage, " ");
    };
    developer.prototype.work = function () {
        console.log("".concat(this.name, " writing a code in the programing language ").concat(this.programingLanguage));
    };
    return developer;
}(employee));
var em = new employee('Anjali', 20, 'lead');
em.work();
console.log(em.getDetails());
var mgr = new manger('Steve', 25, 'Manager', 10);
mgr.meeting();
console.log(mgr.getDetails());
mgr.work();
var dev = new developer('Sara', 23, 'Software developer', 'Typescript');
console.log(dev.getDetails());
dev.work();
// polymorphism 
// super -- super is used to extract a parent class into subclass.
var shape = /** @class */ (function () {
    function shape() {
    }
    shape.prototype.calculateArea = function () {
        return 0;
    };
    shape.prototype.isShape = function () {
        console.log('The is generic shape.');
    };
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    circle.prototype.isShape = function () {
        console.log('this is circle.');
    };
    return circle;
}(shape));
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(length, width) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    rectangle.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    rectangle.prototype.isShape = function () {
        console.log('this is rectangle.');
    };
    return rectangle;
}(shape));
var triangle = /** @class */ (function (_super) {
    __extends(triangle, _super);
    function triangle(base, height) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    triangle.prototype.calculateArea = function () {
        return 0.5 * this.base * this.height;
    };
    triangle.prototype.isShape = function () {
        console.log('this is triangle.');
    };
    return triangle;
}(shape));
var shapes = [
    new circle(5),
    new triangle(6, 3),
    new rectangle(4, 8)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var key = shapes_1[_i];
    key.isShape();
    console.log("Area is : ".concat(key.calculateArea().toFixed(2), "\n"));
}
// encapsulation
var bankAccount = /** @class */ (function () {
    function bankAccount(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited : ".concat(amount, " and NewBalance : ").concat(this.balance));
        }
        else {
            console.log('Deposit is invalid.');
        }
    };
    bankAccount.prototype.logTransaction = function (message) {
        console.log("Transaction log", message);
    };
    return bankAccount;
}());
var savingaccount = /** @class */ (function (_super) {
    __extends(savingaccount, _super);
    function savingaccount(holder, accNo, balance) {
        return _super.call(this, holder, accNo, balance) || this;
    }
    savingaccount.prototype.showInfo = function () {
        console.log("AccNo : ".concat(this.accountNumber));
    };
    return savingaccount;
}(bankAccount));
var myAccount = new bankAccount('Anjali', '53322236775', 10000);
console.log(myAccount.accountHolder);
myAccount.deposit(2000);
console.log(myAccount.getBalance());
var val;
val = 'Anjali';
console.log(val);
val = 20;
console.log(val);
var Values = {
    name: 'Anjali',
    age: 20
};
console.log(Values);
var variable = {
    name: 'Typescript',
    age: 25
};
console.log(variable);
// let sym1 = Symbol('course');
// let sym2 = Symbol('price');
// let details:Record<symbol, any> = {
//      [sym1] : 'Angular',
//      [sym2] : 5999 
// }
// console.log(details);
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Banana"] = 0] = "Banana";
    Fruits[Fruits["Apple"] = 1] = "Apple";
    Fruits[Fruits["Mango"] = 2] = "Mango";
})(Fruits || (Fruits = {}));
;
var fruit = Fruits.Banana;
console.log(Fruits[fruit]);
var Strings;
(function (Strings) {
    Strings["Vegetable"] = "Healthy";
    Strings["Fruits"] = "Vitamins";
    Strings["FastFood"] = "Unhealthy";
})(Strings || (Strings = {}));
var food = Strings.Vegetable;
console.log(Strings.Vegetable);
var vals = {
    course: 'Typescript',
    price: 399
};
console.log(vals);
var details;
details = 'Anjali';
console.log(details);
details = 20;
console.log(details);
details = true;
console.log(details);
var obj = {
    name: 'Sam',
    age: 'Twenty',
    //  age : 20
};
console.log(obj);
// overloading
var calculater = /** @class */ (function () {
    function calculater() {
    }
    calculater.prototype.add = function (a, b) {
        return a + b;
    };
    return calculater;
}());
var calc = new calculater();
console.log(calc.add(8, 9));
console.log(calc.add('Hello', ' World'));
//  getter and setter
var employe = /** @class */ (function () {
    function employe(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Object.defineProperty(employe.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (newName.length > 0) {
                this.name = newName;
            }
            else {
                console.log('Invalid Name');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(employe.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (amount) {
            if (amount > 0) {
                this.salary = amount;
            }
            else {
                console.log('Invalid Salary');
            }
        },
        enumerable: false,
        configurable: true
    });
    employe.prototype.showInfo = function () {
        console.log("Employe name is ".concat(this.name, " and salary is ").concat(this.salary));
    };
    return employe;
}());
var emy = new employe('Anjali', 20000);
console.log(emy.Name);
emy.Salary = 30000;
console.log(emy.Salary);
emy.Name = '';
emy.Salary = -1000;
emy.showInfo();
var per = {
    name: 'Anjali',
    age: 20,
    speak: function () {
        console.log("Hello my name is ".concat(this.name));
    }
};
per.speak();
var car = /** @class */ (function () {
    function car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    car.prototype.drive = function () {
        console.log("".concat(this.brand, " is driving at speed ").concat(this.speed));
    };
    return car;
}());
var my = new car('Toyota', 200);
my.drive();
var circles = {
    color: 'Red',
    radius: 20
};
console.log(circles);
var wo = {
    id: 5,
    name: 'Sam',
    //  department : 'Ministry'
};
// wo.id = 3 
console.log(wo);
var sum = function (x, y) {
    return x + y;
};
console.log(sum(8, 3));
var creaditCard = /** @class */ (function () {
    function creaditCard() {
    }
    creaditCard.prototype.pay = function (amount) {
        console.log("".concat(amount, " using with creditCard."));
    };
    return creaditCard;
}());
var upiPayment = /** @class */ (function () {
    function upiPayment() {
    }
    upiPayment.prototype.pay = function (amount) {
        console.log("".concat(amount, " using upiPayment."));
    };
    return upiPayment;
}());
var cr = new creaditCard();
cr.pay(2000);
var upi = new upiPayment();
upi.pay(5000);
// Abstraction
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.stopEngine = function () {
        console.log("".concat(this.brand, " Engine stopped."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.startEngine = function () {
        console.log("".concat(this.brand, " car engine started with key."));
    };
    return Car;
}(Vehicle));
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bike.prototype.startEngine = function () {
        console.log("".concat(this.brand, " bike engine starts with self-start."));
    };
    return bike;
}(Vehicle));
var EleScooter = /** @class */ (function (_super) {
    __extends(EleScooter, _super);
    function EleScooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EleScooter.prototype.startEngine = function () {
        console.log("".concat(this.brand, " scooter engine started with powered on."));
    };
    return EleScooter;
}(Vehicle));
var veh = [
    new Car('Totyota'),
    new bike('Yamaha'),
    new EleScooter('Ola')
];
for (var _a = 0, veh_1 = veh; _a < veh_1.length; _a++) {
    var ve = veh_1[_a];
    ve.startEngine();
    ve.stopEngine();
}
var paymentCredit = /** @class */ (function () {
    function paymentCredit() {
    }
    paymentCredit.prototype.processPayment = function (amount) {
        console.log("process credit card of ".concat(amount));
    };
    return paymentCredit;
}());
var paymentPal = /** @class */ (function () {
    function paymentPal() {
    }
    paymentPal.prototype.processPayment = function (amount) {
        console.log("Process of pal ".concat(amount));
    };
    return paymentPal;
}());
var paymentUpi = /** @class */ (function () {
    function paymentUpi() {
    }
    paymentUpi.prototype.processPayment = function (amount) {
        console.log("Process upi of ".concat(amount));
    };
    return paymentUpi;
}());
function makePayment(processor, amount) {
    processor.processPayment(amount);
}
makePayment(new paymentCredit(), 2000);
makePayment(new paymentPal(), 5000);
makePayment(new paymentUpi(), 10000);
