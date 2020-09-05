const clock = document.querySelector('.js-clock');

function init(){
    getTime();
    setInterval(getTime, 1000);
}

function getTime(){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    clock.innerText = `${hh < 10? `0${hh}`: hh}:${mm<10? `0${mm}`:mm}:${ss<10? `0${ss}`:ss}`
}


init();