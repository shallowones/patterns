import { CondimentDecorator } from './CondimentDecorator'
import { Beverage } from './Beverage'

export class Mocha extends CondimentDecorator {
  beverage: Beverage

  constructor(b: Beverage) {
    super()

    this.beverage = b
  }

  cost () {
    return this.beverage.cost() + 0.2
  }

  getDescription () {
    return this.beverage.getDescription() + ' + mocha'
  }
}
