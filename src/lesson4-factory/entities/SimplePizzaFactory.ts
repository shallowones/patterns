import { NYStyleCheesePizza } from './NYStyleCheesePizza'
import { PepperoniPizza } from './PepperoniPizza'

export class SimplePizzaFactory {
  createPizza(type: string) {
    let pizza

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza()
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza()
    }

    return pizza
  }
}
