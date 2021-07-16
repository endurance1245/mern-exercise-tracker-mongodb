const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


//Below is used so that we can use .env config file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


/* Below we are using the environment variable we have defined in .env file defined locally. Using this env variable we try to make a connection 
to the respective Mongodb database.*/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;

//Below line says once the connection is open, log message that Mongodb db connection established successfully.
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

/* API endpoints, here anyone who wants to access localhost:5000/exercises would eventually 
access localhost:5000/routes/exercises, where in requirement below is we should have defined the file ./routes/exercises */

/* Importing these files */
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

/* Using these files */
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
