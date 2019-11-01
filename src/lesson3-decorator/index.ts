import { DarkRoast, Mocha, Whip } from './entities'
import { ESize } from './types'

const darkRoast = new DarkRoast(ESize.GRANDE)
console.log(darkRoast.getDescription(), darkRoast.cost())

const beverage2 = new Mocha(darkRoast)
console.log(beverage2.getDescription(), beverage2.cost())

const beverage3 = new Mocha(new Whip(darkRoast))
console.log(beverage3.getDescription(), beverage3.cost())
