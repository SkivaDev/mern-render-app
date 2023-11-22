import express from 'express'
import cors from 'cors'
import pg from 'pg'

import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER, FRONTEND_URL, PORT } from './config.js'


console.log(DB_HOST);

const app = express()
const pool = new pg.Pool({
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST
})


app.use(cors({
  origin: FRONTEND_URL
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {

  res.send({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  })
})

app.get('/ping', async (req, res) => {

  const result = await pool.query('SELECT NOW ()')
  console.log("wtf");

  res.send({
    pong: result.rows[0].now
  });
})

app.listen(PORT, () => {
  console.log('Server started on port 3000!')
})
