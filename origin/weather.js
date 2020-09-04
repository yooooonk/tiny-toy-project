const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY ='4f6fe08ace4b3629ea4adbb90178462b';

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(res=>{
        return res.json();
    }).then(data=>{
        const temp = data.main.temp;
        const place = data.name;
        weather.innerText=`${temp} @ ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGoeSucces(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat,
        lng
    }
    saveCoords(coordsObj);
    getWeather(lat,lng)
}

function handleGeoError(){
    console.log("Cant get location")
}

function askForCoords(){

    navigator.geolocation.getCurrentPosition(handleGoeSucces,handleGeoError)
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.lat,parseCoords.lng)
    }
}

function init(){
    loadCoords();
}

init();