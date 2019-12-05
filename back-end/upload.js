const IncomingForm = require('formidable').IncomingForm


module.exports = function upload(req, res) {
    let form = new IncomingForm();

    form.uploadDir = "../public/calendar-contenu";
  
    form.on('file', (field, file) => {
        console.log('je suis dans form.on');
        console.log('field', field);
        console.log('file', file.path);
      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
    })
  
    form.on('end', () => {
      res.json()
    })
  
    form.parse(req)
}