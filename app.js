"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    var cityName = (searchCity.value);
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apiKey = 'a2cbdd66c6fb90a2b9847ae10a3f22e7';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something Went Wrong!');
        }
    };
    http.send();
}