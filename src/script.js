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
  return day;
}

function showTemperature(responce) {
  let today = document.querySelector("#dayOneName");
  let temperatureToday = document.querySelector("#temperature");
  let citySelected = document.querySelector("#city");
  let weatherDescribed = document.querySelector("#weatherDescription");
  let humidityToday = document.querySelector("#dayOneHumidity");
  let windSpeed = document.querySelector("#dayOneWindSpeed");
  let dayOneTemp = document.querySelector("#dayOneTempreture");
  let weatherIcon = document.querySelector("#todayIcon");
  let feelsLike = document.querySelector("#feelsLike");

  let updatedDay = document.querySelector("#today");
  let updatedTime = document.querySelector("#time");
  let sunriseTime = document.querySelector("#dayOneSunrise");
  let sunsetTime = document.querySelector("#dayOneSunset");

  today.innerHTML = date(responce.data.dt * 1000);
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
  feelsLike.innerHTML = Math.round(responce.data.main.feels_like);

  celsiusTemperature = Math.round(responce.data.main.temp);
  updatedDay.innerHTML = date(responce.data.dt * 1000);
  updatedTime.innerHTML = timing(responce.data.dt * 1000);
  sunriseTime.innerHTML = timing(responce.data.sys.sunrise * 1000);
  sunsetTime.innerHTML = timing(responce.data.sys.sunset * 1000);
}

function fiveDayForecast(responce) {
  let forecastDayTwo = document.querySelector("#dayTwoForecast");
  let forecastDayThree = document.querySelector("#dayThreeForecast");
  let forecastDayFour = document.querySelector("#dayFourForecast");
  let forecastDayFive = document.querySelector("#dayFiveForecast");
  let forecast = null;

  forecast = responce.data.list[8];
  forecastDayTwo.innerHTML = `
                <div class="col-2 cols">
                  <img class="icon" src="http://openweathermap.org/img/wn/${
                    forecast.weather[0].icon
                  }@2x.png" alt="${forecast.weather[0].description}" />
                </div>
                <div class="col-3 cols active" id="dayTwoName">${date(
                  forecast.dt * 1000
                )}</div>
                <div class="col-2 cols" id="dayTwoTempreture">${Math.round(
                  forecast.main.temp_max
                )}°C</div>
                <div class="col-5 cols">
                  <span class="humidity" id="humidity"
                    >humidity <span id="dayTwoHumidity">${
                      forecast.main.humidity
                    }</span>%
                  </span>
                  <span class="feels-like" id="feelsLike"
                    >feels like:  <span id="dayTwoTemp">${Math.round(
                      forecast.main.feels_like
                    )}°C</span>
                  </span>
                  <br />
                  <span class="wind" id="wind">
                    wind <span id="dayTwoWindSpeed">${Math.round(
                      forecast.wind.speed
                    )}</span> km/h</span
                  >
                  <span class="description" id="description"
                    ><span id="dayTwoDescription">${
                      forecast.weather[0].description
                    }</span>
                  </span>
                </div>`;

  forecast = responce.data.list[16];
  forecastDayThree.innerHTML = `
                <div class="col-2 cols">
                  <img class="icon" src="http://openweathermap.org/img/wn/${
                    forecast.weather[0].icon
                  }@2x.png" alt="${forecast.weather[0].description}" />
                </div>
                <div class="col-3 cols active" id="dayThreeName">${date(
                  forecast.dt * 1000
                )}</div>
                <div class="col-2 cols" id="dayThreeTemperature">${Math.round(
                  forecast.main.temp_max
                )}°C</div>
                <div class="col-5 cols">
                  <span class="humidity" id="humidity"
                    >humidity <span id="dayThreeHumidity">${
                      forecast.main.humidity
                    }</span>%
                  </span>
                  <span class="feels-like" id="feelsLike"
                    >feels like <span id="dayThreeTemp">${Math.round(
                      forecast.main.feels_like
                    )}°C</span>
                  </span>
                  <br />
                  <span class="wind" id="wind">
                    wind <span id="dayThreeWindSpeed">${Math.round(
                      forecast.wind.speed
                    )}</span> km/h</span
                  >
                  <span class="description" id="description"
                    ><span id="dayThreeDescription">${
                      forecast.weather[0].description
                    }</span>
                  </span>
                </div>`;

  forecast = responce.data.list[24];
  forecastDayFour.innerHTML = `  
  <div class="col-2 cols">
                   <img class="icon" src="http://openweathermap.org/img/wn/${
                     forecast.weather[0].icon
                   }@2x.png" alt="${forecast.weather[0].description}" />
                </div>
                <div class="col-3 cols active" id="dayFourName">${date(
                  forecast.dt * 1000
                )}</div>
                <div class="col-2 cols" id="dayFourTemperature">${Math.round(
                  forecast.main.temp_max
                )}°C</div>
                <div class="col-5 cols">
                  <span class="humidity" id="humidity"
                    >humidity <span id="dayFourHumidity">${
                      forecast.main.humidity
                    }</span>%
                  </span>
                  <span class="feels-like" id="feelsLike"
                    >feels like <span id="dayFourTemp">${Math.round(
                      forecast.main.feels_like
                    )}°C</span>
                  </span>
                  <br />
                   <span class="wind" id="wind">
                    wind <span id="dayFourWindSpeed">${Math.round(
                      forecast.wind.speed
                    )}</span> km/h</span
                  >
                  <span class="description" id="description"
                    ><span id="dayFourDescription">${
                      forecast.weather[0].description
                    }</span>
                  </span>
                </div>`;

  forecast = responce.data.list[32];
  forecastDayFive.innerHTML = `  
                 <div class="col-2 cols">
                    <img class="icon" src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png" alt="${forecast.weather[0].description}" />
                </div>
                <div class="col-3 cols active" id="dayFiveName">${date(
                  forecast.dt * 1000
                )}</div>
                <div class="col-2 cols" id="dayFiveTemperature">${Math.round(
                  forecast.main.temp_max
                )}°C</div>
                <div class="col-5 cols">
                  <span class="humidity" id="humidity"
                    >humidity <span id="dayFiveHumidity">${
                      forecast.main.humidity
                    }</span>%
                  </span>
                   <span class="feels-like" id="feelsLike"
                    >feels like <span id="dayFiveTemp">${Math.round(
                      forecast.main.feels_like
                    )}°C</span>
                    </span>
                  <br />
                   <span class="wind" id="wind">
                    wind <span id="dayFiveWindSpeed">${Math.round(
                      forecast.wind.speed
                    )}</span> km/h</span
                  >
                  <span class="description" id="description"
                    ><span id="dayFiveDescription">${
                      forecast.weather[0].description
                    }</span>
                  </span>
                </div>`;
}

function search(city) {
  let apiKey = "c3fb1aea0fcac49229fe92764b89263e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(fiveDayForecast);
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
