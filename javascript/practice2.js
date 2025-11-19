// function show (val1, val2) {
//       val1 = 30;
//       val2 = 50;
//       return val1 + val2
// }

const { version } = require("react");

// let val1 = 'Hello'
// let val2 = 'World'
// let print = show(val1+val2)
// console.log(print);
// console.log(val1 + val2);

const add = (p=10, q=5) => {
    return p*q
}

console.log(add(7, 8));
console.log(add(7));
console.log(add());

function getNum () {
    return 5;
}

function adds (p=15, q=getNum()) {
      return p+q
}

let res = adds(5, 8)
console.log(res);
console.log(adds());

const func = new Function("p", "q", "return p+q")
console.log(func(8, 9));

let multiply = false
const myFun = multiply ? () => {
    console.log("Multiply is : ", 5*3);
} : () => {
    console.log("Divide is : ", 50 / 5);
}

myFun()

function car (name, color, body) {
     this.name = name
     this.color = color
     this.body = body
}

const showCar = new car('TATA', 'Black', 'steel')
let see = JSON.stringify(showCar)
console.log(see);

let obj = {
    name : 'Anjali',
    getAge : function () {
        return 30;
    }
}

let show2 = obj.getAge()
console.log(show2);


function test () {
    console.log('Functiion is invoked.')
}

test()

function print_Message () {
    console.log('The name is ' + this.name ,'and age is ', + this.age)
}

const person1 = {
    name : 'Sara',
    age : 22
}

const person2 = {
    name : 'Steve',
    age : 23
}

print_Message.call(person1)
print_Message.call(person2)

function msg (p1, p2) {
    console.log(this.num1+this.num2+p1+p2)
}

const obj1 = {
    num1 : 20,
    num2 : 30
}

const obj2 = {
    num1 : 40,
    num2 : 50
}

msg.call(obj1, 5, 3)
msg.call(obj2, 8, 3)

const cal = {
     getAge : function  () {
        console.log('your name and age is :' + this.name + this.age)
    }
}

const per1 = {
    name : 'Steve',
    age : 25
}

const per2 = {
    name : 'Sara',
    age : 22
}

cal.getAge.call(per1)
cal.getAge.call(per2)

function app (p1,p2) {
    console.log(this.num1+this.num2+p1+p2);
    
}

const nums = {
    num1 : 20,
    num2 : 30
}

app.apply(nums, [37, 10])

const num = [3, 7, 8, 2, 9]
console.log(Math.max.apply(null, num));
console.log(Math.min.apply(null, num));

function msg (message) {
    console.log(message + this.name);
    
}

const n = {
    name : 'Anjali'
}

const bind = msg.bind(n,'Hello ')
bind()

function calp () {
    console.log(this.x + this.y);
    
}

const p1 = {
    x : 5,
    y : 10
}

const p2 = {
    x : 15,
    y : 20
}

let show3 = calp.bind(p1)
show3()
calp.bind(p2)()

function multipli (x, y) {
    console.log(x*y);
    
} 

multipli.bind(null, 5)(1)

function outer () {
    let count = 100
    return function inner () {
        count = count - 1
        console.log(count);
    }
    
    
   
}

const show4 =  outer()
show4()
show4()
show4()

function name1 () {
    let name = 'Anjali'
    function inner () {
        console.log("hello " + name);
        
    }

    inner()
}

name1()
name1()

let array = [2, 6, 8, 8, 10]
let array2 = [4, 8, 9, 1, 3]
console.log(...array, ...array2);


let arrays = [['canada', 'Mexico', ['Norway'], ['Bangladesh'], ['America']]];

// const index = arrays.indexOf(['Norway'])
// if(index !== -1){
//     arrays.splice(index + 1, 0, 'Australia')
// }

for(let i = 0; i < arrays[0].length; i++){
     if(Array.isArray(arrays[0][i]) && arrays[0][i].includes('Norway')){
           arrays[0][i].push('Australia', 'Swizerland');
     }
}

console.log(arrays);


// const index = arrays[0].findIndex(item => 
//      Array.isArray(item) && item.includes('America')
// );

// if(index !== -1){
//      arrays[0][index].push('Sweden')
// }

// let newArray = ['India', 'Bangladesh', 'Nepal', 'America', 'Agra']
// newArray[2] = 'Japan'
// newArray.splice(1 + 1, 0, 'Mumbai', )
// newArray.splice(1+1, 0, 'kashmir', 'Maldives')
// newArray.unshift('Calcutta')
// console.log(newArray);

// let newArray = [5, 8, 2, 3, 1]
// let index = newArray.indexOf(8)
// if(index !== -1){
//     newArray.splice(index+3, 0, 33, 45)
// } 
// console.log(newArray);

let arr = [['Sara', 'Steve', ['Sam'], ['Samantha'], ['Shiv', 'Smita']]]
// for(let i = 0; i < arr[0].length; i++){
//      if(Array.isArray(arr[0][i]) && arr[0][i].includes('Samantha')){
//           arr[0][i].push('America')
//      }
// }
// arr[0].splice(1, 0, 'Japan')
for(let i = 0; i < arr[0].length; i++){
    if(arr[0][i] === 'Sam'){
          arr[0].splice(i+1,0, 'Canada')
    }
      
}
console.log(arr);

function table (num) {
    for(let i = 1; i <= 10; i++){
           console.log(`${num} * ${i} = ${num * i} `)
    }
}
table(15)


function returnReverse (num) {
    if(num === 0 || num === 1){
         return 1;
    }

    return num * returnReverse(num - 1)
}

console.log(returnReverse(5));
// console.log(returnReverse());

let i = 11;
do {
    console.log(`${i} * 2 = ${i * 2}`)
    i++;
} while (i <= 10)

const greet = "Hello World"
for(const gr of greet){
     console.log(gr)
}

const number = [5, 8, 5, 2, 3]
const newNums =  number.map((item) => item * 5 )
console.log(newNums);

const map = new Map()
map.set('country1', 'India')
map.set('country2', 'America')
map.set('country3', 'China')
map.set('country4', 'Bhutan')
// console.log(map);

for(const [key, value ]of map){
      console.log(key, " : ", value)
}

console.log(map.get('country1'));
console.log(map.size);
 
const object = {
    firsttName : 'Anjali',
    lastName  : 'Tripathi',
    'email' : 'anjali@.com'
}

for(const key in object){
      console.log(object[key]);
}
console.log(object['firsttName']);


const map2 = new Map()
map2.set('name', 'Anjali')
map2.set('age', 21)
for(const [key, value ]of map2){
      console.log(key, " :", value);
}
// console.log(map2);

const coding = ['js', 'java', 'angular', 'ruby', 'database']
// coding.forEach((item) => console.log(item))
// console.log(coding);

// function code (item) {
//      console.log(item)
// }

coding.forEach((item, index, arr) => {
     console.log(item, index, arr);
})

const codes = [
     {
        name : 'Anjali',
        age : 21,
        email : 'anjali@.com'
     },

     {
        name : 'Sam',
        age : 22,
        email : 'sam@.com'
     },

     {
        name : 'Steve',
        age : 22,
        email : 'steve@.com'
     },
]

let items = [];
codes.forEach((item) => {
     if(item.age){
         items.push(item.age)
     }
})
console.log(items);

const codings = [1, 2, 3, 4, 5]
const vals = codings.filter((item) => {
      return item > 2
})

console.log(vals);

const books = [
     { title: 'Book One', genre: 'History', publish: 1968, edition: 2009  },
     { title: 'Book Two', genre: 'Science', publish: 1928, edition: 2013  },
     { title: 'Book Three', genre: 'Non-Fiction', publish: 1998, edition: 2010  },
     { title: 'Book Four', genre: 'Fiction', publish: 1988, edition: 1934  },
     { title: 'Book Five', genre: 'History', publish: 2011, edition: 2014  },
     { title: 'Book Six', genre: 'Fiction', publish: 1944, edition: 1984  },
     { title: 'Book Seven', genre: 'Non-Fiction', publish: 2018, edition: 2008  },
     { title: 'Book Eight', genre: 'Science', publish: 1938, edition: 2006 },
     { title: 'Book Nine', genre: 'History', publish: 2005, edition: 1954  },       
     { title: 'Book Ten', genre: 'Fiction', publish: 2008, edition: 1995  }       
]

let book = books.filter((bk) => {return bk.genre === 'History' && bk.edition > 2000})
console.log(book);

function isLeap (num) {
    const remainder = num % 4
    if(remainder === 0){
         return `${num} is Leap Year.`
    } else {
         return `${num} is not a Leap Year.`
    }
}

console.log(isLeap(2032));
console.log(isLeap(2007));

function genTable (tableOf, tabletill) {
     for(let i = 1; i <= tabletill; i++){
           console.log(`${tableOf} * ${i} =  ${tableOf * i}`)
     }
}

genTable(5, 5);
genTable(7, 6);


const map3 = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(map3.map((it) => {
    return  it + 3
}));

const tr = map3.map((item) => (item * 3))
               .map((item) => item * 3)
               .filter((item) => item > 18);
console.log(tr);

let num1 = [5, 8, 3, 2, 8, 9]
let num2 = [];
num1.forEach((num) => {
    if(num){
       num2.push(num + 5)
    }
})
 
console.log(num2);

const reduce = [1, 2, 3]
const result = reduce.reduce((acc, currval) => {
     return acc + currval
}, 0)
console.log(result);

const sk = [
     {
         lang : 'Js',
         price : 599
     },

     {
         lang : 'Java',
         price : 699
     },

     {
         lang : 'Angular',
         price : 999
     },
]

const red = sk.reduce((acc, item) => {
      return acc + item.price;
}, 0)

console.log(red);

//  let promiseOne = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           let error = true
//           if(!error){
//               resolve({username:'Anjali', age : 21})
//           } else {
//               reject('ERROR:Something went wrong')
//           }
//       }, 1000)
//  })

//  promiseOne.then((user) => {
//      console.log(user);
//  }).catch((err) => {
//      console.log(err);
//  }).finally(() => {
//       console.log('the promise is either consume or error.')
//  })
 

 let getData = new Promise((resolve, reject) => {
       let error = false
       if(!error){
           resolve({username : 'Anjali', age : 21})
       } else {
           reject('ERROR : error occurs.')
       }
 })
   
//  getData.then((user) => {
//       console.log(user)
//  }).catch((err) => {
//       console.log(err)
//  })

//  async function data () {
//     try {
//         let res = await getData
//         console.log(res.username);
//     }
     
//     catch (err) {
//         console.log(err);
//     }
//  }
 
//  data()

//  fetch('https://api.github.com/users/hiteshchoudhary')
//  .then((response) => {
//        return response.json()
//  })
//  .then((data) => {
//       console.log(data);
//  })
//  .catch((err) => console.log("E", err))

function isEven (num) {
     return num % 2 === 0
}

function isOdd (num) {
     return num % 2 !== 0
}

function filte (number, call) {
      let arr = [];
      for(const key of number){
            if(call(key)){
                 arr.push(key)
            }
      }

      return arr;
}

console.log(filte([5, 8, 2, 7, 10], isOdd));

let arraye = [5, 7, 3]
function mul (a, b, c) {
    return a*b*c; 
}
console.log(mul(...arraye));

let color = ['red', 'blue', 'black']
let newColor = ['white',...color, 'pink']
console.log(newColor);

let newArray = ['Hello', 'Sara', 'Steve']
newArray.splice(1+2, 0,  'Sam')
console.log(newArray);

let newPromise = new Promise((resolve, reject) => {
      let err = true
      if(!err){
          resolve("Hello World")
      } else {
          reject('Something went wrong')
      }
}) 

async function goData () {

    try {
            let res = await newPromise
            console.log(res);
    }
    catch (err) {
         console.log(err);
         
    }
     
    
}

goData()


let arrow = [['Agra', 'Ahmedabad', ['Delhi', 'Mumbai'],  ['Bandra', 'America']]];
arrow[0][3] = ['Delhi', 'Mumbai', ["Gujrat"]]
console.log(JSON.stringify(arrow, 2));

let arrayNew = [1, 2, 3, 4, 5];
arrayNew.splice(0, arrayNew.length);
console.log("NewArray", arrayNew);

let debitCard = true
let creditcard = true
if(debitCard && creditcard){
    console.log('user logged in.');
    
} 




