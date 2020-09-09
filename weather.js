const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = '4f6fe08ace4b3629ea4adbb90178462b';

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGoeSucces,handleGeoError)
}
function handleGoeSucces(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = {
        lat,
        lon
    }
    saveCoords(coordsObj);
    getWeather(lat,lon)
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res=>{
        console.log(res)
        return res.json();
        
    }).then(data=>{
        console.log(data)
        const temp = data.main.temp;
        const place = data.name;
        weather.innerText=`${temp} @ ${place}`
    })
}

function handleGeoError(){
    console.log("Can't get location")
}

function init(){
    askForCoord();
}

init();