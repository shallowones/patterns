export interface Subject {
  registerObserver(observer: Observer): Subject
  removeObserver(observer: Observer): Subject
  notifyObservers(temp: string, hum: string, pressure: string): void
}

export interface Observer {
  update(temp: string, hum: string, pressure: string): void
}

export interface DisplayElement {
  display(): void
}
