import { WeatherData, CurrentConditionsDisplay, TemperatureDisplay } from './entities'

const weatherData = new WeatherData()
const currentConditions = new CurrentConditionsDisplay(weatherData)
const temperature = new TemperatureDisplay(weatherData)

setTimeout(() => {
  weatherData.removeObserver(currentConditions)
}, 5000)
