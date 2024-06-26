require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
// routes
// app.get('/', (rq, res) => {
//     res.json({msg:'Welcom to the App'})
// })

app.use('/api/workouts', workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      //listen for requests 
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port',process.env.PORT)
        })  
    })
    .catch((error) => {
        console.log(error)
    })
