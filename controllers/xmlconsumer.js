
var PythonShell = require('python-shell');
exports.create= function (req, res) {


var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('adapters/temp.xml', req.rawBody,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Data written successfully!");
   
 
});


var options = {
  
  args: ['temp.xml', req.query.id+'.xsl', 'value3']
};

PythonShell.run('parser.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
})


res.json({ message: 'created!' });


};

