import { PizzaStore } from './PizzaStore'
import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza'
import { ChicagoStylePepperoniPizza } from './ChicagoStylePepperoniPizza'

export class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza

    if (type === 'cheese') {
      pizza = new ChicagoStyleCheesePizza()
    } else if (type === 'pepperoni') {
      pizza = new ChicagoStylePepperoniPizza()
    }

    return pizza
  }
}
