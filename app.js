"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    var cityName = (searchCity.value);
    var http = new XMLHttpRequest();
    var apikey = 'a2cbdd66c6fb90a2b9847ae10a3f22e7';
    var url = 'api.openweathermap.org/data/2.5/weather?q='
}