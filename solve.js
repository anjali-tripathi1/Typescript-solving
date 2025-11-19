// let course:string = 'Angular'
// console.log(course);
// let price:number = 599
// let sentence:string = `Coursename is ${course} and price is ${price}`
// console.log(sentence);
// function add (a:number, b:number):number {
//      return a+b 
// }
// console.log(add(6, 8));
// let val = ['String', 300, true, {name:'Anjali'}, [300, 'on']]
// console.log(val);
// val.push(true)
// // val.length = 0;
// val.splice(0, val.length)
// console.log(val);
// let names:string[] = []
// names.push('Hello')
// // names.push(53)
// console.log(names);
// let see:string = names[0]
// console.log(see);
// let tupels:[string, number, boolean, Object, Function ];
// tupels = ['Hello', 200, true, {age : 20}, function hello () { console.log("Hello World") }]
// // tupels = [400, '']
// tupels.push(45)
// console.log(tupels);
// const only:readonly[string, number, boolean] = ['Anjali', 300, true]
// const car:{type:string, year:number, modal:string} = {
//     type : 'Maruti',
//     year : 2005,
//     modal : 'swift'
// }
// // car.year = 2010;
// car.type = 'Toyoto'
// console.log(car);
// function multiple (a:number, b:number, c?:number):number {
//     return a+b+(c||0)
// }
// console.log(multiple(6, 5));
// function pow (val:number=3, exponent:number=3) {
//      return val**exponent
// }
// console.log(pow(2));
// const cars:{type:string, milage?:number} = {
//     type : 'BMW',
//     // milage : 300
// }
// // cars.milage = 3000;
// console.log(cars);
// const rest = (a:number, b:number, ...restArray:number[]) => {
//       return a+b+restArray.reduce((a, c) => a+c, 0)
// }
// console.log(rest(6, 7, 9, 3, 5));
// function spread (nums:number[]) {
//      return [...nums]
// }
// console.log(spread([6, 7, 4, 5, 3, 5, 8]));
// class shape{
//     calculateArea():number{
//         return 0;
//     }
//     describe():void{
//         console.log('this is generic shape.')
//     }
// }
// class circle{
//      radius:number;
//      constructor(radius:number){
//         this.radius = radius;
//      }
//      calculateArea():number{
//         return Math.PI*this.radius*this.radius;
//      }
//      describe():void{
//          console.log('the is circle.')
//      }
// }
// class rectangle{
//     length:number;
//     width:number;
//     constructor(length:number, width:number){
//         this.length = length;
//         this.width = width;
//     }
//     calculateArea():number{
//         return this.length*this.width
//     }
//     describe():void{
//         console.log('this is rectangle.')
//     }
// }
// class triangle{
//     base:number;
//     height:number;
//     constructor(base:number, height:number){
//          this.base = base;
//          this.height = height;
//     }
//     calculateArea():number{
//         return 0.5*this.base*this.height;
//     }
//     describe():void{
//         console.log('this is triangle.')
//     }
// }
// const shapes:shape[] = [
//     new circle(7),
//     new triangle(5, 8),
//     new rectangle(7, 8)
// ]
// for(const sha of shapes){
//       sha.describe();
//       console.log(`Area is :  ${sha.calculateArea().toFixed(2)}\n`)
// }
// interface person{
//     name:string;
//     age:number;
// }
// let per:person = {name:'Anjali', age:20}
// console.log(per);
// let tuple:[string, number, boolean] = ['1', 4, true]
// class result{
//     name:string;
//     marks:number;
//     totalNumber:number;
//     constructor(name:string, marks:number, totalNumber:number ){
//           this.name = name;
//           this.marks = marks;
//           this.totalNumber = totalNumber;
//     }
//     getScore():number{
//          return (this.marks*100)/this.totalNumber
//     }
//     logResult():void{
//         if(this.marks > 80){
//             console.log(`${this.name}  got 'A+' Grade.`)
//         } else if (this.marks > 70) {
//             console.log(`${this.name} got 'A' Grade.`)
//         } else {
//             console.log(`${this.name} got 'B' Grade.`)
//         }
//     }
// }
// const res = new result('Anjali', 542, 600, );
// res.logResult();
// console.log("Marks is : ", res.getScore().toFixed(2), '%');
var calculater = /** @class */ (function () {
    function calculater() {
    }
    calculater.prototype.add = function (a, b) {
        return a + b;
    };
    return calculater;
}());
var cal = new calculater();
console.log(cal.add(9, 2));
console.log(cal.add('Anjali', 'Tripathi'));
