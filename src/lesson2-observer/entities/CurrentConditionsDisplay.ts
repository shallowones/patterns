import { Observer, DisplayElement } from '../types'
import { WeatherData } from './WeatherData'

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private state = {
    temp: undefined,
    hum: undefined,
    pressure: undefined,
  }

  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
      this.weatherData = weatherData
      this.weatherData.registerObserver(this)
  }

  update(temp: string, hum: string, pressure: string) {
    this.state = { temp, hum, pressure }

    this.display()
  }

  display() {
    const { temp, hum, pressure } = this.state

    console.log('current conditions: ', temp, hum, pressure)
  }
}
