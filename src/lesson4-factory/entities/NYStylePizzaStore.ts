import { PizzaStore } from './PizzaStore'
import { NYStyleCheesePizza } from './NYStyleCheesePizza'
import { NYStylePepperoniPizza } from './NYStylePepperoniPizza'

export class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza()
    } else if (type === 'pepperoni') {
      pizza = new NYStylePepperoniPizza()
    }

    return pizza
  }
}
