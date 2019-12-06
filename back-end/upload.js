const IncomingForm = require('formidable').IncomingForm;
const connection = require('./config');

module.exports = function upload(req, res) {
    let form = new IncomingForm();

    form.uploadDir = "../public/calendar-contenu";
  
    form.on('file', (field, file) => {
        /*console.log('je suis dans form.on');
        console.log('file', file);
        console.log('file', file.path);*/
        /*console.log('formData', formData);*/
        const formData = {
            path: file.path,
            file_name: file.name,
        }
        console.log('formData: ', formData);
        
        connection.query('INSERT INTO files_uploaded SET ?', formData, (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error saving an media uploaded");
              } else {
                res.status(200);
              }
        });

      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
    })
  
    form.on('end', () => {
      res.json()
    })
  
    form.parse(req)
}