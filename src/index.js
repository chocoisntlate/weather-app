import './styles.css'

import { filterWeatherData } from './app/weather'
import { displayWeatherData } from './app/display'

const submitBtn = document.querySelector('#submit')
const city = document.getElementById("city")

submitBtn.addEventListener('click', async function(e) {
    e.preventDefault()
    let searchInput = city.value
    city.value = ""

    const filteredWeatherData = await filterWeatherData(searchInput)
    displayWeatherData(filteredWeatherData)
})