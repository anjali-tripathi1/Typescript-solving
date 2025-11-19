(function heading (ver='Project') {
     console.log('this is new ' + ver);
})();

function out(){
     let greet = 'GoodMorning'
      function inner () {
         let per = ' Gyus!'
         console.log(greet + per);
     }

     return inner();
}

out();

function add (a=10, b=5) {
     return a+b
 }

 console.log(add(5, 3));
  
 function adds () {
     let sum = 0;
     for(let i = 0; i < arguments.length; i++){
         sum += arguments[i]
     }

     return sum;
 }

 console.log(adds(5, 8, 3, 3, 5));
 
 function calls (age=20, nation) {
      console.log('Hello ' + this.name, 'and your age is ' + age, 'and nationality is ' + nation );
 }

 let obj = {
     name : 'Steve',
     city : 'America'
 } 

 calls.apply(obj,[35, 'American']);

 const number = [10, 15, 3, 2, 7];
 const mas = Math.max.apply(null, number);
 console.log(mas);

 function applies (city='Bamdra', country='India') {
     console.log(`name is ${this.firstname} ${this.lastname} city is ${city}, and country is ${country}`)
 }

 const person = {
     firstname : 'Anjali',
     lastname : ' Tripathi'
 }

 let bind = applies.bind(person, 'Bengluru', 'India')
 bind()