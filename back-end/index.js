const express = require("express");
const app = express();
// const multer  = require('multer')
const port = 5000;
const routeur = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use( bodyParser.json() );
// const handleForm = multer();
app.use(cors());
app.use('/api/', routeur);
const mysql = require('mysql');
//local mysql db connection
const sql = mysql.createConnection({
  host :  'localhost', 
  user :  'root',
  password :  '',
  database :  'calendar',
});
sql.connect(function(err) {
    if (err) throw err;
		console.log(`Connected to database`);
});
routeur.post('/calendars', (req, res) => {
	newMovie = req.body.data
	sql.query("INSERT INTO calendar set ?", newMovie, (err, res) => {
		if(err) {
				console.log("error: ", err);
				//result(err, null);
		} else {
				console.log(res.insertId);
				//result(null, res.insertId);
		}
	 });
 })
routeur.get('/calendars', (req, res) => {
	sql.query('SELECT * from calendar', (err, results) =>{
		if(err){
			res.status(500).send(`There is an error : ${err}`)
		} else {
			res.json(results)
		}
	})
})
app.listen( port, (err) => {
	if(err) {
		throw new Error(`There is an error : ${err}`);
	}
	console.log(`Listening on Port ${port}`)
})
