


const APIKEY = "H4Q22D2ZHZT2TZW777V2F3A7E"

export async function getWeatherData(city) {
    const requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${APIKEY}`

    // TODO: error handling
    try {
        let response = await fetch(requestURL, {mode: 'cors'})
        let data = await response.json()
        console.log(data);
        return data

    } catch(e) {
        // something
    }

}

export async function filterWeatherData(city) {
    const data = await getWeatherData(city)
    const object = {}
    object.address = data.address
    object.timezone = data.timezone
    object.description = data.description

    object.currentTime = data.currentConditions.datetime
    object.currentConditions = data.currentConditions.conditions
    object.currentFeelslike = data.currentConditions.feelslike
    object.currentHumidity = data.currentConditions.humidity
    object.currentTemperature = data.currentConditions.temp 
    object.currentWindspeed = data.currentConditions.windspeed
    object.precipprob = data.currentConditions.precipprob
    object.uvindex = data.currentConditions.uvindex

    console.log(object);
    return object
}