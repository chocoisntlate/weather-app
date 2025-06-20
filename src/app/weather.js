


const APIKEY = "H4Q22D2ZHZT2TZW777V2F3A7E"

export async function getWeatherData(city) {
    const requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${APIKEY}`

    let response = await fetch(requestURL, {mode: 'cors'})
    let data = await response.json()
    return data
}