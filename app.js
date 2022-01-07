const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
}).then(() => {
  console.log('Mongoodb connected')
}).catch((err) => {
  console.log('Error occured', err)
  process.exit
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))