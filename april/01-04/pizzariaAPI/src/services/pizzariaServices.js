import pizzas from '../database/pizzariaDB.js';

class PizzariaServices {

    getAllPizzas() {
        return pizzas;
    }

    getPizzaById(id) {
        const pizza = pizzas.find(p => p.id === parseInt(id));

        return pizza;
    }

    updatePizza(id, updatedPizza) {
        const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(id));
        if (pizzaIndex === -1) {
            return null;
        }
        pizzas[pizzaIndex] = { id: parseInt(id), ...updatedPizza };
        return pizzas[pizzaIndex];
    }

    deletePizza(id) {
        const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(id));

        if (pizzaIndex === -1) {
            return null;
        }

        const deletedPizza = pizzas.splice(pizzaIndex, 1);
        return deletedPizza[0];
    }

    createPizza(newPizza) {
        const newId = pizzas.length > 0 ? pizzas[pizzas.length - 1].id + 1 : 1;
        const pizzaToAdd = { id: newId, ...newPizza };
        
        pizzas.push(pizzaToAdd);
        return pizzaToAdd;
    }
}

export const pizzariaServices = new PizzariaServices();
