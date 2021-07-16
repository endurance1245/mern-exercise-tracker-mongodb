const router = require('express').Router();
let Exercise = require('../models/exercise.model');

/* Below command says if we receive request as localhost:5000/exercies/ do exercise.find where exercise we have imported from exercise.model and 
then if we find exercises then return all exercises in json format else throw an error. */
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;

  //Below we are converting duration to a number type and then date to a date datatype.
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  /* After we get the exercise details as above using req from POST method, we basically pass the values in Exercise method, and then using below save method 
  we save the exercise in MongoDB database, and on save we get then and response 'Exercise added' */
  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/* As below we can see that if we get request like localhost:5000/exercises/:id it would be a GET request and fetch the records related to the particular ID. So
we can see its using Exercise.findById and taking the id in params we passed in URL. Now once we get exercise, we then show the same in res.json */
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Next request is delete request, where we pass the ID and then using mongoose method findbyidanddelete we delete the entry corresponding to our ID for 
record in database */
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* This request below is used as localhost:5000/update/:id where we first the record using findbyid and then we take the updated values from POST request we did and 
on then the exercise that we got from DB using ID, we update its values from the POST request parameters we got, we will do exercise.save and on then we will say
exercise updated */
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
