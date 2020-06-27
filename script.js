let now = new Date();

let currentDateTime = document.querySelector("#current-date-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity() {
  let search = document.querySelector("#search-form");
  search.addEventListener("submit", changeCity);
}

function changeCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#search-form-input");

  let city = document.querySelector("#city");
  city.innerHTML = `${inputCity.value}`;

  let apiKey = `c14080be25f9d6c7ce944c63a7606820`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}
function displayTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);

  let temp = document.querySelector("#current-temp");
  temp.innerHTML = `${currentTemp}`;
}

searchCity();
