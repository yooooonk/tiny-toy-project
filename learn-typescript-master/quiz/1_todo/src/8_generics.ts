// 타입제한1. 제네릭으로 받은 타입을 배열로 사용할거야
function logTextLength<T>(text:T[]):T[]{
    // 배열 메서드를 사용할 수 있음
    console.log(text.length);
    return text;
}

// 타입제한2. 정의된 타입 이용하기
interface LengthType{
    length:number;

}

function logTextLength2<T extends LengthType>(text:T):T{
    text.length;
    return text;
}

// 타입제한3. key of - 선언한 타입 중 하나를
interface ShopingItem{
    name:string;
    price:number;
    stock:number;
}

function getShoppingItemOption<T extends keyof ShopingItem>(itemOption:T):T{
    return itemOption;    
}
