import { CondimentDecorator } from './CondimentDecorator'
import { Beverage } from './Beverage'
import { ESize } from '../types'

export class Whip extends CondimentDecorator {
  beverage: Beverage

  multiplierMap = {
    [ESize.TALL]: 2,
    [ESize.GRANDE]: 2.5,
    [ESize.VENTI]: 3,
  }

  constructor(b: Beverage) {
    super()

    this.beverage = b
  }

  cost() {
    return this.beverage.cost() + 0.1 * this.getMultiplier()
  }

  getDescription() {
    return this.beverage.getDescription() + ' + whip'
  }
}
