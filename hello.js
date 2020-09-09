
const USER = 'user';
const NONE = 'none';

const form = document.querySelector('.js-hello');
const input = form.querySelector('input');
const user = document.querySelector('.user');
const nameSpan = user.querySelector('h1');

//submit 이벤트
function handleSubmit(e){
    e.preventDefault();

    const userName = input.value;
    
    saveUser(userName);
    paintGreeting(userName);
   
    input.value='';
}
// 이름저장
function saveUser(userName){
    localStorage.setItem(USER,userName);
}
function paintGreeting(userName){
    nameSpan.innerText = `Hello,${userName}`
    user.classList.remove(NONE);
    form.classList.add(NONE);

};

// 로그아웃
function delUser(){
    localStorage.removeItem(USER);
    nameSpan.innerText = '';
    form.classList.remove(NONE);
    user.classList.add(NONE);
}


function init(){
    const user = localStorage.getItem(USER);

    form.addEventListener("submit",handleSubmit);

    if(user){
        paintGreeting(user);
    }
}

init();