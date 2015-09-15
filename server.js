// server.js


// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var PythonShell = require('python-shell');
var xmlparser = require('express-xml-bodyparser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/data');

app.use(xmlparser());
app.use('/api',require('./routes/api'));



/*
var options = {
  
  args: ['abc.xml', 'abc.xsl', 'value3']
};

PythonShell.run('parser.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
})*/



var port = process.env.PORT || 8080;        // set our port



//app.use('/api',require('./routes/api'))


// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Magic happens on port ' + port);