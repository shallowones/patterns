import { IBeverage, ESize } from '../types'

export abstract class Beverage implements IBeverage {
  static SIZE = ESize

  description: string = 'Unknown Beverage'
  size: ESize = Beverage.SIZE.TALL

  abstract cost()

  getDescription() {
    return this.description
  }

  getSize() {
    return this.size
  }

  setSize(size: ESize) {
    this.size = size
  }
}
