interface User{
    age:number;
    name:string;
}

var saram1:User = {
    age:33,
    name:'세호'
}

function getUser(user:User){
    console.log(user);
}

getUser(saram1)

interface SumFunction{
    (a:number,b:number):number;
}

let sum: SumFunction;
sum = function(a,b,){
    return a+b
}

interface StringArray{
    [index:number]:string;
}

const arr:StringArray = ['a','b','c']

// indexing
arr[0] = 'd'

interface StringRegexDictionary{
    [key:string]:RegExp // 정규표현식
}

const obj:StringRegexDictionary = {
    sth:/abc/, // 통과
    //sss:'abc', // 에러
}


interface Person{
    name:string;
    age:number;
}

interface Developer extends Person{    
    language:string;
}

const me:Developer = {
    name:'Gisele',
    age:30,
    language:'javascript'
}