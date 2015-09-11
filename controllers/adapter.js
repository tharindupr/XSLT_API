var PythonShell = require('python-shell');

exports.plug = function (req, res) {

var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('adapters/adapter.xml', req.rawBody,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Data written successfully!");
   
 /*  fs.readFile('adapter.xml', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });*/
});

var options = {
  
  args: [req.query.sender, 'abc.xsl', 'value3']
};

PythonShell.run('adapter.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
})


res.json({ message: 'adapter plugged successfully' });


};

