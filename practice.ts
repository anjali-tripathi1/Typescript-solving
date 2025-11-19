// let nums:number = 20
// console.log(nums);

// class calculator{
//     add(a:number, b:number):number;
//     add(a:string, b:string):string;

//     add(a:any, b:any):any{
//         return a+b;
//     }
// }

// const cala = new calculator()
// console.log(cala.add(13, 12));
// console.log(cala.add('Anjali', ' Tripathi'));
 
// // const sym1 = Symbol('Course')
// // const sym2 = Symbol('Price')
// // let val:Record<symbol, any> = {
// //       [sym1] : 'Angular',
// //       [sym2] : 599
// // }
// // console.log(val);

// class employee{
//     private _name:string;
//     private _salary:number;
//     constructor(_name:string, _salary:number){
//         this._name = _name;
//         this._salary = _salary;
//     }

//     public get name():string{
//         return this._name;
//     }

//     public set name(newname:string){
//         if(newname.length > 0){
//              this._name = newname;
//         } else {
//             console.log(`Invalid name`)
//         }
//     }

//     public get salary():number{
//         return this._salary;
//     }

//     public set salary(amount:number){
//         if(amount > 0){
//              this._salary = amount;
//         } else {
//             console.log('Invalid salary')
//         }
//     }

//     public showInfo():void{
//         console.log(`name is ${this._name} and salary is ${this._salary}`)
//     }
// }

// const em = new employee('Sara', 30000)
// console.log(em.name);
// em.showInfo();
// em.name = ''
// em.salary = 40000;
// console.log(em.salary);

// interface person{
//     name:string;
//     age:number;
//     speak():void
// }

// let per:person = {
//     name: 'Anjali',
//     age : 20,
//     speak():void{
//         console.log(`Hello my name is ${this.name}`)
//     }
// }

// per.speak()
// console.log(per.name);

// interface vehicle{
//     brand:string;
//     speed:number;
//     drive():void
// }

// class car implements vehicle{
//     brand: string;
//     speed: number;
//     constructor(brand:string, speed:number){
//          this.brand = brand;
//          this.speed = speed;
//     }

//     drive(): void {
//         console.log(`${this.brand} is at the speed of ${this.speed} km/hr`)
//     }
// }

// const cr = new car('Maruti', 120)
// cr.drive();

// interface shape{
//     color:string;
// }

// interface circle extends shape{
//      radius :number
// }

// // let cile:circle = {
// //     color: 'Red',
// //     radius : 10
// // }

// // console.log(cile);

// interface worker{
//     readonly id:number;
//     product : string;
//     department?:string;
// }

// let wr:worker = {
//     id:120,
//     product : 'Watch',
//     department : 'Ministry'
// }

// // wr.id = 35
// wr.product = 'Apple'
// wr.department = ''
// console.log(wr);

// interface add{
//     (a:number, b:number):number;
// }

// let sum:add = function (x, y) {
//       return x+y; 
// }

// console.log(sum(5, 4));


// interface payment{
//     pay(amount:number):void
// }

// class payCredit implements payment{
//     pay(amount:number): void {
//          console.log(`credit using of ${amount}`)
//     }
// }

// class payPal implements payment{
//     pay(amount: number): void {
//         console.log(`pal using of ${amount}`)
//     }
// }

// class payUpi implements payment{
//     pay(amount: number): void {
//         console.log(`upi using of ${amount}`)
//     }
// }

// const pcr = new payCredit();
// pcr.pay(10000); 

// const pupi = new payUpi();
// pupi.pay(20000);

// abstract class Vehicle{
//     constructor(protected brand:string){}
//     abstract startEngine():void;
//     stopEngine():void{
//         console.log(`${this.brand} engine stopped.`)
//     }
// }

// class Car extends Vehicle{
//     startEngine(): void {
//         console.log(`${this.brand} car engine starts with key`)
//     }
// }

// class bike extends Vehicle{
//     startEngine(): void {
//         console.log(`${this.brand} bike engine starts with self-start.`)
//     }
// }

// class eleScooter extends Vehicle{
//     startEngine(): void {
//         console.log(`${this.brand} scooter engine powered on silently.`)
//     }
// }

// const vehe:Vehicle[] = [
//     new Car('Toyota'),
//     new bike('Yamaha'),
//     new eleScooter('Ola')
// ] 

// for(const ve of vehe){
//     ve.startEngine();
//     ve.stopEngine();
// }


// interface paymentProcess {
//     processPay(amount:number):void;
// }

// class credit implements paymentProcess{
//     processPay(amount: number): void {
//         console.log(`credit using of ${amount}`)
//     }
// }

// class pal implements paymentProcess{
//     processPay(amount: number): void {
//         console.log(`pal using of ${amount}`)
//     }
// }

// class upi implements paymentProcess{
//     processPay(amount: number): void {
//         console.log(`upi using of ${amount}`)
//     }
// }

// function makePay (processor:paymentProcess, amount:number) {
//      processor.processPay(amount);
// }

// makePay(new credit(), 2000),
// makePay(new pal(), 2000)
// makePay(new upi(), 35000)

// let value:unknown;
// value = 'Hello'
// value = 203
// value = true
// if(typeof value === 'boolean'){
//     console.log(value);
// }

// let union:string | number | boolean;
// union = 'Hello World'
// console.log(union);
// union = 20
// console.log(union);
// union = true;
// console.log(union);

// type A = {course:string}
// type B = {price:number}
// type C = A & B;
// let c:C = {
//     course : 'Angular',
//     price : 5999
// }
// console.log(c);


// let spread:{name:string, age:number}= {
//      name : 'Anjali',
//      age : 20
// }

// let newInform:{age:number, city:string} = {
//       ...spread,
//       age : 21,
//       city : 'Banda'
// }

// console.log(newInform);

// function addVals (num:number):number {
//     let str = num.toString().split('')
//     let red = str.reduce((acc, curr) => acc + parseInt(curr), 0)
//     return red;
// }

// console.log(`sum is :`, addVals(75595));

// let spread1:number[] =  [1, 2, 3]
// let spread2:number[] = [...spread1, 4, 5, 6]
// // let add = [...spread1, ...spread2];
// console.log(spread2);


// interface values{
//     country:string[];
//     language:string[];
    
//     speak():void;
// }

// let val:values = {
//     country : ['India', 'America', 'Japan'],
//     language : ['Hindi', 'English', 'Japanese'],
   
//     speak():void{
//         console.log(`${this.country}'s popular language is ${this.language}`)
//     }
// }


function defaultPara (value:number, expoent:number=2):number {
      return value**expoent;
}

console.log(defaultPara(5, 3));

function spread (nums:string):string{
     return nums;
}
console.log(spread('Hello'));

let obj:{name:string, age:number} = {
    name : 'Anjali',
    age : 20
}

let obj2:{age:number, city:string} = {
      ...obj,
      age : 23,
      city : 'Mumbai'
}

console.log(obj2);

function array (nums:number[]) {
      return nums;
}
console.log(array([3, 4, 5, 6, 6, 7]));


interface payprocess {
      payment(amount:number):void
}

class credit implements payprocess{
      payment(amount: number): void {
          console.log(`pay by credit ${amount}`)
      }
}

class upi implements payprocess{
      payment(amount: number): void {
          console.log(`pay by upi ${amount}`)
      }
}

function process(processor:payprocess, amount:number) {
      processor.payment(amount);
}

process(new credit(), 5000)
process(new upi(), 10000)

interface A {name:string}
interface b {age:number}

interface person extends A, b {}
let per:person = {
      name :' Steve',
      age : 20
}

console.log(per);

// const sym1 = Symbol('course');
// const sym2 = Symbol('price')
// let value:Record<symbol, any> = {
//       [sym1] : 'Angular',
//       [sym2] : 599
// }

// console.log(value);

function sum (nums:number):number {
   let str = nums.toString().split('')
   let sum = 0;
   str.forEach((num) => {
       sum += parseInt(num)
   })

   return sum;
}

console.log(sum(56788));

function checkPrime (num:number){
     if(num <= 1){
         return false;  
     } 
     if(num === 2){
          return true;
     }

     if(num % 2 === 0){
         return false;
     }

     for(let i = 3; i <= Math.sqrt(num); i+=2){
           if(num % i === 0){
               return false;
           }
     }

     return true;
}

console.log(checkPrime(10));


function isPrime(num:number){
    if(num < 2){
        return `${num} is not prime`
    }

    if(num === 2){
          return `${num} is prime.`
    }

    for(let i = 2; i <= num; i++){
           if(num % i === 0){
                 return `${num} is not prime`
           } 
    }

    return `${num} is prime`
}

console.log(isPrime(27));
