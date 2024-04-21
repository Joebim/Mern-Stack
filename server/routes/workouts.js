const express = require('express');

const {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateworkout
} = require('../controllers/workoutController')

const router = express.Router();

//GET all Workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getworkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', updateworkout)

module.exports = router