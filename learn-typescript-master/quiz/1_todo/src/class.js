class Person{
    // 객체를 만들 때 호출됨
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log('생성되었음')
    }
}

const inkuk = new Person('사람',30);


// js 프로토타입
var user = {name:'capt',age:100};

var admin = {name:'capt',age:100, role:'admin'};