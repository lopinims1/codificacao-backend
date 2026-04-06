import fruits from '../database/fruitsDB.js';

class FruitServices {
    getAllFruits() {
        return fruits;
    }

    getFruitById(id) {
        const fruit = fruits.find(fruit => fruit.id === parseInt(id));
        return fruit;
    }

    patchFruit(id, updatedFields) {
        const fruitIndex = fruits.findIndex(fruit => fruit.id === parseInt(id));
        if (fruitIndex === -1) return null;

        fruits[fruitIndex] = { ...fruits[fruitIndex], ...updatedFields };
        return fruits[fruitIndex];
    }


    putFruit(id, newFruit) {
        const fruitIndex = fruits.findIndex(fruit => fruit.id === parseInt(id));
        if (fruitIndex === -1) return null;

        const { id: _, ...fields } = newFruit;
        fruits[fruitIndex] = { ...fields, id: parseInt(id) };
        return fruits[fruitIndex];
    }
}

export const fruitServices = new FruitServices();