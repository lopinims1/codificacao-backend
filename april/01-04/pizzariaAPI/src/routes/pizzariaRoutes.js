import express from 'express';
import { pizzariaServices } from '../services/pizzariaServices.js';

const route = express.Router();

route.get('/', (req, res) => {
    res.json(pizzariaServices.getAllPizzas());
});

route.get('/:id', (req, res) => {
    const { id } = req.params;
    const pizza = pizzariaServices.getPizzaById(id);

    if (!pizza) {
        return res.status(404).json({ message: 'Pizza not found' });
    }
});

route.post('/', (req, res) => {
    const newPizza = req.body;
    const createdPizza = pizzariaServices.createPizza(newPizza);
    res.status(201).json(createdPizza);
});

route.patch('/:id', (req, res) => {
    const { id } = req.params;
    const updatedPizza = req.body;
    const patchedPizza = pizzariaServices.updatePizza(id, updatedPizza);
    if (!patchedPizza) {
        return res.status(404).json({ message: 'Pizza not found' });
    }
    res.json(patchedPizza);
});

route.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedPizza = pizzariaServices.deletePizza(id);
    if (!deletedPizza) {
        return res.status(404).json({ message: 'Pizza not found' });
    }
    res.status(200).json({ message: 'Pizza deleted successfully' });
});

export default route;