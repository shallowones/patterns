import { Beverage } from './Beverage'
import { ESize } from '../types'

export class DarkRoast extends Beverage {
  description: string = 'Dark Roast'

  constructor(size: ESize) {
    super()

    this.size = size
  }

  cost () {
    return 0.99
  }
}
