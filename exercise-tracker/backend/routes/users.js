const router = require('express').Router();
let User = require('../models/user.model');


//This will handle HTTP GET requests from the /users URL
router.route('/').get((req, res) => {

/*This .find is a mongoose method that will get a list of all users from mongodb database So after finding the users, 
then the users which we got please send them as response to us and show in json format.*/
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


/*This route is used to add any new user in mongodb database, and we can see that this would be a post request,
 where we would be sending these details as we can see req.body.username*/
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});

 //Once new user is added to the database, then we will return 'User added' in json 
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;