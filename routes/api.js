var express = require('express');
var router = express.Router();

var xmlController = require('../controllers/xmlconsumer');
var adapterController = require('../controllers/adapter');


router.route('/plug')
	
	
	.post(function(req, res, next) {
	adapterController.plug(req, res)
	});


router.route('/create')
	
	.get(xmlController.create)

	.post(function(req, res, next) {
	xmlController.create(req, res)
	});



module.exports = router;