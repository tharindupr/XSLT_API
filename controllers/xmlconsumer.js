
var PythonShell = require('python-shell');
var Post = require('../models/post');
exports.create= function (req, res) {


var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('adapters/temp.xml', req.rawBody,  function(err) {
   if (err)
   {
       return console.error(err);
   }
   console.log("Data written successfully!");
   
 
});


var options = {
  
  args: ['temp.xml', req.query.sender+'.xsl', 'value3']
};



PythonShell.run('parser.py', options, function (err, results) {
	if (err) res.json({ message: 'failed' });	

	else
	{ 
		console.log('results: %j', results); 
		var post= new Post();
		post.owner=req.query.sender;
		post.content=results;
		post.save(function(err) {
		if (err) res.send(err);
		res.json({ message: 'created!' });
		});


	}
  // results is an array consisting of messages collected during execution
  
})







};


