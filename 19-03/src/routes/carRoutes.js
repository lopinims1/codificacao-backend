import express from 'express'
import { carsService } from '../services/carServices.js'

const route = express.Router()

route.get('/', (req, res) => {
    res.json(carsService.getAll())
})

export default route 