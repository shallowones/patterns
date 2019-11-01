import { MallardDuck, FlyNoWay } from './entities'

const mallard = new MallardDuck()

mallard.performQuack()
mallard.performFly()

mallard.setFlyBehavior(new FlyNoWay())

mallard.performFly()
