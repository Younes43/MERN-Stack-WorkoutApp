const express = require('express')

const router=express.Router()

// GET all workouts
router.get('/', (res, req) => {
    res.json({msg:'GET all workouts'})
})

// GET a single workout
router.get('/:id', (res,req) => {
    res.json({msg:'GET a single workout'})
})

//POST a new workout
router.post('/', (res,req) => {
    res.json({msg:'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', (res,req) => {
    res.json({msg:'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (res,req) => {
    res.json({msg:'UPDATE a workout'})
})

module.exports =router