const city = document.getElementById('city-display')
const temp = document.getElementById('temperature-display') 

export function displayWeatherData(weatherObj) {
    console.log(city);
    console.log(weatherObj);
    city.querySelector('.value').textContent = weatherObj.address
    temp.querySelector('.value').textContent = Math.round((parseInt(weatherObj.currentTemperature)-32)* 5/9) + " °C"
}

