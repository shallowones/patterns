import { FlyBehavior } from '../types'

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!!")
  }
}
