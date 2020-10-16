function dateAndTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[date.getDay()];
  let today = document.querySelector("#dayOneName");
  today.innerHTML = day;
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(responce) {
  let temperatureToday = document.querySelector("#temperature");
  let citySelected = document.querySelector("#city");
  let weatherDescribed = document.querySelector("#weatherDescription");
  let humidityToday = document.querySelector("#dayOneHumidity");
  let windSpeed = document.querySelector("#dayOneWindSpeed");
  let dayOneTemp = document.querySelector("#dayOneTempreture");
  let UpdatedDayAndTime = document.querySelector("#todayAndTime");
  let weatherIcon = document.querySelector("#todayIcon");
  temperatureToday.innerHTML = Math.round(responce.data.main.temp);
  citySelected.innerHTML = responce.data.name;
  weatherDescribed.innerHTML = responce.data.weather[0].description;
  humidityToday.innerHTML = responce.data.main.humidity;
  windSpeed.innerHTML = Math.round(responce.data.wind.speed);
  dayOneTemp.innerHTML = Math.round(responce.data.main.temp);
  UpdatedDayAndTime.innerHTML = dateAndTime(responce.data.dt * 1000);
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", responce.data.weather[0].description);
}

let apiKey = "c3fb1aea0fcac49229fe92764b89263e";
let units = "metric";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
