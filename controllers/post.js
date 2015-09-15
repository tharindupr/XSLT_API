var Post = require('../models/post');
	
exports.getPost = function(req, res) {
	console.log('test');
Post.find(function(err, val) {
if (err)
	res.send(err);
		res.json(val);
}); 
};