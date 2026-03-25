import express from 'express'
const route = express.Router()

import filmsServices from '../services/filmsServices.js'

route.get('/', (req, res) => {
    res.json(filmsServices.getFilms())

    
    const film = filmsServices.getById(req.params.id)

    if(!film) {
        return res.status(404).json({msg: 'Film not found'})
    }
    res.json(film)
});

export default route