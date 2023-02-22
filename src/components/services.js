const apiKeyWeather = "620f0f201ef14dd7800204338231902"
const baseApiWeather = "http://api.weatherapi.com/v1"

export const searchCity7Days = (localization) => {
    return fetch(`${baseApiWeather}/forecast.json?key=${apiKeyWeather}&q=${localization}&days=7`)
}

export const searchCity = (localization) => {
    return fetch(`${baseApiWeather}/search.json?key=${apiKeyWeather}&q=${localization}`)
}