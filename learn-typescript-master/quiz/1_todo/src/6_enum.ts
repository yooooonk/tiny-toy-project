enum Shoes{
    Nike = '나이키',
    Adias = '아디다스',
    NewBalance = '뉴발란스'
}

const myShoes = Shoes.Nike
console.log(myShoes); //나이키



// string
function askQuestion2(answer:string){
    if(answer === 'yes'){
        console.log('정답입니다')
    }

    if(answer === 'no'){
        console.log('오답입니다')
    }
}

askQuestion2('yes')
askQuestion2('y')
askQuestion2('예스')

// enum
enum Answer{
    Yes='Y',
    No='N'
}
function askQuestion(answer:Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다')
    }

    if(answer === Answer.No){
        console.log('오답입니다')
    }
}

askQuestion(Answer.Yes)
//askQuestion('yes') // 이넘에서 제공하는 데이터만 넣을 수 있다.


