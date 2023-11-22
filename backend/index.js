import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: "http://localhost:5173"
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000!')
})
