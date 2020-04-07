const router = require('express').Router();

const { Workout } = require('../models');

//update workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(e => console.log(e));
});

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.log(e));
});

// Get workout by range
router.get('/workouts/range', (req, res) => {
  Workout.find(req.body)
    .limit(7)
    .then(workout => {
      res.json(workout);
    })
    .catch(e => console.log(e));
});

// POST a workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(e => console.log(e));
});

// PUT a workout
router.put('/workouts/:id', (req, res) => {
  Workout.update({ id: req.params.id }, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
});

// DELETE a workout
router.delete('/workouts', (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
});

module.exports = router;