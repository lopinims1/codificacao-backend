import express from 'express';
import { fruitServices } from '../services/fruitServices.js';
const router = express.Router();

router.get('/', (req, res) => {
    const fruits = fruitServices.getAllFruits();
    res.json(fruits);
});

router.get('/:id', (req, res) => {
    const fruit = fruitServices.getFruitById(req.params.id);

    if (!fruit) return res.status(404).json({ message: 'Fruit not found' });
    res.json(fruit);
});

router.patch('/:id', (req, res) => {
    const updated = fruitServices.patchFruit(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Fruit not found' });
    res.json(updated);
});

router.put('/:id', (req, res) => {
    const updated = fruitServices.putFruit(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Fruit not found' });
    res.json(updated);
});

export default router;