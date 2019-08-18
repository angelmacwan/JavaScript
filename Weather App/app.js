let lon;
let lat;

function setup() {
  if (navigator.geolocation) {
    console.log("Location Available");
    navigator.geolocation.getCurrentPosition(position);
  } else {
    console.log("Location Not Available");
    let name = document.getElementById('cityName').innerHTML = "LOCATION IS NOT AVAILABLE IN YOUR BROWSER";
  }
}

function position(pos) {
  lon = pos.coords.longitude;
  lat = pos.coords.latitude;
  loadJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6a8864f2fdcd48568bf8b4a9330cf63b`, getData);
}

function getData(data) {
  let name = document.getElementById('cityName').innerHTML = "You are in " + data.name;
  let pres = document.getElementById('pres').innerHTML = document.getElementById('pres').innerHTML + " " + data.main.pressure + " mBar";
  let hum = document.getElementById('hum').innerHTML = document.getElementById('hum').innerHTML + "   " + data.main.humidity + "%";
  let ws = document.getElementById('ws').innerHTML = document.getElementById('ws').innerHTML + " " + data.wind.speed + " m/s";
  let wd = document.getElementById('wd').innerHTML = document.getElementById('wd').innerHTML + " " + data.wind.deg + "°";
  let temp = document.getElementById('temp').innerHTML = ((data.main.temp) - 273.15) + " °C" + " " + data.weather[0].main;
  let desc = document.getElementById('des').innerHTML = "(" + data.weather[0].description + ")";
}