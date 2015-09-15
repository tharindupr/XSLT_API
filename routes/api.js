var express = require('express');
var router = express.Router();

var xmlController = require('../controllers/xmlconsumer');
var adapterController = require('../controllers/adapter');
var postController = require('../controllers/post');

router.route('/plug')
	
	
	.post(function(req, res, next) {
	adapterController.plug(req, res)
	});


router.route('/create')
	
	.get(xmlController.create)

	.post(function(req, res, next) {
	xmlController.create(req, res)
	});


router.route('/posts')


	.get(postController.getPost);


module.exports = router;