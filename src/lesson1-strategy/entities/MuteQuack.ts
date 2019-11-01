import { QuackBehavior } from '../types'

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<< Silence >>')
  }
}
