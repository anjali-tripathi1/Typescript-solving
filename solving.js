 function calculateFactorial (num) {
       if(num === 0 || num === 1){
            return 1;
       }

       return num * calculateFactorial(num - 1)
 }

 const obj = {
      num : 5
 }

 const result = calculateFactorial.call(obj)
 console.log(result);
 
 
 