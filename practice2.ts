abstract class shape{
    
    calculateArea():number{
           return 0;
    }


}

class circle extends shape{
    radius:number;
    constructor(radius:number){
         super();
          this.radius = radius;
    }
    calculateArea(): number {
        return  Math.PI*this.radius*this.radius
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
         return 0.5*this.base*this.height;
     }
}

const shapes:shape[] = [
    new circle(5),
    new triangle(5, 8)
]

for(const sh of shapes  ){
    console.log("Area is :", sh.calculateArea());
}

