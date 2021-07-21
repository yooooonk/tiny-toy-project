class Person{
    // 객체를 만들 때 호출됨
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log('생성되었음')
    }
}


var capt = new Person('캡틴',100)