//const connection = require('./config');

//const bodyParser = require('body-parser');
const upload = require('./upload')
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

app.post('/upload', upload);


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
