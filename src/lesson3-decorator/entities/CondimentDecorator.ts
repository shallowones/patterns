import { Beverage } from './Beverage'
import { ESize } from '../types'

export abstract class CondimentDecorator extends Beverage {
  protected abstract beverage: Beverage
  abstract getDescription(): string

  protected multiplierMap = {
    [ESize.TALL]: 1,
    [ESize.GRANDE]: 1.5,
    [ESize.VENTI]: 2,
  }

  protected getMultiplier() {
    return this.multiplierMap[this.beverage.getSize()]
  }
}
