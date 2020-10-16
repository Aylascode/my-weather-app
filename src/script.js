function showTemperature(responce) {
  console.log(responce.data);
  let temperatureToday = document.querySelector("#temperature");
  let citySelected = document.querySelector("#city");
  let weatherDescribed = document.querySelector("#weatherDescription");
  let humidityToday = document.querySelector("#dayOneHumidity");
  let windSpeed = document.querySelector("#dayOneWindSpeed");
  let dayOneTemp = document.querySelector("#dayOneTempreture");
  temperatureToday.innerHTML = Math.round(responce.data.main.temp);
  citySelected.innerHTML = responce.data.name;
  weatherDescribed.innerHTML = responce.data.weather[0].description;
  humidityToday.innerHTML = responce.data.main.humidity;
  windSpeed.innerHTML = Math.round(responce.data.wind.speed);
  dayOneTemp.innerHTML = Math.round(responce.data.main.temp);
}

let apiKey = "c3fb1aea0fcac49229fe92764b89263e";
let units = "metric";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

// console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);
