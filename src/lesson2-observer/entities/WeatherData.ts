import { Subject, Observer } from '../types'

export class WeatherData implements Subject {
  private observers: Observer[] = []

  constructor() {
    setInterval(() => {
      this.measurementChanged()
    }, 1000)
  }

  private getTemperature() {
    return 'temperature'
  }

  private getHumidity() {
    return 'humidity'
  }

  private getPressure() {
    return 'pressure'
  }

  private measurementChanged() {
    this.notifyObservers(this.getTemperature(), this.getHumidity(), this.getPressure())
  }

  public registerObserver(observer: Observer) {
    this.observers.push(observer)

    return this
  }

  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter((registeredObserver: Observer) => {
      return registeredObserver !== observer
    })

    return this
  }

  public notifyObservers(temp: string, hum: string, pressure: string) {
    this.observers.forEach((observer: Observer) => {
      observer.update(temp, hum, pressure)
    })
  }
}
