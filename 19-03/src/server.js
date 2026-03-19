import express from 'express'
import route from './routes/carRoutes.js'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.json('No routes here')
})

app.use('/cars', route)

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})