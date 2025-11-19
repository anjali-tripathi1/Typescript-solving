// let username:string = 'Anjali'
// console.log(username);

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

const cars:{type:string, milage?:number}={
    type : 'Huyndai'
}
cars.milage = 2000;

function gettime():number{
    return new Date().getTime()
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

class employee {
    name:string;
    age:number;
    position:string;
    constructor(name:string, age:number, position:string){
         this.name = name;
         this.age = age;
         this.position = position;
    }

    work():void{
        console.log(` ${this.name} is working as ${this.position}. `)
    }

    getDetails():string{
        return `name is ${this.name} age is ${this.age} and works as ${this.position}.`
    }
}

class manger extends employee{
     teamsize:number;
     constructor(name:string, age:number, position:string, teamsize:number){
            super(name, age, position);
            this.teamsize = teamsize;
     }

     getDetails():string{
          return `${super.getDetails()}, teamSize: ${this.teamsize}`
     }

     meeting():void{
         console.log(`${this.name} will conduct meeting.`)
     }
}

class developer extends employee{
     programingLanguage:string;
     constructor(name:string, age:number, position:string, pogramingLanguage:string){
         super(name, age, position);
         this.programingLanguage = pogramingLanguage;
     }

     getDetails():string {
           return `${super.getDetails()} and programingLanguage is ${this.programingLanguage} `
     }
 
     work():void{
         console.log(`${this.name} writing a code in the programing language ${this.programingLanguage}`)
     }
}

const em = new employee('Anjali', 20, 'lead')
em.work()
console.log( em.getDetails());
const mgr = new manger('Steve', 25, 'Manager', 10)
mgr.meeting()
console.log(mgr.getDetails());
 mgr.work()
const dev = new developer('Sara', 23, 'Software developer', 'Typescript')
console.log(dev.getDetails());
 dev.work()


// polymorphism 
// super -- super is used to extract a parent class into subclass.

class shape{
    calculateArea():number{
        return 0;
    }

    isShape():void{
        console.log('The is generic shape.')
    }
}

class circle extends shape{
    radius:number;
    constructor(radius:number){
       super();
       this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI*this.radius*this.radius
    }

    isShape(): void {
        console.log('this is circle.')
    }
}

class rectangle extends shape{
    length:number;
    width:number;
    constructor(length:number, width:number){
       super();
       this.length = length;
       this.width = width;
    }

    calculateArea():number{
        return this.length*this.width
    }

    isShape(): void {
        console.log('this is rectangle.')
    }
}

class triangle extends shape{
    base:number;
    height:number;
    constructor(base:number, height:number){
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return 0.5*this.base*this.height
    }

    isShape(): void {
        console.log('this is triangle.')
    }
}

const shapes:shape[] = [
    new circle(5),
    new triangle(6, 3),
    new rectangle(4, 8)
]

for(const key of shapes){
    key.isShape();
    console.log(`Area is : ${key.calculateArea().toFixed(2)}\n`)
}


// encapsulation

class bankAccount{
    public accountHolder:string;
    protected accountNumber:string;
    private balance:number;
    constructor(accountHolder:string, accountNumber:string, balance:number){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public getBalance():number{
        return this.balance;
    }

    public deposit (amount:number):void {
       if(amount > 0){
           this.balance += amount
           console.log(`Deposited : ${amount} and NewBalance : ${this.balance}`)
       } else {
           console.log('Deposit is invalid.')
       }
    }

    private logTransaction (message:string):void{
         console.log("Transaction log", message)
    }
    

}

class savingaccount extends bankAccount{
    constructor(holder:string, accNo:string, balance:number){
        super(holder, accNo, balance);
    }

    public showInfo ():void {
        console.log(`AccNo : ${this.accountNumber}`)
    }
}

const myAccount = new bankAccount('Anjali', '53322236775', 10000)
console.log(myAccount.accountHolder);
myAccount.deposit(2000);
console.log(myAccount.getBalance());
 
let val : string | Number;
val = 'Anjali'
console.log(val);
val = 20;
console.log(val);

 
type A = {name:string};
type B = {age:number};
type C = A & B;
let Values:C = {
    name : 'Anjali',
    age : 20
}

console.log(Values);

let variable:{name:string} & {age:number} = {
     name: 'Typescript',
     age : 25
}

console.log(variable);

// let sym1 = Symbol('course');
// let sym2 = Symbol('price');
// let details:Record<symbol, any> = {
//      [sym1] : 'Angular',
//      [sym2] : 5999 
// }

// console.log(details);


enum Fruits {Banana, Apple, Mango};
let fruit:Fruits = Fruits.Banana;
console.log(Fruits[fruit]);

enum Strings {
    Vegetable = 'Healthy',
    Fruits = 'Vitamins',
    FastFood = 'Unhealthy'
}

let food:Strings = Strings.Vegetable; 
console.log(Strings.Vegetable);

type D = {course:string};
type E = {price:number};
type add = D & E;
let vals:add = {
    course : 'Typescript',
    price : 399
}
console.log(vals);

let details:string | number | boolean;
details = 'Anjali';
console.log(details);
details = 20;
console.log(details);
details = true;
console.log(details);

let obj:{name:string, age:string | number} = {
     name :'Sam',
     age : 'Twenty',
    //  age : 20
}

console.log(obj);

// overloading
class calculater{
    add(a:number, b:number):number;
    add(a:string, b:string):string;

    add(a:any, b:any):any{
        return a+b;
    }
}

const calc = new calculater();
console.log(calc.add(8, 9));
console.log(calc.add('Hello', ' World'));
 
//  getter and setter
class employe{
    private name:string;
    private salary:number;
    constructor(name:string, salary:number){
         this.name = name;
         this.salary = salary;
    }

    public get Name():string{
        return this.name;
    }

    public set Name(newName:string){
        if(newName.length > 0){
             this.name = newName;
        } else{
            console.log('Invalid Name')
        }
    }

    public get Salary():number{
        return this.salary;
    }

    public set Salary(amount:number){
         if(amount > 0){
              this.salary = amount;
         } else {
            console.log('Invalid Salary')
         }
    }

    public showInfo():void{
         console.log(`Employe name is ${this.name} and salary is ${this.salary}`)
    }

}

const emy = new employe('Anjali', 20000)
console.log(emy.Name);
emy.Salary = 30000
console.log(emy.Salary);
emy.Name = ''
emy.Salary = -1000
emy.showInfo()

// interface
// using in object

interface person{
    name:string;
    age:number;
    speak():void
} 

const per:person = {
    name : 'Anjali',
    age : 20,
    speak():void{
        console.log(`Hello my name is ${this.name}`)
    }
}

per.speak()

// using in class 

interface vehicle{
    brand:string;
    speed:number;
    drive():void
}

class car implements vehicle{
    brand:string;
    speed:number;
    constructor(brand:string, speed:number){
         this.brand = brand;
         this.speed = speed;
    }

    drive():void{
        console.log(`${this.brand} is driving at speed ${this.speed}`)
    }
}

const my = new car('Toyota', 200)
my.drive()


// using inheritence in interface

interface shapes{
    color:string;
}

interface Circle extends shapes{
     radius:number;
}

const circles:Circle = {
    color : 'Red',
    radius : 20
}

console.log(circles);

// readonly and optional Error Handling
interface worker{
    readonly id:number;
    name:string;
    department?:string;
} 

let wo:worker = {
     id:5,
     name : 'Sam',
    //  department : 'Ministry'
}
// wo.id = 3 
console.log(wo);


// interface takes as an function

interface Add{
    (a:number, b:number):number;
}

let sum:Add = function (x, y) {
     return x+y;
}

console.log(sum(8, 3));


// using interface with polymorphins means with multiple implementation

interface payment{
    pay(amount:number):void
}

class creaditCard implements payment{
     pay(amount: number): void {
          console.log(`${amount} using with creditCard.`)
     }
}

class upiPayment implements payment{
    pay(amount:number):void{
        console.log(`${amount} using upiPayment.`)
    }
}

const cr = new creaditCard()
cr.pay(2000)

const upi = new upiPayment()
upi.pay(5000)

// Abstraction

abstract class Vehicle{
    constructor(protected brand:string){}
    abstract startEngine():void;
    stopEngine():void{
        console.log(`${this.brand} Engine stopped.`)
    }
}

class Car extends Vehicle{
     startEngine(): void {
         console.log(`${this.brand} car engine started with key.`)
     }
}

class bike extends Vehicle{
    startEngine():void{
        console.log(`${this.brand} bike engine starts with self-start.`)
    }
}

class EleScooter extends Vehicle{
    startEngine(): void {
        console.log(`${this.brand} scooter engine started with powered on.`);
        
    }
}

const veh:Vehicle[] = [
    new Car('Totyota'),
    new bike('Yamaha'),
    new EleScooter('Ola')
]

for(const ve of veh){
      ve.startEngine();
      ve.stopEngine();
}


// Abstraction using Interface

interface paymentProcessor{
    processPayment(amount:number):void
}

class paymentCredit implements paymentProcessor{
    processPayment(amount: number): void {
        console.log(`process credit card of ${amount}`)
    }
}

class paymentPal implements paymentProcessor{
    processPayment(amount: number): void {
        console.log(`Process of pal ${amount}`)
    }
}

class paymentUpi implements paymentProcessor{
    processPayment(amount: number): void {
        console.log(`Process upi of ${amount}`)
    }
}

function makePayment (processor:paymentProcessor, amount:number) {
    processor.processPayment(amount);
}

makePayment(new paymentCredit(), 2000)
makePayment(new paymentPal(), 5000)
makePayment(new paymentUpi(), 10000 )


