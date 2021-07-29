interface Developerr{
    name:string;
    skill:string;
}

interface Personn{
    name:string;
    age:number;
}

function introduce() : Developerr|Personn {
    return {name:'Tony', age:33, skill:'Iron Making'} // return에 skill이 있는데
}

var tonytony = introduce();
console.log(tonytony.skill) // 두 타입의 공통된 속성이 아닌 skill은 불러올 수 없음




// 공통속성이 아닌 것을 사용하기 위해서
if((tonytony as Developerr).skill){
    var skill = (tonytony as Developerr)
    console.log(skill)
}else if ((tony as Person).age){
    var age = (tonytony as Personn)
    console.log(age)
}

// 타입가드를 정의
function isDeveloper(target:Developerr|Personn):target is Developerr {
    return (target as Developerr).skill !== undefined;
}

if(isDeveloper(tonytony)){
    console.log(tonytony.skill)
}else{
    console.log(tony.age)
}






