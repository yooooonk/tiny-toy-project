interface Shape{
    getArea():number; 
    // shape interface에는 getArea라는 함수가 꼭 있어야하며, 
    // 해당 함수의 반환값은 숫자
}

class Circls implements Shape{
    radius:number;
    constructor(radius:number){
        this.radius = radius;
    }

    getArea(){
        return this.radius*this.radius*Math.PI;
    }
}