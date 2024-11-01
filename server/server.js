import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from "./config/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

ConnectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Oh wow, your server is up and running. Ready to make something beautiful?')
})


app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`)
})