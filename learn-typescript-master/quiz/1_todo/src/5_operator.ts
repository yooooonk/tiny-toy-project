interface Pharmacy{
    name:string;
    hospital:string;
}

interface Designer{
    name:string;
    career:string;
}

function askSomeOne(someone:Pharmacy|Designer){
    console.log(someone)}

askSomeOne({name:'약사',hospital:'이비인후과'});
askSomeOne({name:'디자이너',career:'골프웨어'});


function askSomeBody(someone:Pharmacy&Designer){
    console.log(someone)
}
//askSomeBody({name:'헤이',hospital:'이비인후과'})
askSomeBody({name:'헤이',hospital:'이비인후과',career:'골프웨어'})








//const name:string&number&boolean // 세 가지 모두를 만족할 수 없기 때문에 에러가 남



