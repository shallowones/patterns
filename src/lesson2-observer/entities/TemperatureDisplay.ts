import { Observer, DisplayElement } from '../types'
import { WeatherData } from './WeatherData'

export class TemperatureDisplay implements Observer, DisplayElement {
  private temp = undefined

  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    this.weatherData.registerObserver(this)
  }

  update(temp: string) {
    this.temp = temp

    this.display()
  }

  display() {
    console.log('current temperature: ', this.temp)
  }
}
