function timing(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = `${hours}:${minutes}`;
  return time;
}

function date(timestamp) {
  let date = new Date(timestamp);
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[date.getDay()];
  let today = document.querySelector("#dayOneName");
  today.innerHTML = day;
  return day;
}

function showTemperature(responce) {
  let temperatureToday = document.querySelector("#temperature");
  let citySelected = document.querySelector("#city");
  let weatherDescribed = document.querySelector("#weatherDescription");
  let humidityToday = document.querySelector("#dayOneHumidity");
  let windSpeed = document.querySelector("#dayOneWindSpeed");
  let dayOneTemp = document.querySelector("#dayOneTempreture");
  let weatherIcon = document.querySelector("#todayIcon");

  let updatedDay = document.querySelector("#today");
  let updatedTime = document.querySelector("#time");
  let sunriseTime = document.querySelector("#dayOneSunrise");
  let sunsetTime = document.querySelector("#dayOneSunset");

  temperatureToday.innerHTML = Math.round(responce.data.main.temp);
  citySelected.innerHTML = responce.data.name;
  weatherDescribed.innerHTML = responce.data.weather[0].description;
  humidityToday.innerHTML = responce.data.main.humidity;
  windSpeed.innerHTML = Math.round(responce.data.wind.speed);
  dayOneTemp.innerHTML = Math.round(responce.data.main.temp);

  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", responce.data.weather[0].description);

  celsiusTemperature = Math.round(responce.data.main.temp);
  updatedDay.innerHTML = date(responce.data.dt * 1000);
  updatedTime.innerHTML = timing(responce.data.dt * 1000);
  sunriseTime.innerHTML = timing(responce.data.sys.sunrise * 1000);
  sunsetTime.innerHTML = timing(responce.data.sys.sunset * 1000);
}

function search(city) {
  let apiKey = "c3fb1aea0fcac49229fe92764b89263e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function searchBar(event) {
  event.preventDefault();
  let city = document.querySelector("#citySearch");
  search(city.value);
}

function showFahrenheitTemp(event) {
  event.preventDefault();

  celsiusTemp.classList.remove("active");
  fahrenheitTemp.classList.add("active");
  let temperature = document.querySelector("#temperature");
  let fahrenheitTemperature = Math.round(celsiusTemperature * 1.8 + 32);
  temperature.innerHTML = fahrenheitTemperature;
}

function showCelsiusTemp(event) {
  event.preventDefault();
  fahrenheitTemp.classList.remove("active");
  celsiusTemp.classList.add("active");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celsiusTemperature;
}

let celsiusTemperature = null;

let form = document.querySelector("#searchBar");
form.addEventListener("submit", searchBar);

let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", showCelsiusTemp);

let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", showFahrenheitTemp);

search("London");
