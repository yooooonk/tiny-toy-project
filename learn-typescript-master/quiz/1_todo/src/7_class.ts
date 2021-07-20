class Developer{
    // 변수의 접근 범위를 지정할 수 있다.
    private name:string;
    public age:number;
    readonly log:string;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}