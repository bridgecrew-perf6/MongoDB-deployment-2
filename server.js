// require('dotenv').config()

const express = require('express')
const req = require('express/lib/request')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.get('/' ,(req,res) => {
    res.send({msg: "Welcome to Kago's Subscriber List"})
})

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)










const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen(3000, () => console.log('Server Started'))