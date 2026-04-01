import express from 'express'
import route from './routes/filmsRoute.js'


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('There are no routes here.')
})

app.use('/films', route)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})