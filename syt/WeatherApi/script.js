/*
let xhttp = new XMLHttpRequest();
let weatherOutput = document.getElementById("weather");
let weather;

xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        weather = JSON.parse(this.responseText);
        console.log(weather);
    }
}
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=7872055&appid=77ec8d7ea5c88bff384d58d4b822274c", true);
xhttp.send();

function currentWeather() {
    weatherOutput.innerHTML = '';
    weatherOutput.innerHTML += 'temp: ' + Math.floor(weather.main.temp - 273.15)+'°C';
}
*/