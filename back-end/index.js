const upload = require('./upload')
const express = require('express');
const connection = require('./config');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

const cors = require('cors');

/*const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

app.post('/upload', upload);

app.get('/media' ,(req, res) => {
  connection.query('SELECT * FROM files_uploaded', (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des média ERRORS: ${err}`);
    } else {
      res.json(results);
    }
  });
})

app.post('/calendar', (req, res) => {
  console.log('Je suis dans calendar', req.body.data);
  const formData = req.body.data;

  connection.query('INSERT INTO calendar SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving a calendar");
    } else {
      res.sendStatus(200);
    }
  });
});

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

app.get('/api/movies', (req, res) => {
    console.log('On est dans GET');
  connection.query('SELECT * FROM movie', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/movies', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving an movie");
    } else {
      res.sendStatus(200);
    }
  });
});
*/
