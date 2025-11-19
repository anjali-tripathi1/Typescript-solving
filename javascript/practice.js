// let name = 'Anjali';
// console.log(name);

// const email = 'anjali@.com';
// console.log(email);

// const age = 20

// let city = 'Mumbai'
// console.table([name, age, email, city]);

// let value1 = 'Hello'
// let value2 = 20
// let value3 = true
// let value4 = null
// let value5 = undefined
// let value6 = 3434222222222222222222211556666n
// let value7 = Symbol('key123')
// let value8 = false
// let value9 = ""
// let value10 = 0

// console.log(typeof value1);
// console.log(typeof value2);

// console.log(typeof(value1));
// console.log(typeof(value2));



// console.table([typeof value1, typeof value2, typeof value3, typeof value4, typeof value5, typeof value6, typeof value7 ]);

// console.table([value1, value2, value3, value4, value5, value6, value7]);

// const valueInBoolean1 = ( value1)
// const valueInBoolean2 = ( value2)
// const valueInBoolean3 = ( value3)
// const valueInBoolean4 = ( value4)
// const valueInBoolean5 = ( value5)
// const valueInBoolean6 = ( value6)
// const valueInBoolean7 = ( value7)
// const valueInBoolean8 = (value8)
// const valueInBoolean9 = (value9)
// const valueInBoolean10 = (value10)

// console.log(typeof valueInBoolean1, "and value is : ", valueInBoolean1);
// console.log(typeof valueInBoolean2, "and value is : ", valueInBoolean2);
// console.log(typeof valueInBoolean3, "and value is : ", valueInBoolean3);
// console.log(typeof valueInBoolean4, "and value is : ", valueInBoolean4);
// console.log(typeof valueInBoolean5, "and value is : ", valueInBoolean5);
// console.log(typeof valueInBoolean6, "and value is : ", valueInBoolean6);
// console.log(typeof valueInBoolean7, "and value is : ", valueInBoolean7);
// console.log(typeof valueInBoolean8, "and value is : ", valueInBoolean8);
// console.log(typeof valueInBoolean9, "and value is : ", valueInBoolean9);
// console.log(typeof valueInBoolean10, "and value is : ", valueInBoolean10);


// console.log("1" + 2 +3);
// console.log("1" + (-2) +3);
// console.log("1" - (-2) - 3);
// console.log("1" - (-2) + "3");

// let pronounce = 'Anjali Tripathi'
// console.log(pronounce.slice(0, -9));
 
// let array = [2, 6, 8, 5, 6]
// // const index = array.indexOf(6)
// // if(index !== -1){
// //      array.splice(index + 1, 0, 'Anjali')
// // } 

// let string = "Apple, banana, Grapes"
// console.log(string.split(' ', 2));
// console.log(string.includes('Apple'));


// let sentence = 'A Fox is jumping to the tree.'
// console.log(sentence.startsWith('A'));
// console.log(sentence.endsWith('tree.', 29));
// console.log(sentence.lastIndexOf('t'));
// console.log(sentence.charCodeAt(15));
// console.log(sentence.codePointAt(15));
// console.log(sentence.toLocaleLowerCase());
// console.log(sentence.match(/name/));

// let nums = 255.3552;
// console.log(nums.toPrecision(2));
// console.log(Math.round(4.3));
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.min(6,4,3, 84));
// console.log(Math.pow(2,2));
// console.log(Math.sqrt(256));
// console.log(Math.trunc(835.22));
// // console.log(Math.E());

// const max = 50;
// const min = 40;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// let date = new Date(2025, 7, 13, 8, 35)
// console.log(date.toLocaleString());

// let date2 = new Date("2026-5-21")
// console.log(date2.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);

// const dates = new Date()
// console.log(dates.getTime());

// console.log(Math.floor(Date.now() / 1000));
// console.log(dates.getMonth());
// console.log(dates.getFullYear());
// console.log(dates.getUTCDay());

// console.log(dates.toLocaleString('default', {
//      weekday:'long',
//      month : 'long',
//      year : '2-digit'
// }));


// let name1 = 'Anjali'
// let name2 = name1
// name2 = 'Saroj'
// console.log(name1);
// console.log(name2);


// let user1 = {
//      email : 'anjali@.com',
//      id : 1
// }

// let user2 = user1
// user2.email = 'Saroj@.com'

// console.log(user2);
// console.log(user1);

// const myArray = ['Pokemon', 'Batman', 'Spiderman', 'Marvels', 'Heroes']
// const index =  myArray.indexOf('Pokemon')
// if(index !== -1){
//      myArray.splice(index, 1)
// }

// const add = myArray.indexOf('Heroes')
// if(add !== -1){
//      myArray.splice(add + 1, 0, 'Shaktiman')
// }

// let join = myArray.join(',')
// console.log(join);

// const arr1 = ['dodo', 'tuffy', 'tommy']
// const arr2 = ['dicu', 'dumdum', 'drink']

// const concat = arr2.concat(arr1)
// console.log(concat);

// const spread = [...arr2, ...arr1]
// console.log(spread);

// const insideArray = [1, 2, 3, [3, 4, [5, 6], [6, 8, 9]]]
// console.log(insideArray.flat(2));

// console.log(Array.isArray('Anjali'));
// console.log(Array.from(['Anjali', 123, {name : 'Sam', age : 20}]));

// let val1 = 'Show'
// let val2 = 200
// let val3 = true
// let val4 = null
// let val5 = undefined
// let val6 = Symbol('Hello345')
// let val7 = {
//       course : 'Java',
//       price : 899
// }
// let val8 = ['dummy', 65]
// let val9 = function () {
//      console.log('Hello World')
// }

// console.log(Array.of(val1, val2, val3, val4, val5, val6, val7, val8, val9));

// const sym = Symbol('key123')

// let objects = {
//       "firstname" : 'Anjali',
//       "lastname" : 'Tripathi',
//       location : 'Banda',
//       [sym] : 'lock345',
//       describe : function () {
//           return "Hello World"
//       }
// }


// objects.firstname = 'Saroj'
// // Object.freeze(objects)
// objects.firstname = 'Aditya'

// objects.show = function () {
//       return 'Hi Gyus' + this.name
// }

// console.log(objects);
// console.log(objects.show('Anjali'));

// function hello (name, age) {
//      this.name = name
//      this.age = age
//      this.sayHello = function () {
//           console.log(`Applicant name is ${name} and Age is ${age}`);
//      }
// }

// const person = new hello('Karan', 25)
// person.sayHello()

// const tinderUser = {}
// tinderUser.course = 'Javascript'
// tinderUser.price = 899
// console.log(tinderUser);

// const object = {
//    courses : {
//        course1 : 'Js',
//        course2 : 'Java',
//       prices : {
//           price1 : 599,
//           price2 : 899
//       } 
//    }
     
// }

// console.log(object);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"} 
const obj3 = {5: "a", 6: "b"}

const obj5 = Object.assign(obj1, obj2, obj3)
console.log(obj5);

const val1 = {name1 : 'Anjali', age1 : 20}
const val2 = {name2 : 'Sam', age2 : 22}
const val3 = {name3 : 'Sara', age3 : 23} 

const obj4 = Object.assign({}, val1, val2, val3)
console.log(obj4)

const obj6 = {...val1, ...val2, ...val3}
console.log(obj6);

const ids = [
    {
        id : 1,
        email : 'anjali@.com'
    },

     {
        id : 2,
        email : 'anjali@.com'
    },

     {
        id : 3,
        email : 'anjali@.com'
    },


]

console.log(ids[2].id);

const obj = {
    name : 'Anjali',
    age : 20,
    email : 'anjali@.com'
}

console.log(Object.entries(obj));

console.log(obj.hasOwnProperty('name'));

const courses = {
     course : 'Angular',
     price : 2999
} 

const {course : cour, price : p} = courses
console.log(p);


function loginUserMessage (username) {
    //  if(username === undefined){
    //      return `Please Enter your Username`
    //  } 

     if(!username){
        return `Please Enter your Username`
     }

     return `Your Username is ${username}`
}

console.log(loginUserMessage('Anjali'));
console.log(loginUserMessage());
console.log(loginUserMessage('Sara'));
 
function calculatePrice (...nums) {
      return "Your Price is : ", nums.reduce((acc, curr) => acc + curr)
}
     


console.log(calculatePrice(200, 400, 500, 200, 4500, 10000));

let show = {
    username : 'Sara',
    password : 12345
}

function anyObj (obj) {
    console.log(`Username is ${obj.username} and passcode is ${obj.password}`)
}

anyObj({
    username : 'Steve',
    password : 'steve123'
})

let getArray = [1, 6, 5, 9, 23]
function showArray (arr) {
      console.log(arr[3])
}

showArray(['Sam', 'Sara', 'Steve', 'Austring', 'Mac'])

var a = 300 
// let b = 500
// const c = 800
if(true){
   var a = 10
   let b = 20
   const c = 30

   
}

console.log(a);
// console.log(b);
// console.log(c);
   
function one () {
    let username = 'Anjali'
    return function () {
        let website = 'YouTube'
        console.log(username , ", " + website)
    }

}

const myFun = one()
myFun();
 
if(true){
   let course = 'Js'
   if(course === 'Js'){
      let price = 399
      console.log(course , " " + price)
   } else {
     console.log('the credentials are not correct.')
   }
} 

console.log(addOne(7, 8, 5));
 

function addOne (a, b, c) {
     return a+b+c 
}

const users = {
    course : 'Java',
    price : 599,
    welcomeMessage : function () {
         console.log(`Welcome you can access ${this.course}`)
         console.log(this)
    }
}

users.course = 'Angular'

function context () {
    let username = 'Anjali'
    console.log(this.username);
    console.log(this);
    
}

context()

const addNum = (a, b) => {return a + b}
console.log(addNum(6, 8));

const multiply = (a, b) => a * b 
console.log(multiply(6, 8));

const divide = (a,b) => (a / b)
console.log(divide(25, 5));

const showing = () => ({username : 'Anjali', age : 20})
console.log(showing().age);

 (function chai () {
      console.log("DB Connected.");
      
  }) ();

  ((name) => {
      console.log("DB 2 Connected " + name);
  }) ('Anjali')
  
  const username = true
  const temprature = 40
  if(username === true){
       console.log("User Logged In.");
    } else {
         console.log('not Logged')
    }

  if(temprature <= 41){
       console.log("Temp is 41.");
  } else {
      console.log("Temp is less than 41")
  }

  const count = 100
  if(count <= 200){
      const power = 'fly'
      console.log(`Bird is ${power}`)
  } else {
     console.log('Not matched')
  }

  const balance = 500
  if(balance < 500){
       console.log('balance is less than 500.')
  } else if (balance > 500) {
      console.log('balance is more than 500.')
  } else if (balance === 500) {
      console.log('balance is 500.')
  } else {
     console.log('No case Matched.')
  }


  const debitCard = true
  const creditCard = true
  if(debitCard && creditCard && 2==='2'){
       console.log('you are credited.')
  } else {
      console.log("you haven't enfough information.")
  }

  const loginWithGoogle = true 
  const loginWithEmail = false

  if(loginWithGoogle || loginWithEmail){
      console.log('you are Logged.')
  } else {
     console.log('you are not Logged.')
  }

  let value1 = 5 ?? 10
  value1 = null ?? 20
  value1 =  undefined ?? 10
  value1 = null ?? undefined ?? 15
  console.log(value1);

  const key  = 2
  switch (key) {
      case 1:
        console.log('January') 
       break
       
      case 2:
        console.log('Febuary')
       break
       
      case 3:
        console.log('March')
       break
       
       default : 
        console.log("Not Matched")
       break 
  }

  let vals = ' '
  let emptyArray = []
  let emptyObject = {}
  if(vals){
      console.log('Your value is truthy.');
  } else {
      console.log('Your value is falsy.');
  }

  if(emptyArray.length === 0){
        console.log('Your Array is Empty.');
  }

  if(Object.keys(emptyObject).length === 0){
       console.log('Your object is empty.');
  }

 for(let i = 1; i <= 10; i++){
      if(i == 5){
          console.log('5 is the best number.');
      }

      console.log(i)
 }

 for(let i = 1; i <= 5; i++){
       console.log("start from ", i);
      for(let j = 1; j <= 10; j++){
           console.log(`${i} * ${j} =  ${i * j}`)
      } 
 }

 const loopArray = ['Superman', 'Batman', 'Spiderman', 'Shaktiman', 'Samurai']
 for(let i = 0; i < loopArray.length; i++){
       console.log(loopArray[i]);
       
 }

 for(let i = 1; i <= 20; i++){
       if(i == 5){
           console.log("Detected 5")
           break
       }

       console.log(i)
 }

 for(let i = 1; i <= 10; i++){
     if(i == 5){
         console.log('5 is skipped.')
         continue 
     }
      
      console.log(i)

 }

 let index = 1
 while(index <= 10){
     console.log(index)
     index += 3
 }

 let array = ['Sara', 'Sam', 'Steve', 'Samar', 'Sammy']
 let i = 0;
 while(i < array.length){
       console.log(array[i])
       i++
 }

 let j = 20;
 do {
    console.log(j)
    j++
 } while (j <= 30)

 let k = 11;
 do {
    console.log(k)
    k++
 }  while(k <= 10) 

 let arrays = "Hello World!"
 for(const key of arrays){
      console.log(key)
 }

//  function isEven (nums) {
//        return nums % 2 === 0
//  }

//  function filter (nums, callback) {
//      let arr = []
//      if(callback(nums)){
//         arr.push(nums)
//      }
//  }

//  console.log(filter(3, 5, 2, 4, 8, isEven));
  

function first (f, l) {
    // console.log(f+l); 
    return f+l 
}

function second () {
     let result = first('Angular, Java')
     return result
}

second()

// const sum = function myFun2 () {
//    return "Hello"
// }

// console.log(sum());

// function sum (x, y) {
//    let result = x+y
//    return result
// }

// let r = sum(7, 3)
// console.log(r);

// function sum () {
//     let a = 10
//     let b = 20
//     let result = a * b 
//     return result
// }

// console.log(sum());

// const num = function () {
//     return 5;
// }

// console.log(num()*4);


const sum = function () {
    const decimal = function () {
        return 5;
    }

    return decimal();
}

console.log(sum()+9);

const multiply2 = function (a, b, c) {
     let result = a*b*c 
     return result
}

console.log(multiply2(5, 6, 8));

function arg () {
    let str = ""
    for(let i = 0; i < arguments.length; i++){
         str += arguments[i]
    }

    return str
}

console.log(arg('Hi, guys Welcome to New World'));

function update (value3, value4) {
     value3 = 30;
     value4 = 50;
     return (value3+value4)
}

var value3 = 'Hello'
var value4 = 'World'
let values = update(value3, value4)
console.log(values);
console.log(value3, value4);

function update_Fun () {
     object1.domain = 'www.gmail.com'
}

let object1 = {
    domain :'www.healthMagus.com'
}

console.log(object1.domain);
update_Fun(object1)
console.log(object1.domain);

function outer (str1, str2) {
    let string;
    string = str1 + str2 
    return string
}

function inner () {
    let result = outer('Hello ', 'This is new Project.')
    return result
}

console.log(inner());

function multi (a, b) {
     const decimal = function () {
          return a+b 
     }

     return decimal()
}


console.log(multi(6,3));


function arg2 () {
    let str = []
    for(let i = 0; i < arguments.length; i++){
         str += arguments[i]; 
    }

    return str;
}

console.log(arg2([4, 5, 8, 2, 3, 10, 15]));

function email_id () {
     object.email = 'aditya@.com'
}

let object = {
    email : 'anjali@.com'
}

console.log(object.email);
email_id(object)
console.log(object.email);

function adds (num1, num2) {
     num1 = 5
     num2 = 10 
     return num1 * num2
}

let num1 = 'Hey'
let num2 = ' Guys'
console.log(adds())
console.log(num1 + num2);


const map = new Map()
map.set('In', 'India')
map.set('Mu', 'Mumbai')
map.set('In', 'India')
map.set('Sw', 'Switzerland')

console.log(map);
for(const key of map){
     console.log(key)
}


function addOne (p=20, q=13) {
     return p+q 
}

console.log(addOne(5, 7));
console.log(addOne());

function multiAdd (p=3, q=p*2, w=p+q) {
      return p*q*w   
}

console.log(multiAdd());
console.log(multiAdd(5, undefined));
console.log(multiAdd(undefined));

function getNum () {
    return 5;
}

function addNums (p=32, q=getNum()) {
      return p+q 
}

console.log(addNums(undefined));
console.log(addNums(15, 25));
console.log(addNums());
 
const fun = new Function("p ", "q", "return p*q" )
console.log(fun(8, 8));

console.log(host1(6, 2));
 
function host1 (x, y) {
    return x+y 
}

print_Message('Bottom')

function print_Message (pos) {
    console.log(pos)
}

print_Message('Top')


// var with hoisting no problem and let with intizalition problem.
function test () {
   x=10;
   console.log(x);
   var x;
}

test()

// self invoking function

const arrow = (x, y) => {
    let multi = x/y 
    console.log(multi);
}
arrow(35, 5);

// const multiAdds = (x) => {
//     let x;
//     console.log(20/x);
// }
// multiAdds(5)


let isMultiply = false
const myFunc = isMultiply ? () => {
     let res = 5 * 5 
     console.log("Multiplication value : ", res);
     
} : () => {
    let res = 5 + 5 
    console.log("Addition value : ", res);
}

myFunc()

const mul = (a=10, b=25) => console.log(a+b);
mul(5,10)
mul(7)
 
function car (name, color, body) {
      this.name = name
      this.color = color
      this.body = body
}

const odCar = new car('Maruti', 'Red', 'Steel Black')
let res = JSON.stringify(odCar)
console.log(res);

let objec = {
     name : 'Anjali',
     getAge : () => {
         return 35;
     }
}

let age = objec.getAge()
console.log(age);


function test () {
    console.log('Function is invoked.');
    
}

test.call()

function printName () {
    console.log('the age of the ' + this.name + ' is ' + this.age )
}

const person1 = {
    name : 'Anjali',
    age : 21
}

const person2 = {
     name : 'Sam',
     age : 22 
}

printName.call(person1)
printName.call(person2)

function printMsg (p1, p2) {
     console.log(this.num1+this.num2+p1+p2)
}

const nums = {
    num1 : 10,
    num2 : 5
}

printMsg.call(nums, 32, 40)

const student = {
      getInform : function () {
           console.log(`welcome, ${this.name} you are ${this.age} eligible for this.`);
           
      }
}

const student1 = {
     name:'Steve',
     age : 25
}

const student2 = {
     name : 'Sara',
     age : 22
}

student.getInform.call(student1)
student.getInform.call(student2)

function showCar () {
    console.log('Hello Gyus Welcome,' + this.name  + this.color + this.company)
}

const car2 = {
    name : 'Audi',
    color : 'Red',
    company : 'CQ'
}

showCar.apply(car2)

function byApply (p1,p2) {
    console.log(this.num1 + this.num2+p1+p2);
    
}

const objects = {
    num1 : 35,
    num2  : 25
}

byApply.apply(objects, [10, 5])

const num = [5, 7, 8, 2, 5, 1, 45]
console.log(Math.max.apply(null, num));
console.log(Math.min.apply(null, num));

//  bind creates a new function with specified this charecter.

function msg (message) {
    console.log(message + this.name)
}

const name = {
    name : 'Anjali'
}

const showmsg = msg.bind(name, 'Hello ')
showmsg()

const point1 = {
    x : 100,
    y : 200
}

const point2 = {
    x : 300,
    y : 400
}

const point3 = {
    x : 500,
    y : 600
}
function cal () {
    console.log(this.x , this.y)
}

const calVals =  cal.bind(point1)
calVals()
const calVals2 =  cal.bind(point2)
calVals2()
const calVals3 =  cal.bind(point3)
calVals3()

function bindMulti (x, y) {
    console.log(x*y)
}
const multiByTwo = bindMulti.bind(null, 2)
multiByTwo(5)


// closure
let count2 = 100
function calcount () {
    count2 = count2 - 1
    console.log('the value of ' + count2)
}
// count2 = count2 - 1
// console.log(count2)   // 99
calcount()           // 98
calcount()           // 97
calcount()           // 96

function outer () {
     let count = 100
     return function inner () {
          count = count - 1
          console.log('the value ', + count)
     }
}

const co = outer()
co()
co()
co()

function name3 () {
    let name = 'Anjali'
    return function firstname () {
         console.log(name + ' Tripathi')
        
    } 
}

const ret = name3()
ret()


// spread operator 
// 1. Spread Operator (...)
// Purpose: To unpack (spread) elements from an array, object, or iterable into individual elements.
// 2. Rest Operator (...)
// Purpose: To collect the remaining elements into an array or object.

function sums (...nums) {
    let sum = 0
    for(let i = 0; i < nums.length; i++){
         sum += nums[i]
    }
    return sum
}

console.log(sums(1, 4, 5, 8, 10));

let num3 = [2, 3, 4]
function multiple (a, b, c) {
     return a*b*c 
}

console.log(multiple(...num3));
 
let color = ['red', 'color', 'yellow']
let newColors = ['Purple', ...color, 'Black']
console.log(newColors)
  
function printMe ({brand, price}) {
    console.log('the brand and price is ' + brand, " " + price)
}

const watch = {
    brand : 'TATA',
    price : 10000,
    currency : 'INR'
}

printMe(watch)

// Rest operator

function isEven (num) {
    return num % 2 === 0
}

function filter (numbers, fn) {
    let arr = []
    for(const num of numbers){
          if(fn(num)){
              arr.push(num)
          }
    }

    return arr
   
}

let numbers = [3, 6, 8, 2, 8]
console.log(filter(numbers, isEven));


function isOdd (num) {
    return num % 2 !== 0
}

function filter2 (nums, callback) {
     let arr = [];
     for(const key of nums){
           if(callback(key)){
                arr.push(key)
           }
     }

     return arr
}

let number = [3, 1, 4, 6, 5, 8, 2]
console.log(filter2(number, isOdd)); 
