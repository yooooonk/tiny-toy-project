
// 다양한 타입 사용가능
function logText(text){
    console.log(text)
    return text;
}

logText(10);
logText('안녕');
logText(true);

function loglog<T>(text:T):T{
    console.log(text);
    return text;
}

loglog<string>('하이') 

const texttext = loglog('하이')

