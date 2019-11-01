import { QuackBehavior } from '../types'

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack')
  }
}
