import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World!, Your Node .mjs Server is running and listening at Port:"+ port)
})

app.get('/water', (req, res) => {
    res.send("Hello World!, Take the water")
  })

app.get('/food', (req, res) => {
    res.send("Hello World!, here is your food")
  })


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
