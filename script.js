const port = 'https://';
const ip = 'api.openweathermap.org/data/2.5/weather?';
const apiKey = '&appid=22b635d07a92a19fde5c342c466e61ae';
const unit = '&units=metric';

const inputButton = document.getElementById('input-city');
const searchButton = document.getElementById('search-button');


// Display the data received from API
function displayData(data) {    
    const background = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const city = data.name;
    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].main;

    
    document.body.style.backgroundImage =  `url('images/${background}.png')`;
    document.getElementById('icon').src= `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    document.getElementById('city').innerText = city;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('weather-condition').innerText = weatherCondition;
}


// EventListener for search button click
searchButton.addEventListener('click', function() {
    const inputCity = document.getElementById('input-city').value;

    // Handle the empty value search
    if(!inputCity) return;

    const city = 'q=' + inputCity;
    const url= port + ip + city + apiKey + unit;

    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
});


// EventListener for Enter button to search
inputButton.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
});

