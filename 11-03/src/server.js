const express = require('express')
const app = express()
const port = 3000

const students = [
  { id: 1, name: 'Miguel', idade: 16 },
  { id: 2, name: 'Ana', idade: 17 },
  { id: 3, name: 'Kalyton', idade: 80 }
]

const fruits = [
  {name: 'banana', price: 2.49},
  {name: 'maça', price: 3.49},
  {name: 'uva', price: 3.99},
  {name: 'abacate', price: 4.29},
  {name: 'abacaxi', price: 4.99},
]

const newGames = [
  {name: 'Resident Evil: Requiem', price: 69.99},
  {name: 'Reanimal', price: 39.99},
  {name: 'Call of Duty: Black Ops 7', price: 59.99},
  {name: 'Lego: Batman', price: 69.99},
]

app.get('/', (req, res) => {
  res.send('There are no routes here.')
})

app.get('/fruits', (req, res) => {
  res.json({
    sucess: true,
    data: fruits
  })
})

app.get('/students', (req, res) => {
  res.json({
    sucess: true,
    data: students
  })
})

app.get('/newGames', (req, res) => {
  res.json({
    sucess: true,
    data: newGames
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
