fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=22b635d07a92a19fde5c342c466e61ae&units=metric')
.then(res => res.json())
.then(data => console.log(data))

// http://openweathermap.org/img/w/04n.png