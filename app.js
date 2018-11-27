"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    var cityName = (searchCity.value);
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apikey = 'a2cbdd66c6fb90a2b9847ae10a3f22e7';
    var url = 'api.openweathermap.org/data/2.5/weather?q=' + cityName;
}