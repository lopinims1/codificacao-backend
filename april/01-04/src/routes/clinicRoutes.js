import express from 'express'
import { clinicService } from '../services/clinicServices.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json(clinicService.getAllPatients())
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const patient = clinicService.getPatientsById(id)

    if (!patient)
        return res.status(404).json(
            { message: 'Patient not found' })

    res.json(patient)
})

router.post('/', (req, res) => {
    const created = clinicService.createPatient(req.body)
    res.status(201).json(created)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const patched = clinicService.updatePatch(id, req.body)

    if (!patched) return res.status(404).json(
        { message: 'Patient not found' })

    res.json(patched)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleted = clinicService.deletePatient(id)
    if (!deleted) return res.status(404).json({ message: 'Patient not found' })
    res.status(200).json({ message: 'Patient deleted successfully' }) 
})



export default router
