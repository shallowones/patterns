import { ChicagoStylePizzaStore, NYStylePizzaStore } from './entities'

const chicagoPizzaStore = new ChicagoStylePizzaStore()
const chicagoCheesePizza = chicagoPizzaStore.orderPizza('cheese')
console.log('chicago cheese pizza', chicagoCheesePizza)

const nyPizzaStore = new NYStylePizzaStore()
const nyCheesePizza = nyPizzaStore.orderPizza('cheese')
console.log('chicago cheese pizza', nyCheesePizza)
