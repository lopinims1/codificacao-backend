const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

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

const students = [
  { id: 1, name: 'Miguel', age: 16 },
  { id: 2, name: 'Ana', age: 17 },
  { id: 3, name: 'Kalyton', age: 80 }
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

app.get('/newGames', (req, res) => {
  res.json({
    sucess: true,
    data: newGames
  })
})


//-----------------------------------------------------------//


app.get('/students', (req, res) => {
  res.json({
    sucess: true,
    data: students
  })
})

// GET /students/:id - Return sutudents by id
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(s => s.id === id)
  if (!student) {
    return res.status(404).json({
      sucess: false,
      message: 'Student not found',
    })
  }
  res.json({
    sucess: true,
    data: student,
  })
})

//-----------------------------------------------------------//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// POST - Create a new student

app.post('/students', (req, res) => {
  const { name, age } = req.body
  if (!name || !age) {
    return res.status(400).json({
      sucess: false,
      message: 'Name and age are required',
    })
  }
  const newStudent = {
    id: students.length + 1,
    name,
    age
  }
  students.push(newStudent)
  res.status(201).json({
    sucess: true,
    data: newStudent,
    message: 'Student created successfully',
  })
})
