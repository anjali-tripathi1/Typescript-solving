
function value (name:string):string {
      return `Hello ${name}`
} 

console.log(value('anjali'));
 
function add (a:number, b:number) {
     return a+b;
}

console.log(add(6, 8));

class car {
     name!:string;
     speed!:number
     acclerate(){
        this.speed += 10;
     }
}

function main():void{
     const c = new car()
     c.speed = 80;
     c.acclerate()
     console.log(`my car name is ${c.name} and spedd is ${c.speed}`)
}

 main()
  
class bankAccount{
    private balance:number = 0;
    constructor(intial:number=0){
        this.balance = intial;
    }

    public getBalance():number{
        return this.balance;
    }

    public deposit(amount:number):void{
        if(amount>0){
           this.balance += amount;
        } else {
             console.log('invalid')
        }
    }
}

function mains () {
     let bal = new bankAccount(1000)
     console.log(bal.getBalance());
     bal.deposit(5000)
     console.log(bal.getBalance());
}

mains()

class Employee{
    name:string;
    age:number;
    position:string;
    constructor(name:string, age:number, position:string){
        this.name = name;
        this.age = age;
        this.position= position;
    }

    getDetails():string{
        return `name is ${this.name} age is ${this.age} and posi is ${this.position}`
    }

    work(){
       console.log(`${this.name} works as ${this.position}`)
    }
}

class manager extends Employee{
    teamsize:number;
    constructor(name:string, age:number, position:string, teamsize:number){
        super(name, age, position)
        this.teamsize = teamsize;
    }

    getDetails(): string {
        return(`${super.getDetails()} and teamsize is ${this.teamsize}`)
    }

    
}

const emp = new Employee('Anjali', 20, 'developer')
console.log(emp.getDetails());
 

class per{
   calculateArea():number{
      return 0;
   }
}

class rect extends per{
    length:number
    width:number
     constructor(length:number, width:number){
        super()
        this.length = length
        this.width = width;
     }

     calculateArea(): number {
         return this.length* this.width
     }
}

const areas:per[] = [
     new rect(4, 5)
]

for(const area of areas){
    console.log(area.calculateArea())
}

class calc{
    add(a:number, b:number):number;

    add(a:string, b:string):string;

    add(a:any, b:any):any{
        return a+b;
    }
}

const ca = new calc()
console.log(ca.add(4, 5));
console.log(ca.add('Hello', 'World'));
 
interface add{
    (a:number, b:number):number
}

const Add:add = function (a, b) {
    return a+b;
}

console.log(add(6, 8));


